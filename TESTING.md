# Divine Insights - Testing & Implementation Guide

## Quick Start

### 1. Start the Application
```bash
cd /workspaces/divi
npm start
```

The app will start on `http://localhost:3000`

### 2. Test the New Design

#### Visual Design Elements
- Open the home page to see the new Divi title with blood red color and rabbinical font
- Notice the wine red gradient background with weathered parchment texture
- Navigation bar with flame animations on hover

#### Navigation Flame Effects
- **Home**: Standard navigation (no flame)
- **Sermon Generator**: Orange real fire effect (most intense)
- **Bible Viewer, My Sermons, Notes**: Blue flame animation
- **Login/Register**: Green flame animation
- **Tarot Guide, AI Tools**: Blue flame animation

### 3. Test User Workflows

#### Account Creation & Login
```
1. Go to http://localhost:3000/register
2. Create account with:
   - Username: testuser
   - Email: test@example.com
   - Password: testpass123
3. Logged in automatically
4. Go to http://localhost:3000/login to test login
```

#### Sermon Generator
```
1. Click "Sermon Generator" in navigation
2. Notice orange fire animation on hover
3. Fill in form:
   - Topic: Love
   - Scripture: John 3:16
   - Audience: Congregation
4. Generate sermon
5. Save sermon to library
6. View in "My Sermons"
```

#### Bible Viewer
```
1. Click "Bible Viewer"
2. Select religion (Christian, Jewish, Muslim, Pagan)
3. Choose book and chapter
4. View verse in large print format
```

#### Premium Features
```
1. Try to access Tarot Guide or AI Tools without premium
2. Redirected to upgrade page
3. See all premium benefits listed
```

---

## 💳 PayPal Integration Testing

### Payment Setup

#### Option 1: Direct PayPal Link (Easiest for Testing)
```
1. Click "Upgrade to Premium"
2. Scroll to "Pay with PayPal Now" button
3. Click direct PayPal.me link
4. Link: https://www.paypal.com/paypalme/CSVtv1997/9.99
```

#### Option 2: PayPal SDK Button (Production Ready)
The page includes a PayPal button that requires:
1. PayPal Client ID setup in upgrade.ejs script tag
2. Set to: `YOUR_PAYPAL_CLIENT_ID`
3. Replace with actual PayPal credentials

### Testing Premium Features After Payment
```
1. After simulated payment, user is marked as premium
2. Access Tarot Guide (Premium)
3. Access AI Tools (Premium)
4. Additional features unlocked
```

---

## 🎨 Design Features to Test

### 1. Responsive Design
- Test on mobile (375px width)
- Navigation should stack vertically
- Forms should be full width
- Text should remain readable

### 2. Animations
- Hover over navigation items to see flame effects
- Scroll through lists to see items appear
- Load pages to see Divi title glow animation

### 3. Form Interactions
- Click on input fields to see red glow effect
- Type in forms with serif fonts
- Submit forms successfully
- Error messages display properly

### 4. Color Scheme
- Wine red (#722f37) background
- Blood red (#DC143C) accents
- Cream/parchment (#F5DEB3) content areas
- Dark brown (#2C1810) text for readability

### 5. Typography
- Divi header in rabbinical font
- Body text in serif fonts
- Handwritten style for special elements

---

## 🐛 Debugging & Troubleshooting

### If Server Won't Start
```bash
# Check Node.js version
node --version  # Should be v14+

# Check npm packages
npm install

# Check for port conflicts
lsof -i :3000

# Run with debug logs
DEBUG=* npm start
```

### If Styling Doesn't Load
```
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+F5)
3. Check browser console for CSS errors (F12)
4. Verify styles.css is in public folder
```

### If Navigation Animation Isn't Working
```
1. Check script.js is loaded (F12 > Network tab)
2. Verify flame animation classes are applied
3. Check CSS animations in styles.css are not disabled
4. Test in different browser (Firefox, Chrome)
```

### If PayPal Link Doesn't Work
```
1. Verify PayPal username: @CSVtv1997
2. Check internet connection
3. Ensure PayPal account is active
4. Try direct link: https://www.paypal.com/paypalme/CSVtv1997/9.99
```

---

## 📊 Database Testing

### Check Premium Status
```bash
# Access SQLite database
sqlite3 sessions.db

# Check users table
SELECT id, username, email, is_premium, premium_since FROM users;

# Check sermons
SELECT * FROM sermons WHERE user_id = 1;

# Check notes
SELECT * FROM notes WHERE user_id = 1;
```

---

## ✅ Testing Checklist

### Visual & Design
- [ ] Divi header appears in blood red
- [ ] Navigation has flame animations on hover
- [ ] Wine red background displays properly
- [ ] Parchment texture visible on content areas
- [ ] All fonts render correctly (serif, rabbinical)
- [ ] Mobile layout responsive

### Functionality
- [ ] Register new user
- [ ] Login with credentials
- [ ] Generate sermon
- [ ] Save sermon to library
- [ ] View Bible verses
- [ ] Create and view notes
- [ ] Access premium features (if premium)

### Navigation Flame Effects
- [ ] Orange fire on Sermon Generator
- [ ] Blue flames on regular pages
- [ ] Green flames on Login/Register
- [ ] Smooth animations without lag
- [ ] Works on all page types

### Payment & Premium
- [ ] Upgrade page displays correctly
- [ ] PayPal link works and functions
- [ ] Payment success page shows (after payment)
- [ ] Premium user can access Tarot
- [ ] Premium user can access AI Tools
- [ ] Session updates after payment

### Browser Compatibility
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

### Responsive Testing
- [ ] Desktop (1920px+)
- [ ] Laptop (1200px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

---

## 🔒 Security Testing

### Authentication
- [ ] Can't access premium pages without login
- [ ] Can't access other users' sermons/notes
- [ ] Session destroys on logout
- [ ] Password is hashed in database

### Payment
- [ ] Only authenticated users can access upgrade
- [ ] PayPal webhook verifies sender
- [ ] Transaction ID stored correctly
- [ ] Premium status updates on success

---

## 📝 API Endpoints to Test

### Authentication
- `GET /` - Home page
- `GET /register` - Registration form
- `POST /register` - Create account
- `GET /login` - Login form
- `POST /login` - Authenticate
- `POST /logout` - Logout

### Sermons
- `GET /sermon-generator` - Generator form
- `POST /generate-sermon` - Generate
- `GET /my-sermons` - List sermons
- `GET /edit-sermon/:id` - Edit form
- `POST /update-sermon/:id` - Update
- `POST /save-sermon` - Save

### Features
- `GET /bible-viewer` - Bible view
- `POST /get-verse` - Get verse
- `GET /notes` - Notes page
- `POST /add-note` - Add note
- `GET /upgrade` - Upgrade page
- `GET /payment-success` - Payment success
- `GET /tarot` - Tarot (Premium)
- `GET /ai-tools` - AI Tools (Premium)

---

## 🎯 Feature Verification

### Premium Features (After Payment)
1. **Tarot Guide**
   - Should display all 78 tarot cards
   - Major Arcana section
   - Minor Arcana (Wands, Cups, Swords, Pentacles)
   - Hover effects on cards

2. **AI Tools**
   - Input prompt for AI
   - Generate content based on prompt
   - Display results in formatted area

3. **Advanced Editing**
   - Edit saved sermons
   - Modify all fields
   - Save changes

### Free Features (Available to All)
1. **Bible Viewer**
   - View verses from multiple religions
   - Large print display
   - Multiple text sources

2. **Sermon Generator**
   - Create basic sermons
   - Save to personal library
   - View saved sermons

3. **Notes**
   - Create personal notes
   - Save and retrieve
   - Organized by date

---

## 📞 Support Information

### PayPal Account
- **Username**: @CSVtv1997
- **Payment Link**: https://www.paypal.com/paypalme/CSVtv1997/9.99
- **Amount**: $9.99/month

### Technical Support
- Check console for JavaScript errors: F12
- Check Network tab for failed requests
- Review server logs in terminal
- Test in different browser

---

## 🚀 Deployment Notes

### Before Going Live
1. Change session secret to secure random value
2. Set cookie secure flag to true (HTTPS only)
3. Replace PayPal Client ID with production ID
4. Set up proper HTTPS certificate
5. Configure database backups
6. Set up error logging
7. Test all payment flows
8. Verify email notifications

### Environment Variables (Recommended)
```
PORT=3000
NODE_ENV=production
PAYPAL_CLIENT_ID=your_id
PAYPAL_SECRET=your_secret
DATABASE_PATH=/path/to/divi.db
SESSION_SECRET=random_secure_string
```

---

**Last Updated**: May 15, 2026
**Version**: 2.0
**Status**: Ready for Testing
