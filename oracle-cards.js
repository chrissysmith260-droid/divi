/**
 * ORACLE CARDS DATABASE
 * =====================
 * Diverse oracle decks with spiritual guidance and wisdom
 * Sourced from various traditions and contemporary creators
 */

const oracleCards = {
  guidedOracleStandard: [
    {
      name: "The Visionary",
      meaning: "Trust your inner sight and creative vision",
      upright: "Clarity, inspiration, seeing beyond the veil",
      reversed: "Self-doubt, lack of clarity, blocked creativity",
      guidance: "Today, trust what you intuitively know to be true. Your inner sight is sharper than you realize."
    },
    {
      name: "Grace & Flow",
      meaning: "Let go and surrender to the natural rhythm",
      upright: "Ease, alignment, natural progression",
      reversed: "Resistance, struggle, fighting against flow",
      guidance: "Release what you cannot control. Move with the natural current of life rather than against it."
    },
    {
      name: "Sacred Transformation",
      meaning: "Embrace the changes that shape your growth",
      upright: "Rebirth, evolution, positive change",
      reversed: "Resistance to change, stagnation, fear",
      guidance: "You are being invited into transformation. Trust the process, even if it's uncomfortable."
    },
    {
      name: "Divine Timing",
      meaning: "Everything unfolds perfectly in its season",
      upright: "Patience, perfect timing, synchronicity",
      reversed: "Impatience, premature action, missed moments",
      guidance: "Trust that divine timing is orchestrating your path. Your moment is coming."
    },
    {
      name: "The Healer",
      meaning: "Embrace your power to heal yourself and others",
      upright: "Healing, compassion, wholeness",
      reversed: "Woundedness, resistance to healing, isolation",
      guidance: "You have the power to heal. Begin with yourself, then extend this gift to others."
    },
    {
      name: "Sacred Connection",
      meaning: "You are never truly alone; all is interconnected",
      upright: "Unity, relationships, spiritual connection",
      reversed: "Isolation, disconnection, loneliness",
      guidance: "Recognize the divine connection you share with all beings. Reach out and connect."
    },
    {
      name: "Inner Wisdom",
      meaning: "Listen to the wise voice within",
      upright: "Intuition, inner knowing, spiritual guidance",
      reversed: "Self-doubt, ignoring intuition, external focus",
      guidance: "Your inner wisdom holds the answers you seek. Quiet your mind and listen deeply."
    },
    {
      name: "Abundance Flows",
      meaning: "Open yourself to receive blessings",
      upright: "Prosperity, receiving, gratitude",
      reversed: "Scarcity mindset, blocks to receiving, loss",
      guidance: "Abundance surrounds you. Release fears about lack and open your hands to receive."
    },
    {
      name: "Courage in Your Heart",
      meaning: "Face your fears with compassion and strength",
      upright: "Courage, strength, facing challenges",
      reversed: "Fear, cowardice, avoidance",
      guidance: "You are braver than you believe. Take the brave step forward today."
    },
    {
      name: "Sacred Pause",
      meaning: "Rest and reflection renew your spirit",
      upright: "Rest, meditation, reflection, stillness",
      reversed: "Burnout, exhaustion, neglecting self-care",
      guidance: "Give yourself permission to rest. Sacred pause is sacred work."
    },
    {
      name: "Authentic Self",
      meaning: "Embrace who you truly are",
      upright: "Authenticity, self-acceptance, truth",
      reversed: "Inauthenticity, self-denial, masking",
      guidance: "The world needs your authentic self, not a performed version. Show up as you are."
    },
    {
      name: "Love & Compassion",
      meaning: "Open your heart to compassion",
      upright: "Love, compassion, kindness, heart-centered",
      reversed: "Hardheartedness, self-protection, distance",
      guidance: "Let love be your guiding force. Extend compassion to yourself and others today."
    },
    {
      name: "Boundless Potential",
      meaning: "You are capable of so much more",
      upright: "Possibility, potential, growth, expansion",
      reversed: "Limitation, self-imposed boundaries, untapped gifts",
      guidance: "Release beliefs about your limitations. Your potential is boundless."
    },
    {
      name: "Sacred Yes",
      meaning: "Say yes to what calls to your soul",
      upright: "Affirmation, saying yes, moving forward",
      reversed: "Hesitation, saying no when yes is needed, stagnation",
      guidance: "Your soul is calling you toward something. Have the courage to say yes."
    },
    {
      name: "Gentle Strength",
      meaning: "Power lies in gentleness and patience",
      upright: "Gentleness, patience, strength in stillness",
      reversed: "Force, aggression, impatience",
      guidance: "Your greatest strength is gentleness. Lead with kindness, not force."
    },
    {
      name: "Divine Provision",
      meaning: "Trust that all you need is provided",
      upright: "Provision, support, divine care",
      reversed: "Lack, abandonment, scarcity",
      guidance: "Everything you truly need is already provided. Trust in divine provision."
    },
    {
      name: "Letting Go",
      meaning: "Release what no longer serves your growth",
      upright: "Release, letting go, freedom, completion",
      reversed: "Holding on, attachment, inability to release",
      guidance: "What are you being called to release? Freedom awaits on the other side."
    },
    {
      name: "Soul Purpose",
      meaning: "Move toward your sacred calling",
      upright: "Purpose, calling, direction, alignment",
      reversed: "Purposelessness, confusion, off-path",
      guidance: "You have a soul purpose. Listen for the quiet call toward your authentic path."
    },
    {
      name: "Gratitude Opens Doors",
      meaning: "Appreciation multiplies blessings",
      upright: "Gratitude, appreciation, abundance mindset",
      reversed: "Ingratitude, entitlement, closed doors",
      guidance: "Notice what you can be grateful for today. Gratitude opens invisible doors."
    },
    {
      name: "Trust the Unfolding",
      meaning: "Have faith in the process",
      upright: "Faith, trust, divine unfolding, surrender",
      reversed: "Doubt, mistrust, anxiety, control",
      guidance: "Let go of needing to see the whole path. Trust the next step."
    }
  ],

  elementalOracleCards: [
    {
      element: "Fire",
      name: "Passion & Action",
      meaning: "Ignite your inner fire and take bold action",
      energy: "Dynamic, creative, transformative",
      guidance: "What needs your passionate attention right now? Let courage fuel your actions."
    },
    {
      element: "Water",
      name: "Emotions & Flow",
      meaning: "Honor your emotional truth and move with grace",
      energy: "Intuitive, healing, nurturing",
      guidance: "Your emotions carry wisdom. Let them flow without judgment."
    },
    {
      element: "Air",
      name: "Clarity & Communication",
      meaning: "Speak your truth with clarity",
      energy: "Intellectual, communicative, expansive",
      guidance: "What truth needs to be voiced? Clarity serves you and others."
    },
    {
      element: "Earth",
      name: "Grounding & Abundance",
      meaning: "Root yourself in the physical and manifest prosperity",
      energy: "Stable, grounded, prosperous",
      guidance: "Ground yourself in the present moment. Abundance requires a solid foundation."
    },
    {
      element: "Spirit",
      name: "Divine Connection",
      meaning: "Transcend limitation and connect to spirit",
      energy: "Transcendent, sacred, infinite",
      guidance: "You are spiritual being having a human experience. Connect to your higher truth."
    }
  ],

  chakraOracleCards: [
    {
      chakra: "Root (Muladhara)",
      color: "Red",
      name: "Grounded & Safe",
      meaning: "Feel secure and supported by the earth",
      affirmation: "I am grounded, safe, and supported",
      guidance: "Establish your foundation. Root yourself in what feels stable and true."
    },
    {
      chakra: "Sacral (Svadhisthana)",
      color: "Orange",
      name: "Creative Flow",
      meaning: "Allow your creative essence to flow",
      affirmation: "I honor my creativity and desires",
      guidance: "Create without judgment. Your creative expression is sacred."
    },
    {
      chakra: "Solar Plexus (Manipura)",
      color: "Yellow",
      name: "Personal Power",
      meaning: "Reclaim your personal power and will",
      affirmation: "I am powerful and capable",
      guidance: "You have the power within you. Trust your ability to create change."
    },
    {
      chakra: "Heart (Anahata)",
      color: "Green",
      name: "Love & Compassion",
      meaning: "Open your heart to love and compassion",
      affirmation: "I love and accept myself and others",
      guidance: "Let love guide your decisions. Compassion heals all."
    },
    {
      chakra: "Throat (Vishuddha)",
      color: "Blue",
      name: "Authentic Expression",
      meaning: "Speak your truth with clarity",
      affirmation: "I speak my truth with clarity and ease",
      guidance: "Your voice matters. Express yourself authentically."
    },
    {
      chakra: "Third Eye (Ajna)",
      color: "Indigo",
      name: "Inner Vision",
      meaning: "Trust your inner sight and wisdom",
      affirmation: "I trust my intuition and inner wisdom",
      guidance: "Your intuition is accurate. Trust what you see beyond the physical."
    },
    {
      chakra: "Crown (Sahasrara)",
      color: "Violet",
      name: "Spiritual Connection",
      meaning: "Connect to your higher consciousness",
      affirmation: "I am connected to divine consciousness",
      guidance: "You are a spiritual being. Rest in your connection to the infinite."
    }
  ],

  seasonalOracleCards: [
    {
      season: "Spring",
      name: "New Beginnings",
      meaning: "Plant seeds for new growth",
      energy: "Fresh starts, renewal, hope",
      guidance: "What new possibility wants to be born? Plant seeds today."
    },
    {
      season: "Summer",
      name: "Full Expression",
      meaning: "Shine at your brightest",
      energy: "Abundance, vitality, celebration",
      guidance: "Allow yourself to shine. Your light is needed in the world."
    },
    {
      season: "Autumn",
      name: "Release & Harvest",
      meaning: "Gather your blessings and release what's complete",
      energy: "Gratitude, completion, transformation",
      guidance: "Give thanks for your harvest. Release with grace what no longer serves."
    },
    {
      season: "Winter",
      name: "Rest & Reflection",
      meaning: "Go within and restore yourself",
      energy: "Restoration, introspection, peace",
      guidance: "Winter invites you inward. Rest and reflect on your journey."
    }
  ]
};

module.exports = oracleCards;
