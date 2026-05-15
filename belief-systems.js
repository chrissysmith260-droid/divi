/**
 * BELIEF SYSTEMS DATABASE
 * =======================
 * Comprehensive, respectful, and accurate representation of world religions and beliefs
 * Includes: Sacred texts, core teachings, cultural context, and resources
 * 
 * Organized with the Master Directive: Balance, Inclusivity, Spiritual Safety
 */

const beliefSystems = {
  // =========================================================================
  // ABRAHAMIC TRADITIONS
  // =========================================================================

  christian: {
    name: 'Christianity',
    region: 'Global (originated in Middle East)',
    followers: '2.4 billion',
    founded: '1st century CE',
    founder: 'Jesus of Nazareth',
    
    overview: 'Christianity is centered on the life, teachings, and resurrection of Jesus Christ. It emphasizes salvation through faith, divine grace, and the promise of eternal life.',
    
    coreTeachings: [
      'God is love and operates through grace',
      'Jesus Christ is the Son of God and path to salvation',
      'Redemption is available to all through faith',
      'The afterlife offers heaven or hell based on faith and deeds',
      'Community worship and fellowship are central'
    ],

    sacredTexts: {
      primary: 'The Holy Bible (Old Testament & New Testament)',
      keyBooks: [
        'Gospel of Matthew (teachings on the kingdom)',
        'Gospel of Mark (narrative of Jesus)',
        'Gospel of Luke (compassion and healing)',
        'Gospel of John (spiritual depth)',
        'Epistles (letters on living faith)'
      ]
    },

    majorDenominations: [
      'Roman Catholic (hierarchical, papal authority)',
      'Protestant (emphasis on scripture and faith)',
      'Orthodox (traditional liturgy, icon veneration)',
      'Evangelical (personal conversion, Bible emphasis)',
      'Pentecostal (Holy Spirit experience, healing)'
    ],

    keyPractices: [
      'Prayer and meditation',
      'Church attendance',
      'Sacraments (Baptism, Communion)',
      'Reading scripture',
      'Service to others'
    ],

    culturalContext: 'Christianity has shaped Western civilization, art, music, and philosophy. It emphasizes personal relationship with God, community support, and redemptive transformation.',

    resources: {
      learn: 'Bible.com, Christian Learning Resources, Interfaith dialogue centers',
      explore: 'Visit local churches, attend services, engage with Christian community organizations'
    }
  },

  jewish: {
    name: 'Judaism',
    region: 'Middle East (originated in ancient Israel)',
    followers: '15 million',
    founded: '2000 BCE (Abraham covenant)',
    patriarchs: 'Abraham, Isaac, Jacob, Moses',
    
    overview: 'Judaism is the world\'s oldest major monotheistic religion. It emphasizes the covenant between God and the Jewish people, the Torah, and a life of ethical action and learning.',
    
    coreTeachings: [
      'One God (monotheism)',
      'The Torah is divine revelation',
      'Covenant between God and Israel',
      'Tikkun Olam (repairing the world through justice)',
      'Community and family bonds are sacred',
      'Continuous study and interpretation of scripture'
    ],

    sacredTexts: {
      primary: 'The Torah (Five Books of Moses)',
      secondary: [
        'Tanakh (Hebrew Bible including Prophets)',
        'Talmud (rabbinic interpretation)',
        'Siddur (prayer book)',
        'Machzor (festival prayer book)'
      ]
    },

    majorTraditions: [
      'Orthodox (strictest adherence to Torah)',
      'Conservative (balanced tradition and modernity)',
      'Reform (emphasis on ethics, inclusive practices)',
      'Reconstructionist (Judaism as evolving civilization)',
      'Karaite (scripture-based, without rabbinic tradition)'
    ],

    keyPractices: [
      'Observance of Shabbat (weekly rest)',
      'Keeping Kosher (dietary laws)',
      'Wearing tallit (prayer shawl)',
      'Tefillin (phylacteries)',
      'Torah study',
      'Life cycle ceremonies (Bar/Bat Mitzvah, etc.)'
    ],

    festivals: [
      'Passover (exodus from Egypt, freedom)',
      'Shavuot (receiving the Torah)',
      'Sukkot (wandering in wilderness, gratitude)',
      'Hanukkah (rededication of temple)',
      'Rosh Hashanah (Jewish New Year)',
      'Yom Kippur (day of atonement)'
    ],

    culturalContext: 'Judaism has produced extraordinary contributions to philosophy, literature, science, and ethics. It emphasizes the importance of questioning, debate, and continuous learning. Jewish culture values humor, family, and tikkun olam (social justice).',

    resources: {
      learn: 'My Jewish Learning, Chabad.org, Jewish Agency, local synagogues',
      explore: 'Attend Shabbat services, learn Hebrew, study Torah with a rabbi, participate in Jewish cultural events'
    }
  },

  islamic: {
    name: 'Islam',
    region: 'Middle East (originated in Arabia)',
    followers: '1.8 billion',
    founded: '7th century CE',
    founder: 'Prophet Muhammad',
    
    overview: 'Islam is a monotheistic religion founded on the teachings of Prophet Muhammad. It emphasizes submission to God (Allah), following the Five Pillars, and living ethically through the Quran and Hadith.',
    
    coreTeachings: [
      'Allah is the one God',
      'Muhammad is the final prophet',
      'The Quran is God\'s final revelation',
      'All humans are equal before God',
      'Charity and compassion are obligatory',
      'Justice and mercy are central values'
    ],

    sacredTexts: {
      primary: 'The Quran (God\'s word revealed to Muhammad)',
      secondary: [
        'Hadith (teachings and practices of Muhammad)',
        'Sunnah (the way of Muhammad)',
        'Sira (biography of Muhammad)'
      ]
    },

    fivePillars: [
      'Shahada (declaration of faith)',
      'Salah (ritual prayer 5x daily)',
      'Zakat (charitable giving)',
      'Sawm (fasting during Ramadan)',
      'Hajj (pilgrimage to Mecca)'
    ],

    majorTraditions: [
      'Sunni (follows hadith and consensus)',
      'Shia (emphasizes imam leadership)',
      'Sufi (mystical spirituality)',
      'Salafi (return to early Islam)'
    ],

    keyPractices: [
      'Five daily prayers facing Mecca',
      'Fasting during Ramadan',
      'Giving to charity',
      'Dress modestly',
      'Avoid forbidden substances',
      'Community worship'
    ],

    festivals: [
      'Eid al-Fitr (end of Ramadan celebration)',
      'Eid al-Adha (Abraham\'s sacrifice commemoration)',
      'Islamic New Year',
      'Mawlid (Prophet Muhammad\'s birthday)',
      'Ramadan (month of fasting and reflection)'
    ],

    culturalContext: 'Islam has produced profound advances in science, mathematics, medicine, architecture, and literature. It emphasizes community (Ummah), social justice, knowledge, and the dignity of all humans. Islamic art, calligraphy, and architecture are renowned worldwide.',

    resources: {
      learn: 'IslamicFinder.org, Muslim community centers, Quran.com, local mosques',
      explore: 'Attend Friday prayers at a mosque, learn about Islamic history, engage with Muslim community'
    }
  },

  // =========================================================================
  // HINDU TRADITIONS
  // =========================================================================

  hinduism: {
    name: 'Hinduism',
    region: 'Indian subcontinent',
    followers: '1 billion',
    founded: '1500 BCE or earlier',
    texts: 'Vedas (oldest known scriptures)',
    
    overview: 'Hinduism is the world\'s oldest major religion still in practice. It encompasses diverse philosophical schools, devotional practices, and ways of living. Central concepts include dharma (duty), karma (action/consequence), samsara (cycle of rebirth), and moksha (liberation).',
    
    coreTeachings: [
      'Brahman is ultimate reality',
      'Atman (soul) is divine essence',
      'Dharma (duty) guides righteous living',
      'Karma (action) creates consequences across lifetimes',
      'Samsara is the cycle of rebirth',
      'Moksha (liberation) is the ultimate goal',
      'Multiple paths to the divine (bhakti, karma, jnana)'
    ],

    sacredTexts: {
      shruti: [
        'Rigveda (oldest Hindu scripture)',
        'Yajurveda (ritual instructions)',
        'Samaveda (chants)',
        'Atharvaveda (prayers and rituals)',
        'Upanishads (philosophical teachings)'
      ],
      smriti: [
        'Mahabharata (epic poem, includes Bhagavad Gita)',
        'Ramayana (epic of Rama)',
        'Puranas (stories of gods)',
        'Dharmaśāstra (ethical codes)'
      ]
    },

    deities: {
      trinity: [
        'Brahma (creator)',
        'Vishnu (preserver, incarnates as Krishna and Rama)',
        'Shiva (destroyer/transformer, meditation)'
      ],
      others: [
        'Devi/Shakti (divine feminine energy)',
        'Ganesha (remover of obstacles)',
        'Hanuman (devotion, courage)',
        'Lakshmi (prosperity, grace)',
        'Saraswati (knowledge, arts)'
      ]
    },

    majorPhilosophies: [
      'Vedanta (non-dualism, Advaita)',
      'Samkhya (dualism, analysis)',
      'Yoga (meditation and practice)',
      'Vaishnavism (devotion to Vishnu/Krishna)',
      'Shaivism (devotion to Shiva)',
      'Shaktism (feminine divine power)'
    ],

    keyPractices: [
      'Puja (worship rituals)',
      'Meditation and yoga',
      'Chanting mantras',
      'Pilgrimage to sacred sites',
      'Observance of vows and festivals',
      'Reverence for sacred texts',
      'Honoring gurus (teachers)'
    ],

    festivals: [
      'Diwali (festival of lights)',
      'Holi (festival of colors, spring renewal)',
      'Navratri (goddess worship, 9 nights)',
      'Dussehra (victory of good over evil)',
      'Maha Shivaratri (Shiva meditation night)',
      'Krishna Janmashtami (Krishna\'s birthday)',
      'Ganesh Chaturthi (Ganesha celebration)'
    ],

    lifeStages: [
      'Brahmachari (student, learning)',
      'Grihastha (householder, family)',
      'Vanaprastha (forest dweller, retirement)',
      'Sannyasi (renunciate, spiritual focus)'
    ],

    culturalContext: 'Hindu civilization has produced profound philosophical wisdom, sophisticated mathematics and astronomy, classical arts (dance, music, sculpture), and spiritual practices like yoga and meditation. Hindu values include respect for nature, non-violence (ahimsa), and the interconnection of all beings.',

    resources: {
      learn: 'Vedic philosophy centers, Hindu temples, Yoga and Ayurveda institutes',
      explore: 'Learn yoga and meditation, visit Hindu temples, study the Bhagavad Gita, attend Hindu festivals'
    }
  },

  buddhism: {
    name: 'Buddhism',
    region: 'Asia (originated in India)',
    followers: '500 million',
    founded: '5th century BCE',
    founder: 'Siddhartha Gautama (the Buddha)',
    
    overview: 'Buddhism is a spiritual tradition centered on the teachings of the Buddha. It emphasizes the Four Noble Truths, the path to the cessation of suffering, mindfulness, and compassion for all beings.',
    
    coreTeachings: [
      'The Four Noble Truths (suffering, its cause, its cessation, the path)',
      'Dukkha (unsatisfactoriness of worldly existence)',
      'Anatta (non-self, interdependence)',
      'Impermanence (anicca)',
      'Nirvana (liberation from suffering)',
      'Compassion for all sentient beings',
      'Mindfulness and present-moment awareness'
    ],

    eightfoldPath: [
      'Right View',
      'Right Intention',
      'Right Speech',
      'Right Action',
      'Right Livelihood',
      'Right Effort',
      'Right Mindfulness',
      'Right Concentration'
    ],

    sacredTexts: {
      theravada: 'Pali Canon (Tripitaka)',
      mahayana: [
        'Lotus Sutra',
        'Heart Sutra',
        'Lankavatara Sutra'
      ],
      vajrayana: [
        'Tibetan Book of the Dead',
        'Tantric texts'
      ]
    },

    majorTraditions: [
      'Theravada (Way of the Elders, monastic focus)',
      'Mahayana (Great Vehicle, lay practice)',
      'Vajrayana/Tibetan Buddhism (tantric practices)',
      'Pure Land (devotion to Amitabha Buddha)',
      'Zen/Chan (meditation, sudden enlightenment)'
    ],

    keyPractices: [
      'Meditation (Vipassana, Zen)',
      'Mindfulness practice',
      'Study of sutras',
      'Ethical conduct (precepts)',
      'Devotion to Buddha',
      'Compassion practices (Metta)',
      'Chanting and rituals'
    ],

    festivals: [
      'Vesak/Buddha\'s Birthday (enlightenment celebration)',
      'Bodhi Day (enlightenment of Buddha)',
      'Loy Krathong (water festival)',
      'Asalha Puja (beginning of Buddhist year)',
      'Visakha Bucha (Buddha\'s birth and enlightenment)'
    ],

    pathwaysToEnlightenment: [
      'Enlightenment through wisdom (prajna)',
      'Enlightenment through ethical conduct (sila)',
      'Enlightenment through meditation (samadhi)'
    ],

    culturalContext: 'Buddhism has profoundly influenced Asian civilization, producing remarkable philosophy, art, architecture (temples and stupas), and contemplative practices. Modern psychology has embraced Buddhist-derived mindfulness and compassion techniques. Buddhist emphasis on non-harm (ahimsa), equanimity, and interdependence resonates globally.',

    resources: {
      learn: 'Buddhist centers, meditation groups, dharma talks, temples',
      explore: 'Practice meditation, attend a dharma talk, visit a Buddhist temple, study Buddhist philosophy'
    }
  },

  sikhism: {
    name: 'Sikhism',
    region: 'Punjab (India/Pakistan border)',
    followers: '30 million',
    founded: '15th century CE',
    founder: 'Guru Nanak',
    
    overview: 'Sikhism emphasizes devotion to one God, social equality, service to others, and spiritual discipline. It blends elements of Hinduism and Islam while maintaining its distinct identity.',
    
    coreTeachings: [
      'One God (Ek Onkar)',
      'Equality of all humans',
      'Honest living and hard work',
      'Service to others (seva)',
      'Remembrance of God (naam simran)',
      'Rejection of caste system',
      'Community meals (langar)'
    ],

    sacredTexts: {
      primary: 'Guru Granth Sahib (living scripture)',
      teachings: 'Guru Nanak\'s compositions and teachings of the Ten Gurus'
    },

    keyPractices: [
      'Prayer and meditation',
      'Wearing turban and uncut hair',
      'The Five Ks (faith articles)',
      'Service to community',
      'Reading Guru Granth Sahib',
      'Participation in gurudwara (temple)',
      'Martial arts (Gatka)'
    ],

    festivals: [
      'Baisakhi (new year, harvest)',
      'Diwali (with Hindu tradition)',
      'Hola Mohalla (Holi celebration with martial arts)',
      'Guru Nanak Jayanti (founder\'s birthday)'
    ],

    culturalContext: 'Sikhism is known for its egalitarian principles, warrior-saint ethos, community service, and open kitchens. The Sikh diaspora maintains strong community bonds and actively participates in interfaith work.',

    resources: {
      learn: 'Local Gurdwara (Sikh temples), Sikh community centers',
      explore: 'Visit a Gurdwara, participate in langar, learn about Sikh history and values'
    }
  },

  jainism: {
    name: 'Jainism',
    region: 'India',
    followers: '5 million',
    founded: '6th century BCE',
    prophet: 'Mahavira (last Tirthankara)',
    
    overview: 'Jainism emphasizes extreme non-violence (ahimsa), asceticism, and the idea that all living beings possess a soul. It teaches that liberation comes through ethical discipline.',
    
    coreTeachings: [
      'Ahimsa (non-violence to all living beings)',
      'Satya (truthfulness)',
      'Asteya (non-stealing)',
      'Brahmacharya (chastity)',
      'Aparigraha (non-attachment)',
      'Karma affects the soul directly',
      'Self-discipline leads to moksha'
    ],

    pathsToLiberation: [
      'Right Faith',
      'Right Knowledge',
      'Right Conduct'
    ],

    sacredTexts: {
      digambara: 'Purvas (ancient writings)',
      shvetambara: 'Agamas (canonical texts)'
    },

    keyPractices: [
      'Strict vegetarianism',
      'Meditation and fasting',
      'Study of scriptures',
      'Service without ego',
      'Honoring monks and nuns',
      'Vows of non-violence'
    ],

    festivals: [
      'Paryushana (annual fasting festival)',
      'Samvatsari (new year, forgiveness)'
    ],

    culturalContext: 'Jainism has produced a sophisticated philosophy of ethics and metaphysics. Its emphasis on ahimsa has influenced Indian thought and modern pacifism. Jain merchants have been known for ethical business practices.',

    resources: {
      learn: 'Jain temples, Jain community centers, philosophical texts',
      explore: 'Visit a Jain temple, learn about non-violence philosophy, study Mahavira\'s teachings'
    }
  },

  // =========================================================================
  // EAST ASIAN TRADITIONS
  // =========================================================================

  taoism: {
    name: 'Taoism',
    region: 'China, Taiwan, Singapore',
    followers: '12 million (including folk religion)',
    founded: '4th century BCE (philosophical), 2nd century CE (religious)',
    
    overview: 'Taoism seeks harmony with the Tao (the Way), the fundamental nature of the universe. It emphasizes balance, natural living, longevity, and spiritual immortality.',
    
    coreTeachings: [
      'The Tao is the ultimate reality',
      'Yin and Yang represent complementary forces',
      'Wu Wei (non-action, acting with the flow)',
      'Living in harmony with nature',
      'Balance between opposites',
      'Longevity and health through practice',
      'Spiritual immortality through cultivation'
    ],

    sacredTexts: [
      'Daodejing (The Way and Virtue)',
      'Zhuangzi (philosophical writings)',
      'I Ching (Book of Changes)',
      'Taoist Canon'
    ],

    philosophicalSchools: [
      'Philosophical Taoism (intellectual tradition)',
      'Religious Taoism (deity worship, rituals)',
      'Folk Taoism (local spirits and practices)'
    ],

    keyPractices: [
      'Tai Chi and Qigong',
      'Meditation and breathing exercises',
      'Feng Shui (harmony with environment)',
      'Alchemy and herbal medicine',
      'Temple rituals and offerings',
      'Cultivation of life energy (chi)'
    ],

    festivals: [
      'Lunar New Year (renewal)',
      'Lantern Festival',
      'Dragon Boat Festival',
      'Moon Festival'
    ],

    culturalContext: 'Taoism has profoundly influenced Chinese art, poetry, martial arts, and medicine. Its principles of balance and non-force are central to traditional Chinese practices. Taoist philosophy emphasizes wisdom, humor, and living simply.',

    resources: {
      learn: 'Taoist temples, martial arts schools, philosophy centers',
      explore: 'Learn Tai Chi or Qigong, study the Daodejing, practice meditation'
    }
  },

  confucianism: {
    name: 'Confucianism',
    region: 'China, East Asia',
    followers: '6 million (as primary religion)',
    founded: '6th-5th century BCE',
    founder: 'Kongzi (Confucius)',
    
    overview: 'Confucianism is a philosophical system emphasizing ethics, social harmony, family loyalty, and proper conduct. It has been central to East Asian civilization.',
    
    coreTeachings: [
      'Ren (benevolence, humanity)',
      'Li (ritual propriety, right conduct)',
      'Junzi (the ideal person)',
      'Family as foundation of society',
      'Filial piety (respect for parents)',
      'Education and self-improvement',
      'Good government through moral example'
    ],

    relationships: [
      'Ruler and subject',
      'Father and son',
      'Husband and wife',
      'Elder and younger',
      'Friend and friend'
    ],

    sacredTexts: [
      'Four Books (core teachings)',
      'Five Classics (ancient texts)',
      'Analects of Confucius'
    ],

    keyPractices: [
      'Study and learning',
      'Rituals and ceremonies',
      'Family respect and gatherings',
      'Moral self-cultivation',
      'Community service',
      'Ancestor veneration'
    ],

    festivals: [
      'Confucius Birthday (September 28)',
      'Lunar New Year',
      'Qingming (ancestor remembrance)'
    ],

    culturalContext: 'Confucianism has shaped East Asian civilization, emphasizing harmony, education, and moral leadership. It remains influential in personal ethics, family values, and social organization.',

    resources: {
      learn: 'Confucian temples and centers, philosophical texts',
      explore: 'Study the Analects, attend Confucian teachings, learn about East Asian ethics'
    }
  },

  shinto: {
    name: 'Shinto',
    region: 'Japan',
    followers: '100 million (many practice alongside Buddhism)',
    founded: 'Indigenous Japanese practice',
    
    overview: 'Shinto is the indigenous spirituality of Japan, centered on reverence for kami (sacred spirits), nature, and ancestors. It emphasizes purity, harmony, and connection to the natural world.',
    
    coreTeachings: [
      'Kami (sacred spirits) inhabit nature',
      'Reverence for ancestors',
      'Purity and cleanliness',
      'Harmony with nature',
      'Gratitude for blessings',
      'Community and social harmony'
    ],

    concepts: [
      'Kannushi (priests)',
      'Torii (shrine gates)',
      'Purification rituals (misogi)',
      'Sacred spaces (shrines)'
    ],

    types: [
      'Shrine Shinto (organized)',
      'Folk Shinto (local practices)',
      'Sect Shinto (healing and devotion)',
      'State Shinto (historical)'
    ],

    keyPractices: [
      'Shrine visits and prayers',
      'Purification rituals',
      'Seasonal celebrations',
      'Ancestor veneration',
      'Wearing sacred amulets (omamori)',
      'Kami offerings (matsuri)'
    ],

    festivals: [
      'Ōmisoka (New Year preparation)',
      'Shogatsu (New Year)',
      'Hinamatsuri (Girls\' Day)',
      'Matsuri (various shrine festivals)',
      'Obon (ancestor festival)'
    ],

    culturalContext: 'Shinto is deeply woven into Japanese culture, aesthetics, and daily life. It emphasizes harmony with nature, respect for seasons, and community rituals. Shinto practices remain central to Japanese identity.',

    resources: {
      learn: 'Japanese shrines and cultural centers',
      explore: 'Visit a Shinto shrine, learn about kami and rituals, experience Japanese spiritual practices'
    }
  },

  // =========================================================================
  // ANCIENT MEDITERRANEAN & EUROPEAN TRADITIONS
  // =========================================================================

  greekReligion: {
    name: 'Ancient Greek Religion',
    region: 'Ancient Greece',
    period: '1600 BCE - 391 CE',
    note: 'Modern revival through Hellenism',
    
    overview: 'Ancient Greek religion was polytheistic, emphasizing the relationship between gods and humans. The gods were portrayed as powerful but flawed, living on Mount Olympus. Greeks practiced piety through rituals, sacrifices, and honor to the gods.',
    
    olympians: [
      'Zeus (sky, lightning, authority)',
      'Hera (marriage, family)',
      'Poseidon (sea, earthquakes)',
      'Demeter (agriculture, harvest)',
      'Athena (wisdom, warfare)',
      'Apollo (sun, music, prophecy)',
      'Artemis (hunt, moon)',
      'Ares (war, violence)',
      'Hephaestus (fire, craftsmanship)',
      'Aphrodite (love, beauty)',
      'Hermes (travel, commerce, messages)',
      'Hestia/Dionysus (hearth/wine and celebration)'
    ],

    coreBeliefs: [
      'Gods are immortal and powerful',
      'Humans must honor gods through ritual',
      'Fate (moira) is unavoidable',
      'Hubris (excessive pride) brings divine punishment',
      'Xenia (hospitality) is sacred',
      'Heroes achieve glory through excellence (arete)'
    ],

    sacredTexts: [
      'Homer\'s Iliad and Odyssey',
      'Hesiod\'s Theogony',
      'Greek myths and legends'
    ],

    keyPractices: [
      'Animal sacrifices to gods',
      'Festivals and games (Olympics)',
      'Temple worship',
      'Oracle consultation',
      'Mysteries (Eleusinian)',
      'Symposia (philosophical gatherings)'
    ],

    festivals: [
      'Anthesteria (Dionysus festival)',
      'Thesmophoria (Demeter festival)',
      'Olympic Games (for Zeus)',
      'Panathenaea (Athena festival)'
    ],

    culturalContext: 'Greek religion produced extraordinary mythology, philosophy, art, and architecture. Greek gods became archetypes understood across the world. Greek philosophical inquiry emerged from religious questioning. The oracle at Delphi profoundly influenced Greek decision-making.',

    modernExpression: 'Hellenism (contemporary worship of Greek gods)',

    resources: {
      learn: 'Classical literature, mythology centers, classical studies',
      explore: 'Read Homer and Hesiod, study Greek mythology, visit classical sites'
    }
  },

  romanReligion: {
    name: 'Ancient Roman Religion',
    region: 'Ancient Rome',
    period: '8th century BCE - 392 CE',
    note: 'Influenced by Greek and Etruscan traditions',
    
    overview: 'Roman religion centered on proper relationships with gods through rituals and civic duty. Romans adopted and adapted Greek gods, emphasizing duty (pietas) and divine order supporting state and family.',
    
    mainDeities: [
      'Jupiter (sky, authority)',
      'Juno (queen of gods, women)',
      'Minerva (wisdom, crafts)',
      'Mars (war)',
      'Venus (love, beauty)',
      'Apollo (same as Greek)',
      'Diana (hunt)',
      'Vesta (hearth, home)',
      'Mercury (commerce, messages)',
      'Vulcan (fire, forge)',
      'Neptune (sea)',
      'Ceres (agriculture)'
    ],

    coreBeliefs: [
      'Gods govern specific domains',
      'Divine will manifests through nature (augury)',
      'Pietas (duty and respect) pleases gods',
      'Religious observance ensures peace (Pax Romana)',
      'Household gods (Lares) protect families',
      'Piety ensures divine favor and prosperity'
    ],

    sacredTexts: [
      'Works of Ovid (mythology)',
      'Works of Virgil (Aeneid)',
      'Livy\'s histories',
      'Pliny\'s natural history'
    ],

    keyPractices: [
      'Ritual sacrifices',
      'Augury (reading animal entrails)',
      'Taking auspices (reading signs)',
      'Temple worship',
      'Household rituals (honoring Lares)',
      'Priestly duties'
    ],

    festivals: [
      'Lupercalia (purification)',
      'Saturnalia (Saturn festival, role reversal)',
      'Floralia (Flora festival)',
      'Vestalia (Vesta festival)',
      'Lemuria (ancestor placation)'
    ],

    culturalContext: 'Roman religion emphasized civic duty, military honor, and imperial authority. It was pragmatic and adaptive, absorbing gods from conquered peoples. Roman religion provided religious justification for empire and social order. Religious practices were intertwined with political power.',

    resources: {
      learn: 'Classical Roman literature, archaeology, classical studies programs',
      explore: 'Study Roman historians, visit classical sites, learn about Roman civic religion'
    }
  },

  egyptianReligion: {
    name: 'Ancient Egyptian Religion',
    region: 'Ancient Egypt',
    period: '3000 BCE - 391 CE',
    note: 'One of the longest continuous religious traditions',
    
    overview: 'Egyptian religion centered on maintaining cosmic order (ma\'at), honoring divine beings (netjeru), and preparing for the afterlife. The Nile\'s cycles shaped their understanding of death, rebirth, and renewal.',
    
    majorDeities: [
      'Ra (sun god, creator, daily renewal)',
      'Osiris (afterlife, judgment, renewal)',
      'Isis (magic, motherhood, healing)',
      'Horus (sky, royal power)',
      'Set (chaos, disorder)',
      'Thoth (wisdom, writing, magic)',
      'Anubis (mummification, afterlife)',
      'Sekhmet (power, healing)',
      'Bastet (protection, cats)',
      'Nut (sky)',
      'Geb (earth)',
      'Shu (air, light)'
    ],

    coreBeliefs: [
      'Ma\'at (cosmic order) must be maintained',
      'Afterlife is real and accessible',
      'Pharaohs are divine mediators',
      'All living things possess ka (soul)',
      'Names have power and must be remembered',
      'Magic (heka) is divine tool',
      'Mummification preserves soul for afterlife'
    ],

    sacredTexts: [
      'Pyramid Texts (oldest religious literature)',
      'Coffin Texts',
      'Book of the Dead (Pert em Hru)',
      'Temple inscriptions'
    ],

    keyPractices: [
      'Mummification and burial rites',
      'Temple worship',
      'Ritual offerings',
      'Magic spells and amulets',
      'Prayer and meditation',
      'Seasonal festivals',
      'Judgment of the dead (weighing of heart)'
    ],

    festivals: [
      'Heb Sed (royal jubilee)',
      'Opet (Amun festival)',
      'Inundation Festival (Nile flood)',
      'Wag Festival (honoring the dead)'
    ],

    afterlifeJourney: [
      'Death (transition)',
      'Mummification (preservation)',
      'Duat (underworld journey)',
      'Weighing of the Heart (judgment by Osiris)',
      'Eternal life in Field of Reeds (Aaru)'
    ],

    culturalContext: 'Egyptian religion profoundly influenced Western esotericism and mystery traditions. Egyptian concepts of resurrection and divine judgment influenced later religions. The sophistication of Egyptian cosmology and the longevity of their civilization made them iconic.',

    resources: {
      learn: 'Egyptology centers, museum collections, hieroglyphic studies',
      explore: 'Study the Book of the Dead, visit Egyptian museum exhibits, learn hieroglyphics'
    }
  },

  celticReligion: {
    name: 'Celtic Spirituality',
    region: 'Europe, British Isles, Ireland',
    period: 'Pre-Christian to present',
    
    overview: 'Celtic spirituality emphasizes connection to nature, honoring the divine in all things, and the cycles of seasons. Modern Celtic spirituality blends ancient practices with contemporary understanding.',
    
    coreBeliefs: [
      'The sacred is present in nature',
      'Cycles of birth, growth, death, renewal',
      'Interconnection of all beings',
      'Trees hold spiritual wisdom',
      'Water (especially wells and rivers) is sacred',
      'Ancestors guide and protect',
      'Magic and spirit are real forces'
    ],

    deities: [
      'Brigid (healing, poetry, forge)',
      'Lugh (light, craftsmanship)',
      'Dagda (father god, abundance)',
      'Morrigan (war, fate, magic)',
      'Danu (earth mother)',
      'Manannán mac Lir (sea, other worlds)',
      'Ogma (speech, writing)'
    ],

    wheelOfTheYear: [
      'Samhain (November, veil between worlds)',
      'Imbolc (February, first stirring)',
      'Beltane (May, fires, transition)',
      'Lughnasadh (August, first harvest)'
    ],

    keyPractices: [
      'Fire festivals (Beltane, Samhain)',
      'Tree lore and astrology',
      'Herbal medicine',
      'Storytelling and poetry',
      'Meditation and vision quests',
      'Honoring sacred wells and groves',
      'Divination'
    ],

    symbolism: [
      'Triskele (triple spiral, cycles)',
      'Cross (elements united)',
      'Knot patterns (interconnection)',
      'Trees (wisdom and foundation)',
      'Stones (permanence, earth)'
    ],

    culturalContext: 'Celtic spirituality emphasizes imagination, poetry, and connection to land. Celtic mythology produced extraordinary literature. The emphasis on cycles and natural rhythms influences modern earth-based spirituality.',

    modernExpression: 'Neo-Paganism, Wicca, Druidry',

    resources: {
      learn: 'Celtic cultural centers, druid organizations, ancient literature',
      explore: 'Visit Celtic sacred sites, study Celtic mythology, learn traditional crafts'
    }
  },

  // =========================================================================
  // INDIGENOUS & EARTH-BASED TRADITIONS
  // =========================================================================

  nativeAmerican: {
    name: 'Native American Spirituality',
    region: 'North America',
    note: 'Diverse traditions vary by nation',
    
    overview: 'Native American spirituality emphasizes connection to land, respect for all living beings, and maintaining balance with nature. Traditions vary significantly among hundreds of nations.',
    
    coreBeliefs: [
      'The earth is sacred and alive',
      'All living things are connected',
      'Ancestors guide and teach',
      'Balance and reciprocity are essential',
      'Dreams carry spiritual messages',
      'Spirit moves through all creation',
      'Seventh generation thinking (long-term responsibility)'
    ],

    commonElements: [
      'Sweat lodges (purification)',
      'Vision quests (spiritual journey)',
      'Powwows (community gathering)',
      'Talking circles (respectful dialogue)',
      'Sacred fire ceremonies',
      'Smudging (cleansing with sage)'
    ],

    spiritualConcepts: [
      'Mana/Orenda (spiritual power)',
      'Totems (spiritual guides)',
      'Medicine (spiritual healing)',
      'Harmony with natural cycles',
      'Respect for all creatures'
    ],

    festivals: [
      'Powwows (nation-specific)',
      'Sun Dance (renewal)',
      'Green Corn Ceremony (harvest)',
      'Solstice and equinox celebrations'
    ],

    culturalContext: 'Native American spirituality is deeply tied to specific lands and ecosystems. Traditional practices emphasize sustainability, respect for resources, and intergenerational responsibility. The spiritual wisdom of Native American traditions is increasingly recognized globally.',

    resources: {
      learn: 'Native American cultural centers, tribal museums, respectful educational programs',
      explore: 'Attend culturally appropriate events, support Native artists, learn tribal histories'
    }
  },

  africanTraditional: {
    name: 'African Traditional Religions',
    region: 'Africa and African diaspora',
    note: 'Diverse traditions with common themes',
    
    overview: 'African traditional religions emphasize connection to ancestors, harmony with nature, and relationship with the divine through spirits and community. Over 100 million practitioners worldwide.',
    
    coreBeliefs: [
      'Supreme being (Nyame, Oludumare, etc.)',
      'Spirits inhabit natural places',
      'Ancestors mediate between living and divine',
      'Community wellbeing is paramount',
      'Rituals maintain cosmic order',
      'Healers and elders hold wisdom',
      'Life force flows through all beings'
    ],

    keyElements: [
      'Divination (reading patterns)',
      'Healing with herbs and ritual',
      'Ancestor veneration',
      'Coming-of-age ceremonies',
      'Rites of passage',
      'Storytelling and oral history',
      'Music and dance in worship'
    ],

    traditions: [
      'Yoruba religion (Orisha worship)',
      'Zulu spirituality',
      'Akan traditions',
      'Dogon spirituality',
      'Maasai beliefs',
      'Bantu traditions'
    ],

    africanDiaspora: [
      'Santeria/Lukumi (Cuban)',
      'Candomblé (Brazilian)',
      'Vodou/Voodoo (Haitian)',
      'Orisha worship (various locations)'
    ],

    culturalContext: 'African traditional religions have produced sophisticated cosmologies, moral philosophies, and healing practices. Through the African diaspora, these traditions have influenced world religion and spirituality. African values of ubuntu (I am because we are) emphasize community and interdependence.',

    resources: {
      learn: 'African cultural centers, museums, university African studies',
      explore: 'Learn African history and culture, support African artists, engage with African diaspora communities'
    }
  }
};

// =========================================================================
// EXPORT
// =========================================================================

module.exports = beliefSystems;
