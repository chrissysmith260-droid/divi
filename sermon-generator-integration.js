/**
 * SERMON GENERATOR INTEGRATION
 * ============================
 * Integration layer for the Sermon Prompt Engine
 * Shows how to use the Master Directive prompts with your AI service
 * (e.g., OpenAI, Anthropic, etc.)
 */

const sermonEngine = require('./sermon-prompt-engine');

// ============================================================================
// AI SERVICE INTEGRATION
// ============================================================================

/**
 * Configuration for different AI providers
 * You can swap providers without changing sermon generation logic
 */
const aiProviders = {
  openai: {
    name: 'OpenAI',
    modelId: 'gpt-4-turbo',
    endpoint: 'https://api.openai.com/v1/chat/completions'
  },
  anthropic: {
    name: 'Anthropic Claude',
    modelId: 'claude-opus',
    endpoint: 'https://api.anthropic.com/v1/messages'
  },
  custom: {
    name: 'Custom LLM',
    modelId: 'custom-model',
    endpoint: process.env.CUSTOM_LLM_ENDPOINT || 'http://localhost:8000/api/generate'
  }
};

// ============================================================================
// SERMON GENERATION SERVICE
// ============================================================================

/**
 * Main service for generating sermons using the Master Directive
 */
class SermonGenerationService {
  constructor(aiProvider = 'openai') {
    this.provider = aiProviders[aiProvider];
    this.systemPrompt = sermonEngine.generateMasterSystemPrompt();
    this.cache = new Map(); // Simple in-memory cache
  }

  /**
   * Generate a complete sermon with validation
   * @param {Object} request - { theme, texts, audience, tone, userId }
   * @returns {Promise<Object>} - { success, sermon, validation, warnings }
   */
  async generateSermon(request) {
    try {
      // Step 1: Validate for bias
      const validation = sermonEngine.validateRequestForBias(request);
      if (!validation.isValid) {
        console.warn('⚠️ BIAS WARNINGS:', validation.warnings);
        return {
          success: false,
          warnings: validation.warnings,
          suggestions: validation.suggestions,
          requiresReview: true
        };
      }

      // Step 2: Create sermon plan for transparency
      const plan = sermonEngine.createSermonPlan(request);
      
      // Step 3: Generate user-specific prompt
      const userPrompt = sermonEngine.generateSermonPrompt(request);

      // Step 4: Call AI service
      const sermon = await this.callAIService(userPrompt);

      // Step 5: Validate output
      const vocabularyCheck = sermonEngine.validateVocabulary(sermon);
      if (!vocabularyCheck.isClean) {
        console.warn('⚠️ VOCABULARY ISSUES FOUND:', vocabularyCheck.issues);
      }

      // Step 6: Return complete response
      return {
        success: true,
        sermon,
        plan,
        validation: {
          inputValidation: validation,
          outputValidation: vocabularyCheck
        },
        warnings: vocabularyCheck.issues.length > 0 ? vocabularyCheck.issues : []
      };
    } catch (error) {
      console.error('❌ Sermon generation error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Validate an existing sermon for compliance with Master Directive
   * @param {string} sermon - The sermon text
   * @returns {Promise<Object>} - Validation results
   */
  async validateSermonCompliance(sermon) {
    try {
      const validationPrompt = sermonEngine.generateValidationPrompt(sermon);
      const validationResult = await this.callAIService(validationPrompt);
      
      // Parse validation result
      const vocabularyCheck = sermonEngine.validateVocabulary(sermon);
      
      return {
        passed: vocabularyCheck.isClean,
        details: validationResult,
        issues: vocabularyCheck.issues,
        recommendations: this.generateRecommendations(vocabularyCheck.issues)
      };
    } catch (error) {
      console.error('❌ Validation error:', error);
      return {
        passed: false,
        error: error.message
      };
    }
  }

  /**
   * Call the configured AI service
   * Override this method to integrate with your specific AI provider
   * @param {string} userPrompt - The user's request
   * @returns {Promise<string>} - AI-generated sermon
   */
  async callAIService(userPrompt) {
    // This is a template method - implement based on your AI provider
    
    if (process.env.MOCK_AI === 'true') {
      // Mock response for testing
      return this.generateMockSermon();
    }

    // Example for OpenAI
    if (this.provider.name === 'OpenAI') {
      return await this.callOpenAI(userPrompt);
    }

    // Example for Anthropic
    if (this.provider.name === 'Anthropic Claude') {
      return await this.callAnthropic(userPrompt);
    }

    throw new Error(`AI provider '${this.provider.name}' not configured`);
  }

  /**
   * Example: Call OpenAI API
   * @param {string} userPrompt
   * @returns {Promise<string>}
   */
  async callOpenAI(userPrompt) {
    // Requires: npm install openai
    // Set env var: OPENAI_API_KEY=your-key
    
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY environment variable not set');
    }

    const { OpenAI } = require('openai');
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.chat.completions.create({
      model: this.provider.modelId,
      temperature: 0.7, // Balanced for creativity and consistency
      top_p: 0.95,
      messages: [
        {
          role: 'system',
          content: this.systemPrompt
        },
        {
          role: 'user',
          content: userPrompt
        }
      ]
    });

    return response.choices[0].message.content;
  }

  /**
   * Example: Call Anthropic Claude API
   * @param {string} userPrompt
   * @returns {Promise<string>}
   */
  async callAnthropic(userPrompt) {
    // Requires: npm install @anthropic-ai/sdk
    // Set env var: ANTHROPIC_API_KEY=your-key

    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY environment variable not set');
    }

    const Anthropic = require('@anthropic-ai/sdk').default;
    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY
    });

    const response = await client.messages.create({
      model: this.provider.modelId,
      max_tokens: 4096,
      temperature: 0.7,
      system: this.systemPrompt,
      messages: [
        {
          role: 'user',
          content: userPrompt
        }
      ]
    });

    return response.content[0].text;
  }

  /**
   * Generate mock sermon for testing (when MOCK_AI=true)
   * @returns {string}
   */
  generateMockSermon() {
    return `
## SERMON: The Bridge of Universal Wisdom

### THE ANCHOR: Balance & Harmony
Today we explore how balance—what the ancient Greeks called "metron" and what we find 
across spiritual traditions—remains one of humanity's most profound aspirations.

### THE CONVERGENCE

**From Christian Tradition (Proverbs 3:21):**
"My son, let not mercy and truth forsake you; bind them around your neck, write them 
on the tablet of your heart." This speaks to integration—holding multiple virtues in 
equal measure, not privileging one over another.

**From Tarot Tradition (Temperance Card):**
Temperance, the card of balance and integration, shows an angel pouring between two vessels. 
This image captures the essence of equilibrium: neither excessive, neither deficient, 
but perfectly calibrated.

**From Pagan Tradition (The Wheel of the Year):**
Ancient pagan cultures understood balance through the cycles—light and dark at the equinoxes, 
growth and harvest in their seasons. No season is "better"; all are necessary.

### SYNTHESIS
These traditions, expressed in their unique languages and symbols, all recognize a fundamental 
human need: to find the middle way, the place of integration where opposing forces create 
wholeness rather than conflict.

### UNIVERSAL APPLICATION
In your life today, practice balance through:
1. **Daily Reflection:** Each morning, identify one area of excess and one of deficit in your life
2. **The Pause:** Before major decisions, breathe and ask: "What would equilibrium look like here?"
3. **Community Connection:** Seek out wisdom from traditions different than your own
4. **Compassionate Integration:** Notice when you judge others; practice seeing their path as valid

---

*May we all find the balance that makes us whole.*
    `.trim();
  }

  /**
   * Generate recommendations for fixing validation issues
   * @param {Array} issues - Array of vocabulary issues
   * @returns {Array} - Recommendations
   */
  generateRecommendations(issues) {
    return issues.map(issue => ({
      issue: issue.found,
      recommendation: issue.replacement,
      reason: 'Maintains neutrality and respect across all traditions'
    }));
  }

  /**
   * Get the bridging language suggestions for a set of traditions
   * @param {Array} traditions - Tradition names
   * @returns {Array} - Suggested bridge phrases
   */
  getBridgingLanguage(traditions) {
    return sermonEngine.suggestBridgingLanguage(traditions);
  }
}

// ============================================================================
// EXPRESS ROUTE INTEGRATION
// ============================================================================

/**
 * Example Express routes for sermon generation
 * Add these to your index.js or a separate routes file
 */
function createSermonRoutes(app, db) {
  const sermonService = new SermonGenerationService(process.env.AI_PROVIDER || 'openai');

  /**
   * POST /api/sermon/generate
   * Generate a new sermon with Master Directive compliance
   */
  app.post('/api/sermon/generate', requireLogin, requirePremium, async (req, res) => {
    try {
      const { theme, texts, audience, tone, title } = req.body;

      // Validate input
      if (!theme || !texts || texts.length < 1) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields: theme, texts'
        });
      }

      // Generate sermon
      const result = await sermonService.generateSermon({
        theme,
        texts,
        audience: audience || 'General spiritual seekers',
        tone: tone || 'scholarly yet accessible',
        userId: req.session.userId
      });

      if (!result.success) {
        return res.status(400).json(result);
      }

      // Save to database
      db.run(
        `INSERT INTO sermons (user_id, title, content, theme, traditions, created_at)
         VALUES (?, ?, ?, ?, ?, datetime('now'))`,
        [
          req.session.userId,
          title || `Sermon on ${theme}`,
          result.sermon,
          theme,
          JSON.stringify(texts.map(t => t.tradition))
        ],
        function(err) {
          if (err) {
            console.error('Database error:', err);
            return res.status(500).json({
              success: false,
              error: 'Could not save sermon'
            });
          }

          res.json({
            success: true,
            sermon: result.sermon,
            sermonId: this.lastID,
            compliance: result.validation,
            warnings: result.warnings
          });
        }
      );
    } catch (error) {
      console.error('Sermon generation error:', error);
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  });

  /**
   * POST /api/sermon/validate
   * Validate an existing sermon for Master Directive compliance
   */
  app.post('/api/sermon/validate', async (req, res) => {
    try {
      const { sermonText } = req.body;

      if (!sermonText) {
        return res.status(400).json({
          success: false,
          error: 'Missing required field: sermonText'
        });
      }

      const validation = await sermonService.validateSermonCompliance(sermonText);

      res.json({
        success: true,
        validation
      });
    } catch (error) {
      console.error('Validation error:', error);
      res.status(500).json({
        success: false,
        error: error.message
      });
    }
  });

  /**
   * GET /api/sermon/bridging-language?traditions=Christian,Pagan,Tarot
   * Get bridging language suggestions for traditions
   */
  app.get('/api/sermon/bridging-language', (req, res) => {
    const { traditions } = req.query;

    if (!traditions) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameter: traditions (comma-separated)'
      });
    }

    const traditionList = traditions.split(',').map(t => t.trim());
    const suggestions = sermonService.getBridgingLanguage(traditionList);

    res.json({
      success: true,
      traditions: traditionList,
      suggestions
    });
  });

  /**
   * GET /api/sermon/system-prompt
   * Get the complete Master Directive system prompt (for debugging/transparency)
   */
  app.get('/api/sermon/system-prompt', (req, res) => {
    res.json({
      success: true,
      systemPrompt: sermonService.systemPrompt,
      masterDirective: sermonEngine.MASTER_DIRECTIVE
    });
  });

  return sermonService;
}

// ============================================================================
// EXPORTS
// ============================================================================

module.exports = {
  SermonGenerationService,
  createSermonRoutes,
  aiProviders,
  sermonEngine
};
