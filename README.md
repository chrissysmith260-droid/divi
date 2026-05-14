# divi

A comprehensive sermon generation and bible study app for clergy, pastors, and lay persons.

## Features

- **User Authentication**: Register and login to access personalized features
- **Sermon Generator**: Create sermon outlines based on topics and scriptures
- **Sermon Library**: Save, view, and edit your sermons
- **Large Print Bible Viewer**: Access sacred texts from Christianity, Judaism, Islam, and Paganism in large, easy-to-read format
- **Personal Notes**: Save and organize your spiritual insights and research
- **Premium Features** (Membership):
  - Complete Tarot guide with all 78 cards and meanings
  - AI-powered content generation tools
  - Advanced sermon editing capabilities
  - Extended religious texts library
- **Enhanced UI**: Animations, sounds, and responsive design for better user experience

## Installation

1. Clone the repository
2. Run `npm install` to install dependencies
3. The app uses SQLite for data storage (database.db will be created automatically)

## Usage

1. Run `npm start` to start the server
2. Open your browser to `http://localhost:3000`
3. Register a new account or login
4. Explore features:
   - Generate sermons
   - Study sacred texts
   - Save personal notes
   - Upgrade to premium for advanced tools

## Premium Membership

Upgrade to premium ($9.99/month) to unlock:
- Tarot card guide
- AI content generation
- Advanced editing tools
- Priority support

## Technologies

- Node.js
- Express.js
- EJS templating
- SQLite database
- bcrypt for password hashing
- express-session for user sessions
- CSS animations and JavaScript for enhanced UX

## Database Schema

- **users**: User accounts with premium status
- **sermons**: Saved sermon outlines
- **notes**: Personal notes and research
- **sessions**: User session management

## Future Enhancements

- Payment integration for premium subscriptions
- More religious texts and translations
- Community features and sharing
- Mobile app version
- Integration with external AI services