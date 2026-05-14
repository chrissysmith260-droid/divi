const express = require('express');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const bcrypt = require('bcrypt');
const db = require('./db');
const tarotCards = require('./tarot');
const app = express();
const port = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  store: new SQLiteStore({ db: 'sessions.db', dir: __dirname }),
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Set to true in production with HTTPS
}));

// Middleware to check if user is logged in
function requireLogin(req, res, next) {
  if (req.session.userId) {
    return next();
  } else {
    res.redirect('/login');
  }
}

// Middleware to check premium status
function requirePremium(req, res, next) {
  if (req.session.isPremium) {
    return next();
  } else {
    res.render('upgrade', { message: 'This feature requires a premium membership.' });
  }
}

// Sample bible texts (simplified for demo)
const bibleTexts = {
  christian: {
    genesis: {
      1: {
        1: "In the beginning God created the heaven and the earth.",
        2: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters."
      }
    }
  },
  jewish: {
    genesis: {
      1: {
        1: "In the beginning God created the heaven and the earth. (Hebrew: Bereshit bara Elohim et hashamayim ve'et ha'aretz.)",
        2: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters."
      }
    }
  },
  muslim: {
    quran: {
      1: {
        1: "In the name of Allah, the Most Gracious, the Most Merciful.",
        2: "All praise is due to Allah, the Lord of the Worlds."
      }
    }
  },
  pagan: {
    "wheel of the year": {
      1: {
        1: "Samhain: The veil between worlds is thin. Honor the dead and reflect on the cycle of life and death.",
        2: "Yule: Winter solstice, rebirth of the sun. Celebrate light returning to the world."
      }
    },
    "elements": {
      1: {
        1: "Earth: Stability, grounding, fertility. Associated with the north.",
        2: "Air: Intellect, communication, freedom. Associated with the east."
      }
    }
  }
};

// Routes
app.get('/', (req, res) => {
  res.render('index', { user: req.session.userId ? { id: req.session.userId, isPremium: req.session.isPremium } : null });
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.run('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], function(err) {
    if (err) {
      return res.render('register', { error: 'Username already exists' });
    }
    req.session.userId = this.lastID;
    req.session.isPremium = 0;
    res.redirect('/');
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
    if (err || !user || !(await bcrypt.compare(password, user.password))) {
      return res.render('login', { error: 'Invalid credentials' });
    }
    req.session.userId = user.id;
    req.session.isPremium = user.is_premium;
    res.redirect('/');
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.get('/sermon-generator', requireLogin, (req, res) => {
  res.render('sermon-generator', { user: { id: req.session.userId, isPremium: req.session.isPremium } });
});

app.post('/generate-sermon', requireLogin, (req, res) => {
  const { topic, scripture, audience } = req.body;
  // Simple sermon generation logic
  const sermon = {
    title: `Sermon on ${topic}`,
    introduction: `Today, we will explore the topic of ${topic}, drawing from ${scripture}.`,
    mainPoints: [
      `Point 1: Understanding ${topic} in context.`,
      `Point 2: Application to our lives.`,
      `Point 3: Conclusion and call to action.`
    ],
    conclusion: `Let us pray and reflect on how we can apply ${topic} in our daily lives.`
  };
  res.render('sermon-result', { sermon, user: { id: req.session.userId, isPremium: req.session.isPremium } });
});

app.post('/save-sermon', requireLogin, (req, res) => {
  const { title, introduction, mainPoints, conclusion } = req.body;
  const mainPointsStr = JSON.stringify(mainPoints.split('\n'));
  db.run('INSERT INTO sermons (user_id, title, introduction, main_points, conclusion) VALUES (?, ?, ?, ?, ?)',
    [req.session.userId, title, introduction, mainPointsStr, conclusion], function(err) {
    if (err) {
      return res.send('Error saving sermon');
    }
    res.redirect('/my-sermons');
  });
});

app.get('/my-sermons', requireLogin, (req, res) => {
  db.all('SELECT * FROM sermons WHERE user_id = ? ORDER BY created_at DESC', [req.session.userId], (err, sermons) => {
    if (err) {
      return res.send('Error loading sermons');
    }
    sermons.forEach(sermon => {
      sermon.mainPoints = JSON.parse(sermon.main_points);
    });
    res.render('my-sermons', { sermons, user: { id: req.session.userId, isPremium: req.session.isPremium } });
  });
});

app.get('/edit-sermon/:id', requireLogin, (req, res) => {
  db.get('SELECT * FROM sermons WHERE id = ? AND user_id = ?', [req.params.id, req.session.userId], (err, sermon) => {
    if (err || !sermon) {
      return res.send('Sermon not found');
    }
    sermon.mainPoints = JSON.parse(sermon.main_points).join('\n');
    res.render('edit-sermon', { sermon, user: { id: req.session.userId, isPremium: req.session.isPremium } });
  });
});

app.post('/update-sermon/:id', requireLogin, (req, res) => {
  const { title, introduction, mainPoints, conclusion } = req.body;
  const mainPointsStr = JSON.stringify(mainPoints.split('\n'));
  db.run('UPDATE sermons SET title = ?, introduction = ?, main_points = ?, conclusion = ? WHERE id = ? AND user_id = ?',
    [title, introduction, mainPointsStr, conclusion, req.params.id, req.session.userId], function(err) {
    if (err) {
      return res.send('Error updating sermon');
    }
    res.redirect('/my-sermons');
  });
});

app.get('/bible-viewer', (req, res) => {
  res.render('bible-viewer', { religions: Object.keys(bibleTexts), user: req.session.userId ? { id: req.session.userId, isPremium: req.session.isPremium } : null });
});

app.post('/get-verse', (req, res) => {
  const { religion, book, chapter, verse } = req.body;
  const text = bibleTexts[religion]?.[book]?.[chapter]?.[verse] || "Verse not found.";
  res.render('bible-display', { text, religion, book, chapter, verse, user: req.session.userId ? { id: req.session.userId, isPremium: req.session.isPremium } : null });
});

app.get('/tarot', requirePremium, (req, res) => {
  res.render('tarot', { tarotCards, user: { id: req.session.userId, isPremium: req.session.isPremium } });
});

app.get('/notes', requireLogin, (req, res) => {
  db.all('SELECT * FROM notes WHERE user_id = ? ORDER BY created_at DESC', [req.session.userId], (err, notes) => {
    if (err) {
      return res.send('Error loading notes');
    }
    res.render('notes', { notes, user: { id: req.session.userId, isPremium: req.session.isPremium } });
  });
});

app.post('/add-note', requireLogin, (req, res) => {
  const { title, content } = req.body;
  db.run('INSERT INTO notes (user_id, title, content) VALUES (?, ?, ?)', [req.session.userId, title, content], function(err) {
    if (err) {
      return res.send('Error saving note');
    }
    res.redirect('/notes');
  });
});

app.get('/ai-tools', requirePremium, (req, res) => {
  res.render('ai-tools', { user: { id: req.session.userId, isPremium: req.session.isPremium } });
});

app.post('/ai-generate', requirePremium, (req, res) => {
  const { prompt } = req.body;
  // Placeholder for AI generation - in real app, integrate with OpenAI or similar
  const result = `AI-generated content based on: ${prompt}. (This is a placeholder - integrate with actual AI service)`;
  res.render('ai-result', { result, user: { id: req.session.userId, isPremium: req.session.isPremium } });
});

app.get('/upgrade', (req, res) => {
  res.render('upgrade', { user: req.session.userId ? { id: req.session.userId, isPremium: req.session.isPremium } : null });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});