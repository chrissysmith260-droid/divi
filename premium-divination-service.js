/**
 * PREMIUM DIVINATION SERVICE
 * ===========================
 * Daily tarot card readings, oracle guidance, and fortune messages
 * Premium tier feature with personalization
 */

const tarotCards = require('./tarot');
const oracleCards = require('./oracle-cards');
const fortuneMessages = require('./fortune-messages');

class PremiumDivinationService {
  constructor() {
    this.db = null;
  }

  /**
   * Initialize with database connection
   */
  initializeDatabase(database) {
    this.db = database;
  }

  /**
   * Get daily tarot reading with clarifier
   * @param {number} userId
   * @param {string} userQuestion - Optional question for the reading
   * @param {boolean} includeClarifier - Whether to draw a clarifier card
   * @returns {Object} - Tarot reading with interpretation
   */
  getDailyTarotReading(userId, userQuestion = null, includeClarifier = false) {
    // Get a random major arcana card as primary
    const majorArcana = tarotCards.majorArcana;
    const primaryCard = majorArcana[Math.floor(Math.random() * majorArcana.length)];

    const reading = {
      date: new Date().toISOString().split('T')[0],
      userId,
      userQuestion: userQuestion || "Seeking guidance",
      primaryCard: {
        ...primaryCard,
        position: "Today's Guidance"
      },
      clarifierCard: null
    };

    // Add clarifier if requested
    if (includeClarifier) {
      reading.clarifierCard = {
        ...majorArcana[Math.floor(Math.random() * majorArcana.length)],
        position: "Clarification"
      };
    }

    // Generate personalized interpretation
    reading.interpretation = this.generateTarotInterpretation(
      reading.primaryCard,
      reading.clarifierCard,
      userQuestion
    );

    // Generate personalized guidance
    reading.guidance = this.generatePersonalizedGuidance(
      reading.primaryCard,
      userQuestion
    );

    return reading;
  }

  /**
   * Get oracle card reading
   * @param {number} userId
   * @param {string} userQuestion - Optional question
   * @param {string} oracleDeck - Which oracle deck to use (default, elemental, chakra, seasonal)
   * @returns {Object} - Oracle reading
   */
  getOracleCardReading(userId, userQuestion = null, oracleDeck = 'default') {
    let selectedDeck = oracleCards.guidedOracleStandard;

    if (oracleDeck === 'elemental') {
      selectedDeck = oracleCards.elementalOracleCards;
    } else if (oracleDeck === 'chakra') {
      selectedDeck = oracleCards.chakraOracleCards;
    } else if (oracleDeck === 'seasonal') {
      selectedDeck = oracleCards.seasonalOracleCards;
    }

    const oracleCard = selectedDeck[Math.floor(Math.random() * selectedDeck.length)];

    const reading = {
      date: new Date().toISOString().split('T')[0],
      userId,
      userQuestion: userQuestion || "Seeking clarity",
      deck: oracleDeck,
      card: oracleCard,
      personalInterpretation: this.generateOracleInterpretation(oracleCard, userQuestion)
    };

    return reading;
  }

  /**
   * Get daily combined reading (Tarot + Oracle + Fortune)
   * @param {number} userId
   * @param {Object} options - { question, includeClarifier, oracleDeck }
   * @returns {Object} - Complete daily reading
   */
  getDailyDivinationCombo(userId, options = {}) {
    const {
      question = null,
      includeClarifier = true,
      oracleDeck = 'default'
    } = options;

    const tarot = this.getDailyTarotReading(userId, question, includeClarifier);
    const oracle = this.getOracleCardReading(userId, question, oracleDeck);
    const fortune = fortuneMessages.getRandomFortune();

    const combo = {
      date: new Date().toISOString().split('T')[0],
      userId,
      userQuestion: question || "Seeking guidance for today",
      tarotReading: tarot,
      oracleReading: oracle,
      dailyFortune: fortune,
      overallMessage: this.generateDailyMessage(tarot.primaryCard, oracle.card)
    };

    return combo;
  }

  /**
   * Get a random fortune message
   * @param {string} category - Optional category filter
   * @returns {string} - Fortune message
   */
  getRandomFortune(category = null) {
    return fortuneMessages.getRandomFortune(category);
  }

  /**
   * Save daily reading to database
   * @param {number} userId
   * @param {Object} reading - The reading object
   */
  saveDailyReading(userId, reading) {
    if (!this.db) return null;

    this.db.run(
      `INSERT INTO daily_readings (user_id, reading_type, reading_data, created_at)
       VALUES (?, ?, ?, datetime('now'))`,
      [userId, reading.type || 'combo', JSON.stringify(reading)],
      function(err) {
        if (err) {
          console.error('Error saving reading:', err);
          return null;
        }
        return this.lastID;
      }
    );
  }

  /**
   * Get user's reading history
   * @param {number} userId
   * @param {number} limit - How many to retrieve
   * @returns {Promise<Array>}
   */
  async getUserReadingHistory(userId, limit = 30) {
    if (!this.db) return [];

    return new Promise((resolve, reject) => {
      this.db.all(
        `SELECT * FROM daily_readings WHERE user_id = ? ORDER BY created_at DESC LIMIT ?`,
        [userId, limit],
        (err, rows) => {
          if (err) reject(err);
          else resolve(rows || []);
        }
      );
    });
  }

  /**
   * Generate tarot interpretation based on card and question
   * @private
   */
  generateTarotInterpretation(primaryCard, clarifierCard, userQuestion) {
    let interpretation = `The ${primaryCard.name} card suggests that ${this.getMeaningForCard(primaryCard)}. `;

    if (clarifierCard) {
      interpretation += `In clarification, the ${clarifierCard.name} card indicates ${this.getMeaningForCard(clarifierCard)}. `;
    }

    if (userQuestion) {
      interpretation += `In relation to your question about "${userQuestion}", this guidance suggests you focus on understanding the deeper layers of the situation.`;
    }

    return interpretation;
  }

  /**
   * Generate oracle interpretation
   * @private
   */
  generateOracleInterpretation(card, userQuestion) {
    let interpretation = `${card.name} reminds you: ${card.guidance || card.meaning}`;

    if (card.affirmation) {
      interpretation += ` Repeat this affirmation: "${card.affirmation}"`;
    }

    if (userQuestion) {
      interpretation += ` In the context of your question, this card suggests deeper consideration of your inner wisdom.`;
    }

    return interpretation;
  }

  /**
   * Generate personalized guidance message
   * @private
   */
  generatePersonalizedGuidance(card, userQuestion) {
    const timeOfDay = this.getTimeOfDay();
    const guidanceBase = `As you move through ${timeOfDay}, let the energy of ${card.name} guide your choices. `;

    if (userQuestion) {
      return guidanceBase + `Specifically regarding "${userQuestion}", trust your intuition and take one small step toward clarity today.`;
    }

    return guidanceBase + `Today, focus on what matters most and act with intention.`;
  }

  /**
   * Generate overall daily message combining all elements
   * @private
   */
  generateDailyMessage(tarotCard, oracleCard) {
    const messages = [
      `Your energy today is guided by ${tarotCard.name} and ${oracleCard.name}.`,
      `Today, embrace the wisdom of ${tarotCard.name} while remembering ${oracleCard.guidance || oracleCard.meaning}.`,
      `The combination of ${tarotCard.name} and ${oracleCard.name} suggests: integration and trust in your path.`,
      `Let ${tarotCard.name} inspire action and ${oracleCard.name} guide your heart today.`
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }

  /**
   * Get meaning description for a card
   * @private
   */
  getMeaningForCard(card) {
    const meanings = [
      card.meaning || card.guidance || 'trust your intuition',
      `you are being called to ${(card.meaning || '').toLowerCase()}`,
      `focus on ${(card.meaning || 'your inner wisdom').toLowerCase()}`
    ];
    return meanings[Math.floor(Math.random() * meanings.length)];
  }

  /**
   * Get time of day for personalization
   * @private
   */
  getTimeOfDay() {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  }

  /**
   * Get all available oracle decks
   */
  getAvailableOracleDecks() {
    return [
      { id: 'default', name: 'Guided Oracle (Standard)', description: 'General guidance and wisdom' },
      { id: 'elemental', name: 'Elemental Oracle', description: 'Fire, Water, Air, Earth, Spirit' },
      { id: 'chakra', name: 'Chakra Oracle', description: 'Energy center guidance' },
      { id: 'seasonal', name: 'Seasonal Oracle', description: 'Aligned with seasons and cycles' }
    ];
  }

  /**
   * Get fortune categories
   */
  getFortuneCategories() {
    return fortuneMessages.getCategories().map(category => ({
      id: category,
      name: category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')
    }));
  }
}

// Create singleton instance
const divinationService = new PremiumDivinationService();

module.exports = divinationService;
