# DiVi Sermon Prompt Engine - Quick Start

## What This Is

The **Sermon Prompt Engine** is the core system for generating balanced, inclusive, interfaith sermons. It embodies the **Master Directive**: absolute balance, inclusivity, and spiritual safety across all belief systems.

## Core Principle

🕯️ **No tradition is superior to any other.** All genuine spiritual paths are equally valid expressions of human wisdom-seeking.

## Key Files

| File | Purpose |
|------|---------|
| `sermon-prompt-engine.js` | Core engine that encodes the Master Directive |
| `sermon-generator-integration.js` | AI service integration and Express routes |
| `sermon-examples.js` | Working examples and test cases |
| `SERMON_PROMPT_ENGINE_DOCS.md` | Comprehensive documentation |

## Quick Start (30 seconds)

### 1. View Examples
```bash
node sermon-examples.js
```
This demonstrates all capabilities in one output.

### 2. Use in Your Code
```javascript
const sermonEngine = require('./sermon-prompt-engine');

// Generate the system prompt to send to your AI
const systemPrompt = sermonEngine.generateMasterSystemPrompt();

// Validate a user request for bias
const validation = sermonEngine.validateRequestForBias({
  theme: 'Compassion',
  texts: [
    { tradition: 'Christian', source: '1 John 4:7', passage: '...' },
    { tradition: 'Buddhist', source: 'Metta', passage: '...' }
  ]
});

// Generate a sermon prompt
const prompt = sermonEngine.generateSermonPrompt({
  theme: 'Balance',
  texts: [/* ... */],
  audience: 'Interfaith community'
});
```

### 3. Integrate with AI Service
```javascript
const { SermonGenerationService } = require('./sermon-generator-integration');

const service = new SermonGenerationService('openai'); // or 'anthropic'

const sermon = await service.generateSermon({
  theme: 'Resilience',
  texts: [/* ... */],
  audience: 'General spiritual seekers'
});
```

## The Master Directive at a Glance

### ✅ DO
- Treat all traditions equally and respectfully
- Use bridging language: "Both X and Y reveal..."
- Show shared principles between traditions
- Focus on universal human wisdom
- Offer practical applications for everyone

### ❌ DON'T
- Declare any religion "superior" or "correct"
- Use dismissive language: "fake," "false," "demonic" (when referring to other traditions)
- Create hierarchy between traditions
- Force one tradition to "bend" to another's dogma
- Make sermons applicable only to one faith

## Output Structure

Every sermon has three parts:

1. **THE ANCHOR** - The unifying theme
   - "Today we explore Resilience as the common thread across traditions"

2. **THE CONVERGENCE** - How each tradition illuminates the theme
   - "In Christian teaching..." 
   - "In Tarot symbolism..."
   - "In Pagan practice..."

3. **THE UNIVERSAL APPLICATION** - Practical tools for everyone
   - Daily practices anyone can adopt
   - Applicable regardless of specific religion
   - Focuses on ethics, mindfulness, community

## Example Sermon Request

```javascript
{
  theme: 'Transformation',
  texts: [
    {
      tradition: 'Christian',
      source: '2 Corinthians 5:17',
      passage: 'Therefore, if anyone is in Christ, he is a new creation',
      context: 'Spiritual rebirth and renewal'
    },
    {
      tradition: 'Pagan',
      source: 'Beltane Festival',
      passage: 'The sacred fire that purifies and renews the land',
      context: 'Celtic celebration of transformation'
    },
    {
      tradition: 'Tarot',
      source: 'Death (XIII)',
      passage: 'Endings, beginnings, change, transformation',
      context: 'The card of necessary release'
    }
  ],
  audience: 'Interfaith spiritual community',
  tone: 'Hopeful, grounded, accessible'
}
```

## Safety & Validation

The system automatically checks for:

### Input Validation
- ❌ Dismissive language ("fake religion," "cult," etc.)
- ❌ Hierarchical framing ("primary" vs "secondary" traditions)
- ❌ Superiority claims ("only true," "real faith," etc.)

### Output Validation
- ✓ No hierarchy between traditions
- ✓ Respectful, unifying vocabulary
- ✓ True synthesis (not just comparison)
- ✓ Universal applicability
- ✓ Warm, inclusive tone

## API Functions Reference

### Core Generation
| Function | Returns |
|----------|---------|
| `generateMasterSystemPrompt()` | System prompt for AI |
| `generateSermonPrompt(request)` | User prompt for specific request |
| `generateValidationPrompt(sermon)` | Validation prompt for AI to self-review |

### Validation
| Function | Returns |
|----------|---------|
| `validateRequestForBias(request)` | `{ isValid, warnings, suggestions }` |
| `validateVocabulary(text)` | `{ isClean, issues }` |

### Planning & Suggestions
| Function | Returns |
|----------|---------|
| `createSermonPlan(request)` | Structured plan for sermon creation |
| `suggestBridgingLanguage(traditions)` | Array of unifying phrases |

## Real-World Scenarios

The system works for any interfaith context:

- 🕌 **Interfaith weddings** - Honoring multiple traditions in ceremonies
- 💔 **Grief & loss support** - Perspectives on endings and transformation
- ✊ **Social justice** - Prophetic calls across religions
- 🧘 **Meditation circles** - Blending contemplative practices
- 📚 **Educational sermons** - Teaching comparative spirituality
- 🎓 **Seminary studies** - Interfaith theological exploration

## Documentation

**Full documentation:** See [SERMON_PROMPT_ENGINE_DOCS.md](SERMON_PROMPT_ENGINE_DOCS.md)

Topics covered:
- Complete Master Directive
- Every API function explained
- Integration examples
- Troubleshooting guide
- Ethical framework
- Next steps for implementation

## Integration with Express

Already set up in `sermon-generator-integration.js`:

```javascript
const { createSermonRoutes } = require('./sermon-generator-integration');

// Add to your Express app:
createSermonRoutes(app, db);

// Provides endpoints:
// POST /api/sermon/generate
// POST /api/sermon/validate
// GET  /api/sermon/bridging-language
// GET  /api/sermon/system-prompt
```

## Environment Setup

```bash
# If using OpenAI
export OPENAI_API_KEY=your_key
export AI_PROVIDER=openai

# If using Anthropic
export ANTHROPIC_API_KEY=your_key
export AI_PROVIDER=anthropic

# For testing/demo
export MOCK_AI=true
```

## Next Steps

1. **Review examples:** `node sermon-examples.js`
2. **Read documentation:** `SERMON_PROMPT_ENGINE_DOCS.md`
3. **Set up AI provider** with API keys
4. **Test integration:** Create a simple request and generate a sermon
5. **Implement UI** in your views to make this user-friendly
6. **Set up human review workflow** before publication

## Philosophy

This system is built on the belief that **spiritual respect is not negotiable**.

The Master Directive cannot be disabled or weakened. It is the core DNA of DiVi. Every sermon is an act of bridge-building, not conversion or condemnation.

If a sermon violates the directive, the appropriate response is to flag it for human review and revise or reject it—not to relax the boundaries.

## Questions?

- **Theology/traditions:** Consult subject-matter experts from those traditions
- **AI integration:** Check your provider's docs (OpenAI, Anthropic, etc.)
- **System architecture:** See inline comments in `sermon-prompt-engine.js`
- **Safety concerns:** Escalate to human review team

---

**⚖️ DiVi - The Belief Master: Bridging Sacred Traditions with Absolute Balance**

*Building interfaith sermons that honor all spiritual paths equally.*
