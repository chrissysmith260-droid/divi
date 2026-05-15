/**
 * FORTUNE MESSAGES DATABASE
 * ==========================
 * Inspiring, uplifting, and meaningful fortunes for daily reflection
 * Sourced from wisdom traditions, literature, and contemporary insight
 */

const fortuneMessages = {
  // Wisdom-based fortunes
  wisdom: [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "Your limitation—it's only your imagination. Push beyond it.",
    "The mind is everything. What you think, you become.",
    "Excellence is not a destination; it is a continuous journey that never ends.",
    "Wisdom comes from reflection, not just experience.",
    "The only true wisdom is in knowing you know nothing.",
    "Patience is the companion of wisdom.",
    "Understanding precedes judgment.",
    "Knowledge is power, but wisdom is freedom."
  ],

  // Growth and transformation
  growth: [
    "You are not a drop in the ocean. You are the entire ocean in a drop.",
    "The butterfly counts not months but moments, and has time enough.",
    "What caterpillar calls the end of the world, the master calls a butterfly.",
    "Growth happens at the edge of your comfort zone.",
    "Every expert was once a beginner.",
    "You don't need permission to become who you're meant to be.",
    "The only way out is through. Keep going.",
    "Your scars are proof of your strength.",
    "Change is the only constant. Embrace it.",
    "Bloom where you are planted, but don't be afraid to grow roots elsewhere."
  ],

  // Love and connection
  love: [
    "Love is the only force capable of transforming an enemy into a friend.",
    "The greatest healing is loving yourself first.",
    "Love is not about finding someone you can live with. It's finding someone you can't imagine living without.",
    "Kindness is the language which the deaf can hear and the blind can see.",
    "You are worthy of the love you're looking for.",
    "Connection is why we're here; it's what gives purpose and meaning to our lives.",
    "Love is not something you fall into; it's something you build.",
    "The more you love yourself, the less time you'll waste on things that don't matter.",
    "We are all born for love. It is the principle of existence and its only end.",
    "Love yourself, then invite others to love you back."
  ],

  // Courage and strength
  courage: [
    "Courage is not the absence of fear. It's doing what you need to do despite the fear.",
    "You are stronger than you think.",
    "The brave man is not he who does not feel afraid, but he who conquers that fear.",
    "Your story is not over yet. The best is yet to come.",
    "Stand tall even if the whole world doubts you.",
    "Courage is fear that has said its prayers.",
    "You are braver than you believe and stronger than you seem.",
    "The only person who can tell you 'you can't win' is you, and you don't have to listen.",
    "When you feel like quitting, remember why you started.",
    "Strength comes from struggle. Your struggles have made you strong."
  ],

  // Purpose and direction
  purpose: [
    "Your purpose is where your joy meets the world's need.",
    "The purpose of our lives is to be happy and to create happiness for others.",
    "Find what you love, and let it kill you.",
    "You are called to something greater than you know.",
    "Your talents will be rewarded. Your kindness will be returned.",
    "The world needs what you have to offer.",
    "Purpose is what makes you get up in the morning.",
    "You don't need to see the whole staircase. Just take the first step.",
    "Your unique path is your gift to the world.",
    "What you're meant to do is always calling you."
  ],

  // Success and achievement
  success: [
    "Success is not final; failure is not fatal. It is the courage to continue that counts.",
    "The difference between ordinary and extraordinary is that little 'extra.'",
    "Success usually comes to those who are too busy to be looking for it.",
    "Your potential is limitless.",
    "Hard work in silence, success makes the noise.",
    "Every small step forward is still a step in the right direction.",
    "You are closer than you think. Keep going.",
    "Success is the sum of small efforts repeated day in and day out.",
    "The only failure is in not trying.",
    "Your comeback will be bigger than your setback."
  ],

  // Mindfulness and presence
  mindfulness: [
    "This moment is an opportunity to choose peace.",
    "The present moment is all you truly have. Make it count.",
    "Breathe. You're exactly where you need to be right now.",
    "Every breath is a fresh beginning.",
    "Presence is the greatest gift you can give.",
    "Let go of what was, stop worrying about what will be. Be here now.",
    "Meditation is listening to the heartbeat of the universe.",
    "The now is the only time that is real.",
    "In this moment, you are enough.",
    "Peace is always available. It's just a breath away."
  ],

  // Abundance and gratitude
  abundance: [
    "Gratitude turns what you have into enough.",
    "You are a magnet for abundance. Believe it and it will flow to you.",
    "Blessings come to those who can see them.",
    "What you appreciate appreciates. What you're grateful for multiplies.",
    "The more you give, the more you receive.",
    "Abundance is not about having more. It's about needing less.",
    "You already have everything you need to be happy.",
    "Gratitude is the gateway to abundance.",
    "Count your blessings, not your problems.",
    "The universe is conspiring to help you succeed."
  ],

  // Resilience and perseverance
  resilience: [
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "After every fall, there is a rise.",
    "You were given this life because you were strong enough to live it.",
    "A smooth sea never made a skilled sailor.",
    "Your resilience is your superpower.",
    "Storms don't last forever. Neither will this challenge.",
    "The wound is the place where the Light enters you.",
    "You are not broken; you are becoming.",
    "Resilience is not about not falling. It's about how quickly you get back up.",
    "Every obstacle is an opportunity in disguise."
  ],

  // Self-discovery
  selfDiscovery: [
    "You are becoming who you're meant to be. Trust the process.",
    "Know thyself—this is the beginning of all wisdom.",
    "You are a masterpiece in progress.",
    "The cave you fear to enter holds the treasure you seek.",
    "You contain universes within you.",
    "Your quirks make you beautiful.",
    "The most beautiful view is the one you have of yourself when you know your worth.",
    "You are exactly who you were meant to be at this moment in time.",
    "Knowing yourself is the beginning of all wisdom.",
    "You are your own greatest project."
  ],

  // Daily inspiration
  daily: [
    "Today is a perfect day to become who you're meant to be.",
    "You've survived 100% of your worst days. You're doing great.",
    "Today, choose kindness.",
    "Your potential is limitless, and today is the day to tap into it.",
    "Make today the day you chose to be happy.",
    "You have the power to change your story. Write a beautiful one today.",
    "Today is the perfect day for a fresh start.",
    "Do something today that your future self will thank you for.",
    "Today you are one day closer to achieving your dreams.",
    "This day is a gift. Embrace it fully."
  ],

  // Universal truths
  universal: [
    "Everything you want is on the other side of fear.",
    "The only real limitation is the one you accept in your mind.",
    "What you resist persists. What you accept transforms.",
    "Energy flows where attention goes.",
    "You are not your mistakes; you are how you respond to them.",
    "The universe responds to your frequency.",
    "You get what you focus on. Choose wisely.",
    "Your life is a reflection of your inner world.",
    "What you seek is seeking you.",
    "The magic you're looking for is within you."
  ],

  // Spiritual and philosophical
  spiritual: [
    "You are a spiritual being having a human experience.",
    "The light within you is brighter than any darkness around you.",
    "Your soul knows the way. Trust it.",
    "All of life's answers are inside you.",
    "Spirit guides those who listen.",
    "You are infinitely loved and supported by the universe.",
    "Your spirit is eternal and infinitely powerful.",
    "Connect with your inner truth, and the world will make sense.",
    "You are a co-creator of your reality.",
    "The divine lives within you and all beings."
  ]
};

/**
 * Get a random fortune from any category
 */
function getRandomFortune(category = null) {
  let selectedCategory;

  if (category && fortuneMessages[category]) {
    selectedCategory = fortuneMessages[category];
  } else {
    // Pick a random category
    const categories = Object.keys(fortuneMessages);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    selectedCategory = fortuneMessages[randomCategory];
  }

  const fortune = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];
  return fortune;
}

/**
 * Get multiple random fortunes
 */
function getRandomFortunes(count = 3) {
  const fortunes = [];
  for (let i = 0; i < count; i++) {
    fortunes.push(getRandomFortune());
  }
  return fortunes;
}

/**
 * Get all categories
 */
function getCategories() {
  return Object.keys(fortuneMessages);
}

/**
 * Get fortunes by category
 */
function getFortunesByCategory(category) {
  return fortuneMessages[category] || [];
}

module.exports = {
  fortuneMessages,
  getRandomFortune,
  getRandomFortunes,
  getCategories,
  getFortunesByCategory
};
