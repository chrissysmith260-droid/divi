/**
 * SERMON ENGINE - EXPRESS INTEGRATION GUIDE
 * ==========================================
 * 
 * This file shows how to integrate the Sermon Prompt Engine into your 
 * existing Express application (index.js).
 * 
 * COPY & ADAPT THE SECTIONS BELOW INTO YOUR index.js
 */

// ============================================================================
// STEP 1: ADD IMPORTS AT THE TOP OF index.js
// ============================================================================

/*
// Add these lines near the top of your index.js, with your other requires:

const { createSermonRoutes, SermonGenerationService } = require('./sermon-generator-integration');
const sermonEngine = require('./sermon-prompt-engine');
*/

// ============================================================================
// STEP 2: CREATE THE SERMON SERVICE INSTANCE
// ============================================================================

/*
// After initializing your Express app, create a sermon service:

const app = express();
const port = process.env.PORT || 3000;

// ... your existing middleware setup ...

// Initialize sermon generation service
const sermonService = new SermonGenerationService(
  process.env.AI_PROVIDER || 'openai'
);
*/

// ============================================================================
// STEP 3: MOUNT SERMON ROUTES
// ============================================================================

/*
// After all your other route definitions, add:

// Mount sermon generation routes
createSermonRoutes(app, db);

// Optionally, create a custom dashboard route for sermon management:
app.get('/sermon-dashboard', requireLogin, (req, res) => {
  res.render('sermon-dashboard', {
    user: {
      id: req.session.userId,
      isPremium: req.session.isPremium
    }
  });
});
*/

// ============================================================================
// COMPLETE EXAMPLE: MINIMAL INTEGRATION
// ============================================================================

const express = require('express');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const bcrypt = require('bcrypt');
const db = require('./db');
const tarotCards = require('./tarot');

// INTEGRATION: Import sermon modules
const { createSermonRoutes, SermonGenerationService } = require('./sermon-generator-integration');
const sermonEngine = require('./sermon-prompt-engine');

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
  cookie: { secure: false }
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

// INTEGRATION: Initialize sermon service
const sermonService = new SermonGenerationService(
  process.env.AI_PROVIDER || 'openai'
);

// ============================================================================
// YOUR EXISTING ROUTES
// ============================================================================

// Home route
app.get('/', (req, res) => {
  res.render('index', { 
    user: req.session.userId ? { id: req.session.userId, isPremium: req.session.isPremium } : null 
  });
});

// ... your existing authentication, bible, tarot routes ...

// ============================================================================
// INTEGRATION: SERMON GENERATION ROUTES
// ============================================================================

// Mount all sermon routes at once
createSermonRoutes(app, db);

// Optional: Add a sermon management dashboard
app.get('/sermon-generator', requireLogin, requirePremium, (req, res) => {
  res.render('sermon-generator', {
    user: {
      id: req.session.userId,
      isPremium: req.session.isPremium
    },
    traditions: [
      'Christian',
      'Jewish',
      'Islamic',
      'Buddhist',
      'Hindu',
      'Pagan',
      'Tarot',
      'Egyptian',
      'Indigenous',
      'Other'
    ],
    suggestedThemes: [
      'Balance',
      'Compassion',
      'Resilience',
      'Transformation',
      'Wisdom',
      'Grace',
      'Justice',
      'Community',
      'Renewal',
      'Inner Peace'
    ]
  });
});

// Optional: View saved sermons
app.get('/my-sermons', requireLogin, (req, res) => {
  db.all(
    'SELECT * FROM sermons WHERE user_id = ? ORDER BY created_at DESC',
    [req.session.userId],
    (err, sermons) => {
      if (err) {
        return res.status(500).render('error', { message: 'Database error' });
      }
      res.render('my-sermons', {
        user: {
          id: req.session.userId,
          isPremium: req.session.isPremium
        },
        sermons: sermons || []
      });
    }
  );
});

// Optional: View a specific sermon
app.get('/sermon/:id', requireLogin, (req, res) => {
  db.get(
    'SELECT * FROM sermons WHERE id = ? AND user_id = ?',
    [req.params.id, req.session.userId],
    (err, sermon) => {
      if (err || !sermon) {
        return res.status(404).render('error', { message: 'Sermon not found' });
      }
      res.render('sermon-viewer', {
        user: {
          id: req.session.userId,
          isPremium: req.session.isPremium
        },
        sermon
      });
    }
  );
});

// Optional: Delete a sermon
app.delete('/sermon/:id', requireLogin, (req, res) => {
  db.run(
    'DELETE FROM sermons WHERE id = ? AND user_id = ?',
    [req.params.id, req.session.userId],
    function(err) {
      if (err) {
        return res.status(500).json({ success: false, error: 'Database error' });
      }
      res.json({ success: true, message: 'Sermon deleted' });
    }
  );
});

// ============================================================================
// DATABASE SETUP (if you don't have a sermons table)
// ============================================================================

/*
// Run this once to create the sermons table:

db.exec(`
  CREATE TABLE IF NOT EXISTS sermons (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    theme TEXT,
    traditions TEXT,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);
*/

// ============================================================================
// START SERVER
// ============================================================================

app.listen(port, () => {
  console.log(`DiVi - The Belief Master is running on port ${port}`);
  console.log(`Sermon generation engine: ACTIVE`);
  console.log(`AI Provider: ${process.env.AI_PROVIDER || 'openai (default)'}`);
});

// ============================================================================
// OPTIONAL: API HELPER FUNCTIONS FOR YOUR FRONTEND
// ============================================================================

/**
 * These functions can be called from your EJS templates or frontend JS
 * to interact with the sermon system
 */

// Example: Get bridging language in your template
/*
<script>
async function getBridgingLanguage(traditions) {
  const response = await fetch(`/api/sermon/bridging-language?traditions=${traditions.join(',')}`);
  const data = await response.json();
  return data.suggestions;
}

// Example: Generate a sermon
async function generateSermon(request) {
  const response = await fetch('/api/sermon/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(request)
  });
  return await response.json();
}

// Example: Validate a sermon
async function validateSermon(sermonText) {
  const response = await fetch('/api/sermon/validate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sermonText })
  });
  return await response.json();
}
</script>
*/

// ============================================================================
// ENVIRONMENT VARIABLES TO SET
// ============================================================================

/*
# In your .env file or system environment:

# AI Provider Configuration
AI_PROVIDER=openai                    # or 'anthropic' or 'custom'
OPENAI_API_KEY=sk-...                 # if using OpenAI
ANTHROPIC_API_KEY=sk-...              # if using Anthropic

# Optional testing
MOCK_AI=false                         # Set to 'true' for testing without API keys

# Application
PORT=3000
NODE_ENV=development
*/

// ============================================================================
// TROUBLESHOOTING INTEGRATION
// ============================================================================

/*
Problem: "Cannot find module 'sermon-generator-integration.js'"
Solution: Make sure both sermon-*.js files are in the root directory

Problem: "OPENAI_API_KEY not set"
Solution: Set the environment variable: export OPENAI_API_KEY=your_key

Problem: "SermonGenerationService is not a constructor"
Solution: Check that sermon-generator-integration.js exports it correctly

Problem: "Routes are not working"
Solution: Make sure createSermonRoutes() is called AFTER app is initialized

*/

module.exports = {
  app,
  sermonService
};
