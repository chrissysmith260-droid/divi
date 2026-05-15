# 📖 DiVi Sermon Prompt Engine - Complete Index

## 🎯 START HERE

**New to this system?** Read in this order:

1. **30 seconds:** [SERMON_ENGINE_QUICKSTART.md](SERMON_ENGINE_QUICKSTART.md) - Overview & key principles
2. **5 minutes:** [SERMON_ENGINE_README.md](SERMON_ENGINE_README.md) - What you have & why it matters
3. **Run examples:** `node sermon-examples.js` - See it working
4. **15 minutes:** [SERMON_ENGINE_INTEGRATION.md](SERMON_ENGINE_INTEGRATION.md) - How to add to your app
5. **30 minutes:** [SERMON_PROMPT_ENGINE_DOCS.md](SERMON_PROMPT_ENGINE_DOCS.md) - Complete reference

---

## 📦 Core System Files

### Engine & Integration (JavaScript Modules)

#### **sermon-prompt-engine.js** - The Core Engine
- **What it does:** Encodes the Master Directive and provides prompt generation/validation
- **Size:** ~550 lines
- **Main functions:**
  - `generateMasterSystemPrompt()` - System prompt for AI
  - `generateSermonPrompt(request)` - User-specific prompt
  - `validateRequestForBias(request)` - Input safety check
  - `validateVocabulary(text)` - Output safety check
  - `suggestBridgingLanguage(traditions)` - Unifying phrases
  - `createSermonPlan(request)` - Sermon structure
- **No dependencies** - uses only Node.js built-ins
- **Status:** ✅ Production-ready

#### **sermon-generator-integration.js** - AI & Express Integration
- **What it does:** Connects AI services (OpenAI/Anthropic) and provides Express routes
- **Size:** ~400 lines
- **Main exports:**
  - `SermonGenerationService` - AI abstraction layer
  - `createSermonRoutes(app, db)` - Mount Express endpoints
  - `aiProviders` - Configuration for AI services
- **Supports:**
  - OpenAI (gpt-4-turbo)
  - Anthropic Claude (claude-opus)
  - Custom/local LLM
  - Mock mode (testing without API keys)
- **Provides routes:**
  - `POST /api/sermon/generate`
  - `POST /api/sermon/validate`
  - `GET /api/sermon/bridging-language`
  - `GET /api/sermon/system-prompt`
- **Status:** ✅ Production-ready

#### **sermon-examples.js** - Working Examples
- **What it does:** 10 complete, runnable examples of all system features
- **Size:** ~350 lines
- **Examples:**
  1. Master Directive display
  2. Input validation for bias
  3. Vocabulary validation
  4. System prompt generation
  5. Sermon request prompt
  6. Bridging language suggestions
  7. Sermon planning
  8. AI service integration
  9. Complete workflow
  10. Real-world scenarios
- **How to run:** `node sermon-examples.js`
- **Status:** ✅ Ready to run (works in mock mode)

---

## 📚 Documentation Files

### Quick Reference Guides

#### **SERMON_ENGINE_QUICKSTART.md** (5 min read)
- 30-second quick start
- Core principle at a glance
- Do's and Don'ts table
- Output structure
- Example sermon request
- Real-world scenarios
- **For:** First-time users, quick refresher
- **Length:** ~150 lines

#### **SERMON_ENGINE_README.md** (15 min read)
- Complete deliverables overview
- Master Directive explained (3 absolutes)
- Sermon structure (The Triadic Framework)
- Safety & validation features
- Quick integration guide
- Next steps (immediate to long-term)
- Philosophy & ethics
- **For:** Getting the full picture
- **Length:** ~300 lines

#### **SERMON_ENGINE_INTEGRATION.md** (15 min read)
- Step-by-step Express integration
- Copy & paste sections
- Complete working example (can replace index.js)
- Database schema for sermons table
- Example routes (dashboard, my-sermons, etc.)
- Environment variable setup
- Troubleshooting
- **For:** Developers integrating into the app
- **Length:** ~250 lines

#### **SERMON_PROMPT_ENGINE_DOCS.md** (30 min read)
- Overview of the entire system
- Complete Master Directive (4 detailed sections)
- Core architecture explanation
- Full API reference with examples
- Safety & validation layer details
- Real-world example sermons
- Complete troubleshooting guide
- **For:** Deep understanding, reference
- **Length:** ~800 lines
- **Most comprehensive**

---

## 🔑 Key Concepts

### The Master Directive (Your Foundation)

**Core Principle:** No tradition is superior to any other.

**Three Absolutes:**

1. **No Erasure or Condemnation**
   - Treat all traditions as equally valid
   - Never minimize or demean any religion
   - Acknowledge internal diversity within each tradition

2. **Respectful Vocabulary Only**
   - Use academic, unifying language
   - Forbidden: "fake," "false," "satanic" (re: other religions), "only true"
   - Encouraged: "within the [tradition] framework," "both traditions reveal"

3. **Avoid Dogmatic Bias**
   - Don't force one tradition to bend to another's dogma
   - Treat Tarot/mythology as psychological mirrors, not subordinates
   - Seek synthesis, not subordination

### The Triadic Framework (Sermon Output)

Every sermon has three required parts:

1. **The Anchor** - Universal unifying theme (Balance, Compassion, Transformation, etc.)
2. **The Convergence** - How each tradition illuminates the theme (parallel, respectful)
3. **The Universal Application** - Practical daily practices anyone can use (regardless of faith)

---

## 🚀 Getting Started

### For Understanding
```bash
# Read these in order:
cat SERMON_ENGINE_QUICKSTART.md          # 5 min overview
cat SERMON_ENGINE_README.md              # 15 min full picture
```

### For Seeing It Work
```bash
# Run the complete examples
node sermon-examples.js                  # All 10 examples

# Or just import in your code
const sermonEngine = require('./sermon-prompt-engine');
const { SermonGenerationService } = require('./sermon-generator-integration');
```

### For Integration
```bash
# Read integration guide
cat SERMON_ENGINE_INTEGRATION.md

# Then copy sections into your index.js
# Or use the complete example as reference
```

### For Deep Dive
```bash
# Read comprehensive documentation
cat SERMON_PROMPT_ENGINE_DOCS.md
```

---

## 📋 API Quick Reference

### Core Functions (sermon-prompt-engine.js)

```javascript
// Generate AI system prompt
generateMasterSystemPrompt()
  → string (full system prompt)

// Generate user-specific prompt
generateSermonPrompt(request)
  → string (user prompt for AI)

// Check input for bias
validateRequestForBias(request)
  → { isValid, warnings[], suggestions[] }

// Check output vocabulary
validateVocabulary(text)
  → { isClean, issues[] }

// Get bridging language suggestions
suggestBridgingLanguage(traditions)
  → string[] (suggested phrases)

// Create sermon plan
createSermonPlan(request)
  → { plan: { anchor, convergence, synthesis, universalApplication } }
```

### Service Methods (sermon-generator-integration.js)

```javascript
// Initialize service
new SermonGenerationService(provider)
  // provider: 'openai' | 'anthropic' | 'custom'

// Generate sermon with validation
service.generateSermon(request)
  → Promise { success, sermon, plan, validation, warnings }

// Validate existing sermon
service.validateSermonCompliance(sermon)
  → Promise { passed, details, issues, recommendations }

// Get bridging language
service.getBridgingLanguage(traditions)
  → string[] (suggestions)
```

### Express Routes (when mounted)

```javascript
createSermonRoutes(app, db)

// Provided routes:
POST   /api/sermon/generate           // Generate sermon
POST   /api/sermon/validate           // Validate sermon
GET    /api/sermon/bridging-language  // Get bridging phrases
GET    /api/sermon/system-prompt      // Debug: full prompt
```

---

## 💾 Database Schema

When you integrate, create this table:

```sql
CREATE TABLE IF NOT EXISTS sermons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  theme TEXT,
  traditions TEXT,  -- JSON array string
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

---

## 🔧 Environment Setup

```bash
# Choose AI provider
export AI_PROVIDER=openai              # default
# OR
export AI_PROVIDER=anthropic

# Set API keys
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-...

# For testing (works without API keys)
export MOCK_AI=true
```

---

## 📊 File Statistics

| File | Type | Lines | Purpose |
|------|------|-------|---------|
| sermon-prompt-engine.js | JS Module | 550+ | Core system |
| sermon-generator-integration.js | JS Module | 400+ | AI & Express |
| sermon-examples.js | JS Examples | 350+ | Demonstrations |
| SERMON_PROMPT_ENGINE_DOCS.md | Markdown | 800+ | Reference |
| SERMON_ENGINE_README.md | Markdown | 300+ | Overview |
| SERMON_ENGINE_INTEGRATION.md | Markdown | 250+ | How-to |
| SERMON_ENGINE_QUICKSTART.md | Markdown | 150+ | Quick ref |
| **TOTAL** | | **3,200+** | Complete system |

---

## ✅ Validation & Safety

### Automatic Input Validation
Detects and warns about:
- ❌ Dismissive language
- ❌ Hierarchical framing
- ❌ Superiority claims
- ✅ Suggests improvements

### Automatic Output Validation
Checks for:
- ✓ No hierarchy
- ✓ Respectful vocabulary
- ✓ True synthesis
- ✓ Universal applicability
- ✓ Warm, inclusive tone

---

## 🎯 Example Use Case

**Request:**
```javascript
{
  theme: 'Compassion',
  texts: [
    {
      tradition: 'Christian',
      source: '1 John 4:7',
      passage: 'Dear friends, let us love one another'
    },
    {
      tradition: 'Buddhist',
      source: 'Metta Sutra',
      passage: 'May all beings be happy, peaceful, and safe'
    },
    {
      tradition: 'Islamic',
      source: 'Quran 9:71',
      passage: 'The believers are merciful and compassionate'
    }
  ],
  audience: 'Interfaith contemplative community'
}
```

**Output Structure:**
```
SERMON: [Compassionate Unity]

THE ANCHOR:
  Today we explore Compassion as a universal principle...

THE CONVERGENCE:
  Christian Wisdom: Love thy neighbor as thyself...
  Buddhist Wisdom: May all beings be happy...
  Islamic Wisdom: Believers show mercy and compassion...

SYNTHESIS:
  Across these traditions, compassion emerges as...

THE UNIVERSAL APPLICATION:
  1. Daily practice: Practice active listening...
  2. Weekly practice: Extend kindness to someone different...
  3. Community practice: Volunteer with those unlike yourself...
```

---

## 📞 Support

**Questions about:**
- **Usage:** See SERMON_PROMPT_ENGINE_DOCS.md
- **Integration:** See SERMON_ENGINE_INTEGRATION.md
- **Examples:** Run `node sermon-examples.js`
- **Specific traditions:** Consult subject-matter experts
- **AI setup:** Check OpenAI/Anthropic docs
- **Safety concerns:** Escalate to human review team

---

## 🎓 Next Steps

1. ✅ **Read:** SERMON_ENGINE_QUICKSTART.md (5 min)
2. ✅ **Run:** `node sermon-examples.js` (see it work)
3. ✅ **Study:** SERMON_ENGINE_INTEGRATION.md (15 min)
4. ✅ **Integrate:** Add routes to index.js
5. ✅ **Create UI:** Build sermon-generator.ejs view
6. ✅ **Test:** Generate first sermon
7. ✅ **Deploy:** Set up review workflow before publication

---

## 🌟 Philosophy

This system embodies a commitment to spiritual respect as non-negotiable.

The Master Directive **cannot be disabled**. It is the core DNA of DiVi. Every sermon is an act of bridge-building, not conversion or condemnation.

**The goal:** Create sacred spaces where people of different traditions recognize the humanity, wisdom, and integrity in each other's paths.

---

**⚖️ DiVi - The Belief Master: Bridging Sacred Traditions with Absolute Balance**

*Version 1.0.0 | Complete Implementation Ready for Production*

---

## 📍 File Locations

All files are in the `/workspaces/divi` root directory:

```
/workspaces/divi/
├── sermon-prompt-engine.js                 [Core engine]
├── sermon-generator-integration.js         [AI integration]
├── sermon-examples.js                      [Examples]
├── SERMON_PROMPT_ENGINE_DOCS.md           [Reference]
├── SERMON_ENGINE_README.md                [Overview]
├── SERMON_ENGINE_INTEGRATION.md           [Integration]
├── SERMON_ENGINE_QUICKSTART.md            [Quick ref]
└── INDEX.md                               [This file]
```

**Ready to begin?** Start with [SERMON_ENGINE_QUICKSTART.md](SERMON_ENGINE_QUICKSTART.md)
