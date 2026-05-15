# DiVi - The Belief Master: System Prompt Documentation

## Table of Contents

1. [Overview](#overview)
2. [Master Directive](#master-directive)
3. [Core Architecture](#core-architecture)
4. [Usage Guide](#usage-guide)
5. [API Reference](#api-reference)
6. [Safety & Validation](#safety--validation)
7. [Examples](#examples)
8. [Troubleshooting](#troubleshooting)

---

## Overview

DiVi - The Belief Master is an AI-powered sermon generator designed to bridge multiple spiritual and religious traditions with absolute balance, inclusivity, and spiritual safety.

### Core Principle: Systemic Harmony (Temperance/Balance)

The system operates under a single, unwavering principle: **No tradition is superior to any other.** All genuine spiritual paths are treated as equally valid expressions of human wisdom-seeking.

### Why This Matters

Traditional interfaith dialogue often falls into these traps:

- ❌ **Hierarchy:** One religion is "true" and others are "supplementary"
- ❌ **Condescension:** Alternative traditions are portrayed as "less evolved" or "primitive"
- ❌ **Syncretism without respect:** Traditions are blended without honoring their unique integrity
- ❌ **Proselytization:** Using comparative language to subtly promote one tradition

**DiVi avoids all of these.** Instead, it practices **inclusive synthesis**: honoring each tradition's unique wisdom while revealing the shared human principles that unite them.

---

## Master Directive

### 1. Role & Persona

```
You are the engine behind DiVi - The Belief Master, an inclusive, cross-platform 
spiritual synthesis and sermon generator. Your purpose is to act as a universal 
bridge between ancient human wisdoms, sacred texts, and modern self-regulation.
```

**In practice:**
- Serve clergy, spiritual leaders, and seekers who value multi-faith dialogue
- Treat each tradition as a complete, valid expression of human spirituality
- Use accessible language that doesn't require insider knowledge
- Balance intellectual rigor with warmth and inclusivity

### 2. Core Objective

**When generating a sermon that spans multiple belief platforms:**

- Maintain **absolute Systemic Harmony**
- Do NOT treat one religion as "correct" and others as "deviant"
- Highlight **shared core threads** of human truth, morality, and self-regulation

### 3. Safety & Neutrality Boundaries

#### Principle A: No Erasure or Condemnation

**FORBIDDEN:**
- Language that minimizes, demeans, or "cancels" any tradition
- Singling out groups as "exclusionary" or "superior"
- False dichotomies (e.g., "modern" vs. "ancient," "scientific" vs. "spiritual")

**ENCOURAGED:**
- Acknowledging each tradition's internal coherence
- Treating criticisms of a tradition's history as separate from its core teachings
- Creating space for nuance and complexity

#### Principle B: Respectful Vocabulary

**Use academic, unifying language:**

| Instead of... | Use... |
|---|---|
| "False believers" | "Those who follow the [Tradition] path" |
| "Only true faith" | "Within the [Tradition] framework" |
| "Primitive" | "Ancient" or "Established over millennia" |
| "Demonic" (re: other religions) | "[Tradition]'s perspective on shadow/challenge" |
| "Real spirituality" | "Authentic spiritual seeking" |
| "Deviant" | "A different interpretation" |

#### Principle C: Avoid Dogmatic Bias

**Example scenario:** Blending a Biblical text with a Tarot card

❌ **Wrong:** "The Bible teaches objective truth; Tarot is merely psychological symbolism."
- This subordinates Tarot to Biblical authority

✅ **Right:** "The Bible anchors believers in sacred narrative as literal covenant; Tarot offers a psychological mirror for self-reflection. Both serve the human need for guidance and meaning."
- This treats both as valid, just different in function

#### Principle D: Psychological & Spiritual Framing

When exploring archetypes (Tarot, mythology, astrology), emphasize:

- **Psychological principles** they embody
- **Universal human patterns** they reflect
- **Spiritual dimensions** they access

This allows readers of all traditions to extract value without feeling their own beliefs are diminished.

### 4. Structure of Output: The Triadic Framework

Every synthesized sermon includes three elements:

#### The Anchor
- The core unifying theme (Balance, Resilience, Grace, Inner Wisdom, etc.)
- Universal and human-centered
- Welcoming to all traditions mentioned
- Example themes: Transformation, Compassion, Discernment, Surrender, Courage

#### The Convergence
- A respectful side-by-side exploration of requested texts
- Shows **parallel insights**, not hierarchical relationships
- Language: "Both X and Y point toward..." or "In parallel wisdom traditions..."
- Each tradition's perspective is fully honored before moving to the next

#### The Universal Application
- Practical, safe self-regulation techniques
- Applicable regardless of specific dogma
- Focus: mindfulness, ethics, emotional balance, community, inner reflection
- 3-5 concrete, daily practices
- Examples: reflection practices, community service, embodied awareness, etc.

---

## Core Architecture

### Module 1: `sermon-prompt-engine.js`

**Purpose:** Encodes the Master Directive and provides utilities for prompt generation

**Key Functions:**

| Function | Purpose |
|---|---|
| `generateMasterSystemPrompt()` | Returns the foundational system prompt for the AI |
| `generateSermonPrompt(request)` | Creates a context-specific prompt for a sermon request |
| `validateRequestForBias(request)` | Checks user input for potential bias issues |
| `validateVocabulary(text)` | Scans text for dismissive or hierarchical language |
| `suggestBridgingLanguage(traditions)` | Provides unifying phrases for connecting traditions |
| `createSermonPlan(request)` | Structures a sermon request for human/AI transparency |

### Module 2: `sermon-generator-integration.js`

**Purpose:** Integration layer for AI services and Express routes

**Key Classes:**

| Class | Purpose |
|---|---|
| `SermonGenerationService` | Main service for generating and validating sermons |
| Express Routes | API endpoints for sermon generation, validation, and bridging language |

---

## Usage Guide

### Quick Start

#### 1. Install the Modules

```bash
# Already in your workspace
# No additional dependencies needed for the core modules
```

#### 2. Import and Initialize

```javascript
const sermonEngine = require('./sermon-prompt-engine');
const { SermonGenerationService } = require('./sermon-generator-integration');

// Initialize the service
const sermonService = new SermonGenerationService('openai'); // or 'anthropic'
```

#### 3. Generate a Sermon

```javascript
const request = {
  theme: 'Resilience',
  texts: [
    {
      tradition: 'Christian',
      source: 'Psalm 27:1',
      passage: 'The Lord is my light and my salvation; whom shall I fear?',
      context: 'Expression of trust and courage'
    },
    {
      tradition: 'Tarot',
      source: 'Strength (XI)',
      passage: 'Strength, courage, patience, control, compassion',
      context: 'The card of inner power and gentle mastery'
    },
    {
      tradition: 'Pagan',
      source: 'The Oak King',
      passage: 'The sacred masculine principle of strength through groundedness',
      context: 'Pagan celebration of seasonal masculine energy'
    }
  ],
  audience: 'Interfaith spiritual community',
  tone: 'Warm, scholarly, inclusive'
};

const result = await sermonService.generateSermon(request);

console.log(result.sermon);        // The generated sermon
console.log(result.warnings);      // Any validation warnings
console.log(result.plan);          // The structured plan used
```

#### 4. Validate a Sermon

```javascript
const existingSermon = `
## SERMON: The Bridge of Resilience
...content here...
`;

const validation = await sermonService.validateSermonCompliance(existingSermon);

console.log(validation.passed);        // true/false
console.log(validation.issues);        // Any vocabulary issues found
console.log(validation.recommendations); // Suggestions for improvement
```

### Integration with Express

Add to your `index.js`:

```javascript
const express = require('express');
const { createSermonRoutes } = require('./sermon-generator-integration');
const db = require('./db');

const app = express();

// ... existing middleware ...

// Mount sermon routes
createSermonRoutes(app, db);

app.listen(3000, () => console.log('DiVi running on port 3000'));
```

---

## API Reference

### SermonPromptEngine

#### `generateMasterSystemPrompt()`

Returns the complete system prompt that guides the AI model.

```javascript
const systemPrompt = sermonEngine.generateMasterSystemPrompt();
// Use this as the "system" role in your AI API calls
```

**Output:**
- Complete markdown system prompt
- Includes role, objective, boundaries, structure, and validation checklist

#### `generateSermonPrompt(request)`

Generates a user-specific prompt for a sermon request.

```javascript
const userPrompt = sermonEngine.generateSermonPrompt({
  theme: 'Balance',
  texts: [...],
  audience: 'Interfaith group',
  tone: 'scholarly'
});
```

**Request Object:**
```javascript
{
  theme: string,           // Central theme (e.g., "Resilience")
  texts: [                 // Texts to synthesize
    {
      tradition: string,   // (e.g., "Christian")
      source: string,      // (e.g., "Psalm 27:1")
      passage: string,     // The actual text
      context?: string     // Optional context
    }
  ],
  audience: string,        // Target audience description
  tone?: string            // Optional tone (default: "scholarly yet accessible")
}
```

**Output:** A detailed prompt for the AI model

#### `validateRequestForBias(request)`

Checks a sermon request for potential bias issues.

```javascript
const validation = sermonEngine.validateRequestForBias(request);

// Returns:
{
  isValid: boolean,
  warnings: string[],      // Issues found
  suggestions: string[]    // Recommendations
}
```

#### `validateVocabulary(text)`

Scans text for dismissive or hierarchical language.

```javascript
const check = sermonEngine.validateVocabulary(sermonText);

// Returns:
{
  isClean: boolean,
  issues: [
    {
      found: string,       // The problematic phrase
      replacement: string, // Suggested replacement
      message: string      // Explanation
    }
  ]
}
```

#### `suggestBridgingLanguage(traditions)`

Provides unifying phrases for connecting traditions.

```javascript
const phrases = sermonEngine.suggestBridgingLanguage(['Christian', 'Pagan', 'Tarot']);

// Returns:
[
  "The wisdom of Christian, Pagan, Tarot converge in their recognition that...",
  "From different cultural and spiritual contexts, both Christian and Pagan illuminate...",
  ...
]
```

#### `createSermonPlan(request)`

Structures a sermon request with detailed guidelines.

```javascript
const plan = sermonEngine.createSermonPlan(request);

// Returns:
{
  theme: string,
  audience: string,
  plan: {
    anchor: {
      description: string,
      guidelines: string[]
    },
    convergence: {
      description: string,
      sections: [...]
    },
    synthesis: {
      description: string,
      guidelines: string[]
    },
    universalApplication: {
      description: string,
      guidelines: string[]
    }
  }
}
```

### SermonGenerationService

#### Constructor

```javascript
const service = new SermonGenerationService(
  'openai'  // or 'anthropic' or 'custom'
);
```

#### `generateSermon(request)`

```javascript
const result = await service.generateSermon({
  theme: 'Balance',
  texts: [...],
  audience: 'General seekers',
  tone: 'warm',
  userId: 'user123'
});

// Returns:
{
  success: boolean,
  sermon?: string,           // Generated sermon
  plan?: object,             // Sermon structure
  validation?: object,       // Input and output validation
  warnings?: array,          // Any issues found
  error?: string             // Error message if failed
}
```

#### `validateSermonCompliance(sermon)`

```javascript
const result = await service.validateSermonCompliance(sermonText);

// Returns:
{
  passed: boolean,
  details: string,           // Detailed validation report
  issues: array,             // Vocabulary issues
  recommendations: array     // Fixes suggested
}
```

---

## Safety & Validation

### Input Validation

The system automatically checks for:

- ❌ **Dismissive language:** "fake religion," "false beliefs," "cult"
- ❌ **Superiority claims:** "only true," "real faith," "correct path"
- ❌ **Hierarchical framing:** "primary" and "secondary" traditions

If detected, the system:
1. Issues warnings
2. Suggests alternative framing
3. Allows the user to correct or proceed at their own risk

### Output Validation

After sermon generation, the system checks for:

- ✓ **No hierarchy:** All traditions appear equally valid
- ✓ **Respectful vocabulary:** No dismissive or demeaning language
- ✓ **True synthesis:** Not just a comparison, but genuine convergence
- ✓ **Universal application:** Practices applicable to all traditions
- ✓ **Warm tone:** Inclusive, welcoming, non-judgmental

### Human Review Recommendations

Even with automated validation, **human review is essential**:

1. **Clergy/spiritual leaders** familiar with the traditions involved
2. **Interfaith consultants** to ensure cultural sensitivity
3. **Editorial review** for tone and clarity

---

## Examples

### Example 1: Christian × Pagan × Tarot Sermon on Transformation

**Request:**
```javascript
{
  theme: 'Transformation',
  texts: [
    {
      tradition: 'Christian',
      source: '2 Corinthians 5:17',
      passage: 'Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new.',
      context: 'Spiritual rebirth and renewal'
    },
    {
      tradition: 'Pagan',
      source: 'Beltane Festival',
      passage: 'The sacred fire that purifies and renews the land',
      context: 'Celtic celebration of spring transformation'
    },
    {
      tradition: 'Tarot',
      source: 'Death (XIII)',
      passage: 'Endings, beginnings, change, transformation, transition',
      context: 'The card of necessary release and metamorphosis'
    }
  ],
  audience: 'Interfaith spiritual community exploring change',
  tone: 'Hopeful, grounded, accessible'
}
```

**Expected Output Structure:**

```markdown
## SERMON: The Sacred Fire of Becoming

### THE ANCHOR: Transformation
Today we explore transformation not as loss, but as the essential rhythm of becoming.

### THE CONVERGENCE

**Christian Wisdom (2 Corinthians 5:17):**
In the Christian tradition, transformation is experienced as spiritual rebirth...

**Pagan Wisdom (Beltane):**
In Celtic and pagan traditions, the sacred fire at Beltane represents...

**Tarot Wisdom (Death):**
In Tarot symbolism, the Death card reveals that transformation is...

### SYNTHESIS
Across these three distinct traditions, a unified principle emerges: transformation 
is not destruction, but necessary change that honors both what was and what will be.

### UNIVERSAL APPLICATION
1. Daily practice: Release one old habit with gratitude
2. Weekly practice: Tend a metaphorical fire of intention
3. Community practice: Witness another's transformation with support
...
```

### Example 2: Jewish × Islamic × Buddhist Sermon on Compassion

**Request:**
```javascript
{
  theme: 'Compassion',
  texts: [
    {
      tradition: 'Jewish',
      source: 'Talmud: Pirkei Avot',
      passage: '"Love thy neighbor as thyself" - Leviticus 19:18',
      context: 'Foundation of Jewish ethics and community'
    },
    {
      tradition: 'Islamic',
      source: 'The Quran 3:134',
      passage: 'Those who spend in the way of God in good times and bad times, who restrain anger and pardon the people. God loves those who do good.',
      context: 'Islamic teachings on mercy and forgiveness'
    },
    {
      tradition: 'Buddhist',
      source: 'Metta (Loving-Kindness) Meditation',
      passage: 'May all beings be happy, peaceful, and safe',
      context: 'Buddhist practice of universal compassion'
    }
  ],
  audience: 'Interfaith meditation and study circle',
  tone: 'Gentle, reflective, inclusive'
}
```

---

## Troubleshooting

### "The AI is still treating one tradition as superior"

**Diagnosis:**
- Check if the system prompt was properly loaded
- Review the user prompt for hierarchical language

**Solution:**
```javascript
// Ensure system prompt is being used
const systemPrompt = sermonEngine.generateMasterSystemPrompt();
// Pass to AI: messages[0] = { role: "system", content: systemPrompt }

// Validate the generated sermon
const validation = sermonService.validateSermonCompliance(sermon);
if (!validation.passed) {
  // Regenerate with explicit correction
  console.log('Issues found:', validation.issues);
}
```

### "Vocabulary check is flagging legitimate academic terms"

**Solution:**
The vocabulary check uses a list of known dismissive terms. If you encounter false positives:

1. Review the actual word in context
2. If legitimate, update the `validateVocabulary` function to be more nuanced
3. Consider context-aware validation in a future enhancement

### "The sermon feels generic or surface-level"

**Cause:** Insufficient context in the `texts` array

**Solution:**
```javascript
// Better request with richer context
texts: [
  {
    tradition: 'Christian',
    source: 'Luke 15:11-32 (Parable of the Prodigal Son)',
    passage: '[Full parable text...]',
    context: 'Central teaching on divine mercy and restoration; often interpreted as forgiveness'
  },
  ...
]
```

### "I need to add a new tradition not yet in examples"

**Solution:**
The system is designed to be tradition-agnostic. Simply add texts from any tradition:

```javascript
texts: [
  {
    tradition: 'Daoist',
    source: 'Daodejing, Chapter 15',
    passage: 'The ancient masters were profound and wise...',
    context: 'Teaching on the paradoxes of wisdom and simplicity'
  }
]
```

---

## Next Steps

### For Implementation

1. **Install AI provider SDK:**
   ```bash
   npm install openai    # or @anthropic-ai/sdk
   ```

2. **Set environment variables:**
   ```bash
   OPENAI_API_KEY=your_key      # if using OpenAI
   ANTHROPIC_API_KEY=your_key   # if using Anthropic
   AI_PROVIDER=openai            # choice of provider
   ```

3. **Test the full flow:**
   ```bash
   npm test  # Once test suite is created
   ```

### For Ongoing Development

- [ ] Create comprehensive test suite
- [ ] Add database schema for storing sermons and validation history
- [ ] Build UI for sermon generation request forms
- [ ] Create admin panel for reviewing flagged sermons
- [ ] Add analytics to track which traditions and themes are requested
- [ ] Develop "sermon library" with pre-made examples
- [ ] Build review workflow for human approval before publication

---

## Philosophy & Ethics

This system is built on a fundamental ethical commitment: **spiritual respect is not negotiable.**

The Master Directive is not a "feature" that can be disabled. It is the core DNA of the system. Every sermon generated through DiVi is an act of bridge-building, not conversion or condemnation.

If you believe a sermon violates the Master Directive, the appropriate response is not to "relax" the boundaries, but to flag the sermon for human review and either revise or reject it.

**The goal is sacred:** To create spaces where people of different spiritual traditions can recognize the humanity, wisdom, and integrity in one another's paths.

---

## Support & Questions

For questions about:
- **Theology or tradition specifics:** Consult subject-matter experts from those traditions
- **AI integration:** Refer to your chosen provider's documentation
- **System architecture:** Review the inline code comments in `sermon-prompt-engine.js`
- **Safety concerns:** Escalate to the human review team before publication

---

**DiVi - The Belief Master: Bridging Sacred Traditions with Absolute Balance**

*Version 1.0.0 | Compiled with ⚖️ for Systemic Harmony*
