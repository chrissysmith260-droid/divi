/**
 * SERMON PROMPT ENGINE - EXAMPLE & TEST CASES
 * ============================================
 * 
 * This file demonstrates how to use the DiVi sermon generation system
 * with the Master Directive. Run with:
 * 
 *   node sermon-examples.js
 * 
 * Or import examples into your test suite.
 */

const sermonEngine = require('./sermon-prompt-engine');
const { SermonGenerationService } = require('./sermon-generator-integration');

// ============================================================================
// EXAMPLE 1: Displaying the Master Directive
// ============================================================================

function example1_MasterDirective() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 1: The Master Directive');
  console.log('='.repeat(80) + '\n');

  const directive = sermonEngine.MASTER_DIRECTIVE;

  console.log('CORE OBJECTIVE:');
  console.log(directive.coreObjective);
  console.log('\nSAFETY BOUNDARIES - Principle 1 (No Erasure):');
  console.log(directive.safetyBoundaries.noErasure);
  console.log('\nOUTPUT STRUCTURE - The Anchor:');
  console.log(directive.outputStructure.theAnchor);
}

// ============================================================================
// EXAMPLE 2: Validating Biased Input
// ============================================================================

function example2_ValidationForBias() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 2: Input Validation for Bias');
  console.log('='.repeat(80) + '\n');

  // Example 1: Good request (no issues)
  console.log('--- Testing GOOD request ---');
  const goodRequest = {
    theme: 'Resilience',
    texts: [
      {
        tradition: 'Christian',
        source: 'Psalm 27:1',
        passage: 'The Lord is my light and my salvation'
      },
      {
        tradition: 'Pagan',
        source: 'The Oak King',
        passage: 'The sacred masculine principle of strength'
      }
    ]
  };

  let result = sermonEngine.validateRequestForBias(goodRequest);
  console.log('Is Valid:', result.isValid);
  console.log('Warnings:', result.warnings.length === 0 ? 'None' : result.warnings);

  // Example 2: Problematic request (hierarchical framing)
  console.log('\n--- Testing PROBLEMATIC request ---');
  const problematicRequest = {
    theme: 'Truth',
    primaryTradition: 'Christian',
    secondaryTradition: 'Pagan',
    texts: [
      {
        tradition: 'Christian',
        source: 'John 14:6',
        passage: 'I am the way, the truth, and the life'
      },
      {
        tradition: 'Pagan',
        source: 'Wiccan Rede',
        passage: 'An it harm none, do what ye will'
      }
    ]
  };

  result = sermonEngine.validateRequestForBias(problematicRequest);
  console.log('Is Valid:', result.isValid);
  console.log('Warnings:');
  result.warnings.forEach(w => console.log('  - ' + w));
  console.log('Suggestions:');
  result.suggestions.forEach(s => console.log('  - ' + s));
}

// ============================================================================
// EXAMPLE 3: Vocabulary Validation
// ============================================================================

function example3_VocabularyValidation() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 3: Vocabulary Validation');
  console.log('='.repeat(80) + '\n');

  // Example 1: Clean text
  console.log('--- Testing CLEAN text ---');
  const cleanText = `
    The Christian tradition teaches the importance of grace, while the Islamic 
    tradition emphasizes mercy. Both concepts point toward divine compassion that 
    transcends human judgment. The Tarot's Temperance card echoes this principle 
    through its imagery of balance and integration.
  `;

  let check = sermonEngine.validateVocabulary(cleanText);
  console.log('Is Clean:', check.isClean);
  console.log('Issues:', check.issues.length === 0 ? 'None' : check.issues);

  // Example 2: Text with dismissive language
  console.log('\n--- Testing TEXT WITH ISSUES ---');
  const problematicText = `
    The Bible teaches true faith, while Tarot is merely a satanic divination tool 
    used by false religions. Only Christians understand real spiritual truth.
  `;

  check = sermonEngine.validateVocabulary(problematicText);
  console.log('Is Clean:', check.isClean);
  console.log('Issues found:');
  check.issues.forEach(issue => {
    console.log(`  Found: "${issue.found}"`);
    console.log(`  Replace with: "${issue.replacement}"`);
    console.log(`  Reason: ${issue.message}`);
  });
}

// ============================================================================
// EXAMPLE 4: Generating the Master System Prompt
// ============================================================================

function example4_SystemPrompt() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 4: Master System Prompt');
  console.log('='.repeat(80) + '\n');

  const systemPrompt = sermonEngine.generateMasterSystemPrompt();
  console.log(systemPrompt.substring(0, 500) + '...\n');
  console.log('[Full prompt is', systemPrompt.length, 'characters]');
}

// ============================================================================
// EXAMPLE 5: Generating a Sermon Request Prompt
// ============================================================================

function example5_SermonPrompt() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 5: Sermon Request Prompt');
  console.log('='.repeat(80) + '\n');

  const request = {
    theme: 'Compassion',
    texts: [
      {
        tradition: 'Christian',
        source: '1 John 4:7',
        passage: 'Dear friends, let us love one another, for love comes from God',
        context: 'Christian teaching on universal love'
      },
      {
        tradition: 'Buddhist',
        source: 'Metta Sutra',
        passage: 'May all beings be happy, peaceful, and safe',
        context: 'Buddhist loving-kindness meditation'
      },
      {
        tradition: 'Islamic',
        source: 'Quran 9:71',
        passage: 'The believers are those who are merciful and compassionate',
        context: 'Islamic virtue of Rahmah (mercy)'
      }
    ],
    audience: 'Interfaith contemplative community',
    tone: 'warm, reflective, inclusive'
  };

  const prompt = sermonEngine.generateSermonPrompt(request);
  console.log(prompt.substring(0, 800) + '...\n');
  console.log('[Full prompt is', prompt.length, 'characters]');
}

// ============================================================================
// EXAMPLE 6: Bridging Language Suggestions
// ============================================================================

function example6_BridgingLanguage() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 6: Bridging Language Suggestions');
  console.log('='.repeat(80) + '\n');

  const traditions = ['Christian', 'Buddhist', 'Islamic'];
  const bridges = sermonEngine.suggestBridgingLanguage(traditions);

  console.log(`Bridging language for: ${traditions.join(', ')}\n`);
  bridges.forEach((bridge, idx) => {
    console.log(`${idx + 1}. ${bridge}`);
  });
}

// ============================================================================
// EXAMPLE 7: Creating a Sermon Plan
// ============================================================================

function example7_SermonPlan() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 7: Sermon Plan Structure');
  console.log('='.repeat(80) + '\n');

  const request = {
    theme: 'Balance',
    texts: [
      {
        tradition: 'Christian',
        source: 'Proverbs 3:21',
        passage: 'My son, let not mercy and truth forsake you'
      },
      {
        tradition: 'Tarot',
        source: 'Temperance (XIV)',
        passage: 'Balance, moderation, patience'
      }
    ],
    audience: 'Spiritual seekers interested in equilibrium'
  };

  const plan = sermonEngine.createSermonPlan(request);
  console.log(JSON.stringify(plan, null, 2));
}

// ============================================================================
// EXAMPLE 8: Using the SermonGenerationService
// ============================================================================

async function example8_GenerationService() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 8: SermonGenerationService (Mock)');
  console.log('='.repeat(80) + '\n');

  // Set to mock mode for this demo (doesn't require API keys)
  process.env.MOCK_AI = 'true';

  const service = new SermonGenerationService('openai');

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
      }
    ],
    audience: 'Interfaith spiritual community',
    tone: 'warm, scholarly'
  };

  console.log('Generating sermon with request:');
  console.log(JSON.stringify(request, null, 2));
  console.log('\n[In mock mode, this would call the AI. In production, it uses real API]\n');

  // Demonstrate what the call would look like
  console.log('The service would generate a sermon with:');
  console.log('1. System prompt from Master Directive');
  console.log('2. Context-specific user prompt');
  console.log('3. Output validation against vocabulary and structure');
  console.log('4. Compliance report with warnings if needed');
}

// ============================================================================
// EXAMPLE 9: Complete Workflow
// ============================================================================

async function example9_CompleteWorkflow() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 9: Complete Workflow (Step-by-Step)');
  console.log('='.repeat(80) + '\n');

  const request = {
    theme: 'Transformation',
    texts: [
      {
        tradition: 'Christian',
        source: '2 Corinthians 5:17',
        passage: 'Therefore, if anyone is in Christ, he is a new creation',
        context: 'Spiritual rebirth'
      },
      {
        tradition: 'Pagan',
        source: 'Beltane',
        passage: 'The sacred fire that purifies and renews',
        context: 'Celtic transformation festival'
      }
    ],
    audience: 'Interfaith group exploring personal change'
  };

  console.log('STEP 1: Validate request for bias');
  const validation1 = sermonEngine.validateRequestForBias(request);
  console.log('  Status:', validation1.isValid ? '✓ PASSED' : '✗ FAILED');

  console.log('\nSTEP 2: Create sermon plan');
  const plan = sermonEngine.createSermonPlan(request);
  console.log('  Anchor theme:', plan.theme);
  console.log('  Audience:', plan.audience);
  console.log('  Convergence sections:', plan.plan.convergence.sections.length);

  console.log('\nSTEP 3: Generate sermon prompt');
  const prompt = sermonEngine.generateSermonPrompt(request);
  console.log('  Prompt length:', prompt.length, 'characters');
  console.log('  Preview:', prompt.substring(0, 200) + '...');

  console.log('\nSTEP 4: [In production] Call AI with:');
  console.log('  - Master system prompt');
  console.log('  - Generated user prompt');
  console.log('  - AI Model (OpenAI, Anthropic, etc.)');

  console.log('\nSTEP 5: Validate sermon output');
  const mockSermon = sermonEngine.MASTER_DIRECTIVE.outputStructure.theAnchor;
  const validation2 = sermonEngine.validateVocabulary(mockSermon);
  console.log('  Vocabulary clean:', validation2.isClean ? '✓ YES' : '✗ NO');
  console.log('  Issues found:', validation2.issues.length);

  console.log('\nSTEP 6: Return to user');
  console.log('  Success: true');
  console.log('  Sermon: [Generated sermon text]');
  console.log('  Compliance warnings: 0');
  console.log('  Ready for publication: ✓ YES');
}

// ============================================================================
// EXAMPLE 10: Real-World Scenarios
// ============================================================================

function example10_Scenarios() {
  console.log('\n' + '='.repeat(80));
  console.log('EXAMPLE 10: Real-World Scenario Demonstrations');
  console.log('='.repeat(80) + '\n');

  const scenarios = [
    {
      name: 'Interfaith Wedding Sermon',
      theme: 'Union & Commitment',
      texts: [
        {
          tradition: 'Christian',
          source: 'Ephesians 4:2-3',
          passage: 'Walk in a manner worthy of your calling, endeavoring to keep the unity of the Spirit'
        },
        {
          tradition: 'Hindu',
          source: 'Upanishads',
          passage: 'Two birds sitting on the same tree, one watches while the other tastes'
        },
        {
          tradition: 'Jewish',
          source: 'Ketubah',
          passage: 'In partnership and mutual support'
        }
      ]
    },
    {
      name: 'Grief & Loss Support',
      theme: 'Transformation Through Loss',
      texts: [
        {
          tradition: 'Christian',
          source: 'John 11:25-26',
          passage: 'I am the resurrection and the life'
        },
        {
          tradition: 'Buddhist',
          source: 'Impermanence (Anicca)',
          passage: 'All conditioned things are impermanent'
        },
        {
          tradition: 'Pagan',
          source: 'Samhain',
          passage: 'Honoring the dead and the cycles of life'
        }
      ]
    },
    {
      name: 'Social Justice & Community',
      theme: 'Prophetic Justice & Compassion',
      texts: [
        {
          tradition: 'Christian',
          source: 'Amos 5:24',
          passage: 'Let justice roll down like waters'
        },
        {
          tradition: 'Islamic',
          source: 'Quran 16:90',
          passage: 'Verily God commands justice and goodness'
        },
        {
          tradition: 'Jewish',
          source: 'Tikkun Olam',
          passage: 'Repairing the world through justice'
        }
      ]
    }
  ];

  scenarios.forEach((scenario, idx) => {
    console.log(`\n${idx + 1}. ${scenario.name}`);
    console.log(`   Theme: ${scenario.theme}`);
    console.log(`   Traditions: ${scenario.texts.map(t => t.tradition).join(', ')}`);

    const validation = sermonEngine.validateRequestForBias(scenario);
    console.log(`   Input validated: ${validation.isValid ? '✓' : '✗'}`);
  });
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function main() {
  console.log('\n\n');
  console.log('█'.repeat(80));
  console.log('█' + ' '.repeat(78) + '█');
  console.log('█' + '  DiVi - THE BELIEF MASTER: Sermon Prompt Engine Examples'.padEnd(79) + '█');
  console.log('█' + '  Master Directive: Absolute Balance & Inclusivity'.padEnd(79) + '█');
  console.log('█' + ' '.repeat(78) + '█');
  console.log('█'.repeat(80));

  // Run all examples
  example1_MasterDirective();
  example2_ValidationForBias();
  example3_VocabularyValidation();
  example4_SystemPrompt();
  example5_SermonPrompt();
  example6_BridgingLanguage();
  example7_SermonPlan();
  await example8_GenerationService();
  await example9_CompleteWorkflow();
  example10_Scenarios();

  console.log('\n' + '='.repeat(80));
  console.log('END OF EXAMPLES');
  console.log('='.repeat(80) + '\n');

  console.log('📖 For detailed documentation, see: SERMON_PROMPT_ENGINE_DOCS.md');
  console.log('💻 To use in your Express app, see: sermon-generator-integration.js');
  console.log('⚙️  Core engine module: sermon-prompt-engine.js');
  console.log('\n✨ DiVi - Bridging Sacred Traditions with Absolute Balance\n');
}

// Run if executed directly
if (require.main === module) {
  main().catch(console.error);
}

// Export for testing
module.exports = {
  example1_MasterDirective,
  example2_ValidationForBias,
  example3_VocabularyValidation,
  example4_SystemPrompt,
  example5_SermonPrompt,
  example6_BridgingLanguage,
  example7_SermonPlan,
  example8_GenerationService,
  example9_CompleteWorkflow,
  example10_Scenarios
};
