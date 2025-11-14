import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const foreignLanguageCourses = [
  // MAJOR WORLD LANGUAGES
  
  // 1. Spanish
  {
    name: 'Beginner Spanish',
    code: 'SPAN-101',
    description: 'Introduction to Spanish language covering basic grammar, vocabulary, pronunciation, and everyday conversations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Spanish',
    isCompulsory: false,
    icon: '🇪🇸',
    topics: [
      { title: 'Spanish Alphabet & Pronunciation', description: 'Learning Spanish sounds and pronunciation rules', order: 1 },
      { title: 'Basic Greetings & Introductions', description: 'Common phrases for meeting people', order: 2 },
      { title: 'Numbers, Days & Time', description: 'Counting and telling time in Spanish', order: 3 },
      { title: 'Present Tense Verbs', description: 'Regular and irregular present tense conjugation', order: 4 },
      { title: 'Everyday Vocabulary', description: 'Family, food, colors, and common objects', order: 5 }
    ]
  },
  {
    name: 'Intermediate Spanish',
    code: 'SPAN-201',
    description: 'Building on beginner Spanish with more complex grammar, expanded vocabulary, and conversational practice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Spanish',
    isCompulsory: false,
    icon: '🇪🇸',
    topics: [
      { title: 'Past Tenses', description: 'Preterite and imperfect tenses', order: 1 },
      { title: 'Future & Conditional', description: 'Talking about future plans and hypotheticals', order: 2 },
      { title: 'Subjunctive Mood', description: 'Introduction to subjunctive conjugations', order: 3 },
      { title: 'Complex Sentences', description: 'Using conjunctions and relative clauses', order: 4 },
      { title: 'Cultural Topics', description: 'Spanish-speaking countries and cultures', order: 5 }
    ]
  },
  {
    name: 'Advanced Spanish Grammar',
    code: 'SPAN-301',
    description: 'Advanced grammar concepts, idiomatic expressions, and sophisticated language use.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Spanish',
    isCompulsory: false,
    icon: '🇪🇸',
    topics: [
      { title: 'Advanced Subjunctive', description: 'Perfect and imperfect subjunctive uses', order: 1 },
      { title: 'Passive Voice', description: 'Passive constructions and se impersonal', order: 2 },
      { title: 'Idiomatic Expressions', description: 'Common Spanish idioms and phrases', order: 3 },
      { title: 'Formal vs. Informal', description: 'Register and appropriate language use', order: 4 },
      { title: 'Spanish Literature', description: 'Reading and analyzing Spanish texts', order: 5 }
    ]
  },
  {
    name: 'Spanish Conversation Practice',
    code: 'SPAN-202',
    description: 'Practical conversation skills for real-world Spanish communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Spanish',
    isCompulsory: false,
    icon: '🇪🇸',
    topics: [
      { title: 'Travel & Tourism', description: 'Vocabulary for traveling in Spanish-speaking countries', order: 1 },
      { title: 'Shopping & Dining', description: 'Ordering food and making purchases', order: 2 },
      { title: 'Social Interactions', description: 'Making friends and small talk', order: 3 },
      { title: 'Business Spanish', description: 'Professional communication in Spanish', order: 4 },
      { title: 'Debate & Discussion', description: 'Expressing opinions and arguing points', order: 5 }
    ]
  },

  // 2. French
  {
    name: 'Introductory French',
    code: 'FREN-101',
    description: 'Beginning French language course covering pronunciation, basic grammar, and essential vocabulary.',
    level: 'TERTIARY' as EducationLevel,
    category: 'French',
    isCompulsory: false,
    icon: '🇫🇷',
    topics: [
      { title: 'French Pronunciation', description: 'French sounds, accents, and liaison', order: 1 },
      { title: 'Basic Greetings', description: 'Bonjour, au revoir, and polite expressions', order: 2 },
      { title: 'Articles & Nouns', description: 'Gender, number, and articles', order: 3 },
      { title: 'Present Tense', description: 'Regular and irregular verb conjugations', order: 4 },
      { title: 'Everyday Vocabulary', description: 'Family, food, and daily activities', order: 5 }
    ]
  },
  {
    name: 'French Grammar & Vocabulary',
    code: 'FREN-201',
    description: 'Intermediate French grammar structures and expanded vocabulary for more complex communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'French',
    isCompulsory: false,
    icon: '🇫🇷',
    topics: [
      { title: 'Past Tenses', description: 'Passé composé and imparfait', order: 1 },
      { title: 'Future & Conditional', description: 'Future simple and conditional mood', order: 2 },
      { title: 'Pronouns', description: 'Object pronouns and relative pronouns', order: 3 },
      { title: 'Adjectives & Adverbs', description: 'Agreement and placement', order: 4 },
      { title: 'Thematic Vocabulary', description: 'Work, school, health, and hobbies', order: 5 }
    ]
  },
  {
    name: 'Conversational French',
    code: 'FREN-202',
    description: 'Practical French conversation for everyday situations and cultural contexts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'French',
    isCompulsory: false,
    icon: '🇫🇷',
    topics: [
      { title: 'French Culture', description: 'Customs, traditions, and etiquette', order: 1 },
      { title: 'Travel French', description: 'Navigating airports, hotels, and transportation', order: 2 },
      { title: 'Dining & Cuisine', description: 'French food vocabulary and restaurant phrases', order: 3 },
      { title: 'Social Conversations', description: 'Making friends and networking', order: 4 },
      { title: 'French Media', description: 'Understanding French news, music, and films', order: 5 }
    ]
  },

  // 3. German
  {
    name: 'German Basics',
    code: 'GERM-101',
    description: 'Introduction to German language including pronunciation, basic grammar, and essential phrases.',
    level: 'TERTIARY' as EducationLevel,
    category: 'German',
    isCompulsory: false,
    icon: '🇩🇪',
    topics: [
      { title: 'German Alphabet & Sounds', description: 'Pronunciation and special characters (ä, ö, ü, ß)', order: 1 },
      { title: 'Basic Greetings', description: 'Guten Tag, Auf Wiedersehen, and introductions', order: 2 },
      { title: 'Gender & Cases', description: 'Nominative, accusative, dative, and genitive', order: 3 },
      { title: 'Present Tense Verbs', description: 'Regular and irregular conjugations', order: 4 },
      { title: 'Numbers & Time', description: 'Counting and telling time in German', order: 5 }
    ]
  },
  {
    name: 'German for Travelers',
    code: 'GERM-102',
    description: 'Practical German for travel situations including transportation, accommodation, and dining.',
    level: 'TERTIARY' as EducationLevel,
    category: 'German',
    isCompulsory: false,
    icon: '🇩🇪',
    topics: [
      { title: 'Travel Vocabulary', description: 'Airports, trains, and directions', order: 1 },
      { title: 'Hotel & Accommodation', description: 'Booking rooms and checking in', order: 2 },
      { title: 'Restaurants & Food', description: 'Ordering meals and German cuisine', order: 3 },
      { title: 'Shopping', description: 'Buying souvenirs and asking for help', order: 4 },
      { title: 'Emergencies', description: 'Medical help and reporting problems', order: 5 }
    ]
  },
  {
    name: 'Intermediate German Language Skills',
    code: 'GERM-201',
    description: 'Building intermediate German proficiency with complex grammar and expanded vocabulary.',
    level: 'TERTIARY' as EducationLevel,
    category: 'German',
    isCompulsory: false,
    icon: '🇩🇪',
    topics: [
      { title: 'Past Tenses', description: 'Perfekt, Präteritum, and Plusquamperfekt', order: 1 },
      { title: 'Future & Conditional', description: 'Futur I, Futur II, and Konjunktiv', order: 2 },
      { title: 'Subordinate Clauses', description: 'Word order in complex sentences', order: 3 },
      { title: 'Prepositions', description: 'Prepositions with accusative, dative, and genitive', order: 4 },
      { title: 'German Culture', description: 'History, traditions, and contemporary Germany', order: 5 }
    ]
  },

  // 4. Italian
  {
    name: 'Basic Italian',
    code: 'ITAL-101',
    description: 'Introduction to Italian language with focus on pronunciation, basic grammar, and everyday expressions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Italian',
    isCompulsory: false,
    icon: '🇮🇹',
    topics: [
      { title: 'Italian Pronunciation', description: 'Italian sounds and stress patterns', order: 1 },
      { title: 'Greetings & Introductions', description: 'Ciao, buongiorno, and meeting people', order: 2 },
      { title: 'Articles & Nouns', description: 'Gender, number, and definite/indefinite articles', order: 3 },
      { title: 'Present Tense', description: 'Regular -are, -ere, -ire verbs', order: 4 },
      { title: 'Basic Vocabulary', description: 'Family, food, colors, and numbers', order: 5 }
    ]
  },
  {
    name: 'Italian Conversation & Culture',
    code: 'ITAL-201',
    description: 'Conversational Italian with cultural insights into Italian life, customs, and traditions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Italian',
    isCompulsory: false,
    icon: '🇮🇹',
    topics: [
      { title: 'Italian Culture', description: 'History, art, and Italian way of life', order: 1 },
      { title: 'Travel Italian', description: 'Navigating Italian cities and attractions', order: 2 },
      { title: 'Italian Cuisine', description: 'Food vocabulary and dining etiquette', order: 3 },
      { title: 'Social Interactions', description: 'Making friends and small talk', order: 4 },
      { title: 'Italian Media', description: 'Music, cinema, and literature', order: 5 }
    ]
  },

  // 5. Portuguese
  {
    name: 'Portuguese Fundamentals',
    code: 'PORT-101',
    description: 'Introduction to Portuguese language covering European and Brazilian variations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Portuguese',
    isCompulsory: false,
    icon: '🇵🇹',
    topics: [
      { title: 'Portuguese Pronunciation', description: 'European vs. Brazilian pronunciation', order: 1 },
      { title: 'Basic Greetings', description: 'Olá, bom dia, and introductions', order: 2 },
      { title: 'Articles & Gender', description: 'Definite and indefinite articles', order: 3 },
      { title: 'Present Tense Verbs', description: 'Regular and irregular conjugations', order: 4 },
      { title: 'Essential Vocabulary', description: 'Numbers, time, and everyday words', order: 5 }
    ]
  },
  {
    name: 'Brazilian Portuguese Basics',
    code: 'PORT-102',
    description: 'Focus on Brazilian Portuguese with cultural context and practical communication skills.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Portuguese',
    isCompulsory: false,
    icon: '🇧🇷',
    topics: [
      { title: 'Brazilian Pronunciation', description: 'Brazilian accent and intonation', order: 1 },
      { title: 'Brazilian Culture', description: 'Customs, music, and traditions', order: 2 },
      { title: 'Colloquial Expressions', description: 'Informal Brazilian Portuguese', order: 3 },
      { title: 'Travel in Brazil', description: 'Navigating Brazilian cities', order: 4 },
      { title: 'Brazilian Media', description: 'Music, telenovelas, and news', order: 5 }
    ]
  },

  // ASIAN LANGUAGES

  // 1. Chinese (Mandarin)
  {
    name: 'Mandarin for Beginners',
    code: 'CHIN-101',
    description: 'Introduction to Mandarin Chinese including tones, pinyin, and basic characters.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Chinese (Mandarin)',
    isCompulsory: false,
    icon: '🇨🇳',
    topics: [
      { title: 'Introduction to Mandarin', description: 'Overview of Chinese language and writing system', order: 1 },
      { title: 'Pinyin & Tones', description: 'Romanization and four tones', order: 2 },
      { title: 'Basic Greetings', description: 'Nǐ hǎo and simple phrases', order: 3 },
      { title: 'Numbers & Time', description: 'Counting and telling time', order: 4 },
      { title: 'Simple Characters', description: 'Introduction to Chinese characters', order: 5 }
    ]
  },
  {
    name: 'Pinyin & Pronunciation',
    code: 'CHIN-102',
    description: 'Mastering Mandarin pronunciation through pinyin system and tone practice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Chinese (Mandarin)',
    isCompulsory: false,
    icon: '🇨🇳',
    topics: [
      { title: 'Pinyin System', description: 'Complete pinyin chart and rules', order: 1 },
      { title: 'Tone Practice', description: 'Distinguishing and producing four tones', order: 2 },
      { title: 'Tone Combinations', description: 'Two-syllable and three-syllable tone patterns', order: 3 },
      { title: 'Common Mistakes', description: 'Avoiding pronunciation errors', order: 4 },
      { title: 'Listening Practice', description: 'Developing listening comprehension', order: 5 }
    ]
  },
  {
    name: 'Chinese Characters & Writing',
    code: 'CHIN-201',
    description: 'Learning to read and write Chinese characters including stroke order and radicals.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Chinese (Mandarin)',
    isCompulsory: false,
    icon: '🇨🇳',
    topics: [
      { title: 'Character Structure', description: 'Radicals and character components', order: 1 },
      { title: 'Stroke Order', description: 'Rules for writing characters correctly', order: 2 },
      { title: 'Common Radicals', description: 'Most frequent radicals and their meanings', order: 3 },
      { title: 'Character Recognition', description: 'Reading simplified characters', order: 4 },
      { title: 'Writing Practice', description: 'Handwriting and calligraphy basics', order: 5 }
    ]
  },

  // 2. Japanese
  {
    name: 'Japanese Basics (Hiragana, Katakana)',
    code: 'JAPN-101',
    description: 'Introduction to Japanese language focusing on hiragana and katakana writing systems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Japanese',
    isCompulsory: false,
    icon: '🇯🇵',
    topics: [
      { title: 'Japanese Writing Systems', description: 'Overview of hiragana, katakana, and kanji', order: 1 },
      { title: 'Hiragana', description: 'Learning all hiragana characters', order: 2 },
      { title: 'Katakana', description: 'Learning all katakana characters', order: 3 },
      { title: 'Basic Greetings', description: 'Konnichiwa, arigatou, and polite expressions', order: 4 },
      { title: 'Simple Sentences', description: 'Basic sentence structure and particles', order: 5 }
    ]
  },
  {
    name: 'Beginner Kanji',
    code: 'JAPN-201',
    description: 'Introduction to kanji characters including common radicals and basic characters.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Japanese',
    isCompulsory: false,
    icon: '🇯🇵',
    topics: [
      { title: 'What is Kanji?', description: 'History and use of kanji in Japanese', order: 1 },
      { title: 'Basic Kanji', description: 'First 100 essential kanji', order: 2 },
      { title: 'Kanji Radicals', description: 'Common radicals and their meanings', order: 3 },
      { title: 'Readings', description: 'On-yomi and kun-yomi readings', order: 4 },
      { title: 'Kanji Compounds', description: 'Two-character kanji words', order: 5 }
    ]
  },
  {
    name: 'Japanese Conversational Skills',
    code: 'JAPN-202',
    description: 'Practical Japanese conversation for everyday situations and cultural contexts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Japanese',
    isCompulsory: false,
    icon: '🇯🇵',
    topics: [
      { title: 'Polite vs. Casual Speech', description: 'Formal and informal Japanese', order: 1 },
      { title: 'Daily Conversations', description: 'Shopping, dining, and asking directions', order: 2 },
      { title: 'Japanese Culture', description: 'Customs, etiquette, and traditions', order: 3 },
      { title: 'Travel Japanese', description: 'Navigating Japan as a visitor', order: 4 },
      { title: 'Japanese Media', description: 'Anime, manga, and pop culture', order: 5 }
    ]
  },

  // 3. Korean
  {
    name: 'Korean Alphabet (Hangul)',
    code: 'KOR-101',
    description: 'Learning the Korean writing system (Hangul) and basic pronunciation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Korean',
    isCompulsory: false,
    icon: '🇰🇷',
    topics: [
      { title: 'Introduction to Hangul', description: 'History and structure of Korean alphabet', order: 1 },
      { title: 'Consonants', description: 'Basic and double consonants', order: 2 },
      { title: 'Vowels', description: 'Simple and compound vowels', order: 3 },
      { title: 'Syllable Blocks', description: 'Combining letters into syllables', order: 4 },
      { title: 'Reading Practice', description: 'Reading Korean words and sentences', order: 5 }
    ]
  },
  {
    name: 'Everyday Korean Conversation',
    code: 'KOR-102',
    description: 'Practical Korean for daily communication and social interactions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Korean',
    isCompulsory: false,
    icon: '🇰🇷',
    topics: [
      { title: 'Basic Greetings', description: 'Annyeonghaseyo and introductions', order: 1 },
      { title: 'Numbers & Time', description: 'Native and Sino-Korean numbers', order: 2 },
      { title: 'Shopping & Dining', description: 'Ordering food and making purchases', order: 3 },
      { title: 'Asking Questions', description: 'Question words and sentence endings', order: 4 },
      { title: 'Korean Culture', description: 'Customs, K-pop, and Korean dramas', order: 5 }
    ]
  },
  {
    name: 'Korean Grammar Essentials',
    code: 'KOR-201',
    description: 'Fundamental Korean grammar structures and sentence patterns.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Korean',
    isCompulsory: false,
    icon: '🇰🇷',
    topics: [
      { title: 'Sentence Structure', description: 'Subject-Object-Verb word order', order: 1 },
      { title: 'Particles', description: 'Subject, object, and topic markers', order: 2 },
      { title: 'Verb Conjugation', description: 'Present, past, and future tenses', order: 3 },
      { title: 'Honorifics', description: 'Formal and informal speech levels', order: 4 },
      { title: 'Connecting Sentences', description: 'Conjunctions and sentence endings', order: 5 }
    ]
  },

  // 4. Hindi
  {
    name: 'Basic Hindi',
    code: 'HIND-101',
    description: 'Introduction to Hindi language including Devanagari script and basic grammar.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Hindi',
    isCompulsory: false,
    icon: '🇮🇳',
    topics: [
      { title: 'Devanagari Script', description: 'Learning Hindi alphabet and writing', order: 1 },
      { title: 'Basic Greetings', description: 'Namaste and common phrases', order: 2 },
      { title: 'Numbers & Time', description: 'Counting and telling time in Hindi', order: 3 },
      { title: 'Simple Sentences', description: 'Basic sentence structure', order: 4 },
      { title: 'Everyday Vocabulary', description: 'Family, food, and daily activities', order: 5 }
    ]
  },
  {
    name: 'Hindi Conversation & Vocabulary Building',
    code: 'HIND-201',
    description: 'Practical Hindi conversation skills and expanded vocabulary for everyday situations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Hindi',
    isCompulsory: false,
    icon: '🇮🇳',
    topics: [
      { title: 'Travel Hindi', description: 'Navigating India and asking directions', order: 1 },
      { title: 'Shopping & Markets', description: 'Bargaining and making purchases', order: 2 },
      { title: 'Indian Culture', description: 'Customs, festivals, and traditions', order: 3 },
      { title: 'Bollywood & Media', description: 'Understanding Hindi films and music', order: 4 },
      { title: 'Formal vs. Informal', description: 'Appropriate language use', order: 5 }
    ]
  },

  // MIDDLE EASTERN LANGUAGES

  // 1. Arabic
  {
    name: 'Modern Standard Arabic (Beginner)',
    code: 'ARAB-101',
    description: 'Introduction to Modern Standard Arabic including alphabet, pronunciation, and basic grammar.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Arabic',
    isCompulsory: false,
    icon: '🇸🇦',
    topics: [
      { title: 'Arabic Alphabet', description: 'Learning all 28 Arabic letters', order: 1 },
      { title: 'Pronunciation', description: 'Arabic sounds and proper articulation', order: 2 },
      { title: 'Basic Greetings', description: 'As-salamu alaykum and common phrases', order: 3 },
      { title: 'Numbers & Time', description: 'Counting and telling time', order: 4 },
      { title: 'Simple Sentences', description: 'Basic sentence structure', order: 5 }
    ]
  },
  {
    name: 'Arabic Script Writing',
    code: 'ARAB-102',
    description: 'Mastering Arabic script including letter forms, connections, and calligraphy basics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Arabic',
    isCompulsory: false,
    icon: '🇸🇦',
    topics: [
      { title: 'Letter Forms', description: 'Initial, medial, final, and isolated forms', order: 1 },
      { title: 'Connecting Letters', description: 'How letters connect in words', order: 2 },
      { title: 'Diacritical Marks', description: 'Vowel marks and pronunciation aids', order: 3 },
      { title: 'Writing Practice', description: 'Handwriting Arabic script', order: 4 },
      { title: 'Calligraphy Basics', description: 'Introduction to Arabic calligraphy', order: 5 }
    ]
  },
  {
    name: 'Conversational Arabic',
    code: 'ARAB-201',
    description: 'Practical Arabic conversation for everyday situations and cultural contexts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Arabic',
    isCompulsory: false,
    icon: '🇸🇦',
    topics: [
      { title: 'Daily Conversations', description: 'Shopping, dining, and social interactions', order: 1 },
      { title: 'Travel Arabic', description: 'Navigating Arabic-speaking countries', order: 2 },
      { title: 'Arab Culture', description: 'Customs, traditions, and etiquette', order: 3 },
      { title: 'Dialect Variations', description: 'Egyptian, Levantine, and Gulf Arabic', order: 4 },
      { title: 'Arabic Media', description: 'News, music, and literature', order: 5 }
    ]
  },

  // 2. Hebrew
  {
    name: 'Beginner Hebrew',
    code: 'HEBR-101',
    description: 'Introduction to Modern Hebrew including alphabet, pronunciation, and basic grammar.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Hebrew',
    isCompulsory: false,
    icon: '🇮🇱',
    topics: [
      { title: 'Hebrew Alphabet', description: 'Learning all 22 Hebrew letters', order: 1 },
      { title: 'Pronunciation', description: 'Hebrew sounds and vowel points', order: 2 },
      { title: 'Basic Greetings', description: 'Shalom and common phrases', order: 3 },
      { title: 'Numbers & Time', description: 'Counting and telling time in Hebrew', order: 4 },
      { title: 'Simple Sentences', description: 'Basic sentence structure', order: 5 }
    ]
  },
  {
    name: 'Hebrew Grammar & Vocabulary',
    code: 'HEBR-201',
    description: 'Intermediate Hebrew grammar and expanded vocabulary for everyday communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Hebrew',
    isCompulsory: false,
    icon: '🇮🇱',
    topics: [
      { title: 'Verb Conjugation', description: 'Present, past, and future tenses', order: 1 },
      { title: 'Gender & Number', description: 'Masculine, feminine, singular, and plural', order: 2 },
      { title: 'Prepositions', description: 'Common Hebrew prepositions', order: 3 },
      { title: 'Everyday Vocabulary', description: 'Family, work, and daily life', order: 4 },
      { title: 'Israeli Culture', description: 'Customs, holidays, and traditions', order: 5 }
    ]
  },

  // AFRICAN LANGUAGES

  // 1. Swahili
  {
    name: 'Introduction to Swahili',
    code: 'SWAH-101',
    description: 'Beginning Swahili language covering pronunciation, basic grammar, and essential vocabulary.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Swahili',
    isCompulsory: false,
    icon: '🇰🇪',
    topics: [
      { title: 'Swahili Pronunciation', description: 'Swahili sounds and pronunciation rules', order: 1 },
      { title: 'Basic Greetings', description: 'Jambo, habari, and introductions', order: 2 },
      { title: 'Noun Classes', description: 'Understanding Swahili noun classes', order: 3 },
      { title: 'Present Tense', description: 'Basic verb conjugation', order: 4 },
      { title: 'Everyday Vocabulary', description: 'Family, food, and numbers', order: 5 }
    ]
  },
  {
    name: 'Swahili for Everyday Use',
    code: 'SWAH-201',
    description: 'Practical Swahili for daily communication and cultural understanding.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Swahili',
    isCompulsory: false,
    icon: '🇰🇪',
    topics: [
      { title: 'Travel Swahili', description: 'Navigating East Africa', order: 1 },
      { title: 'Shopping & Markets', description: 'Bargaining and making purchases', order: 2 },
      { title: 'East African Culture', description: 'Customs and traditions', order: 3 },
      { title: 'Swahili Proverbs', description: 'Common sayings and wisdom', order: 4 },
      { title: 'Swahili Music', description: 'Taarab, bongo flava, and traditional music', order: 5 }
    ]
  },

  // 2. Zulu
  {
    name: 'Basic Zulu',
    code: 'ZULU-101',
    description: 'Introduction to isiZulu language including clicks, basic grammar, and essential phrases.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Zulu',
    isCompulsory: false,
    icon: '🇿🇦',
    topics: [
      { title: 'Zulu Pronunciation', description: 'Click consonants and Zulu sounds', order: 1 },
      { title: 'Basic Greetings', description: 'Sawubona and common phrases', order: 2 },
      { title: 'Noun Classes', description: 'Understanding Zulu noun classes', order: 3 },
      { title: 'Simple Sentences', description: 'Basic sentence structure', order: 4 },
      { title: 'Zulu Culture', description: 'Traditions and customs', order: 5 }
    ]
  },

  // 3. Amharic
  {
    name: 'Beginner Amharic',
    code: 'AMHA-101',
    description: 'Introduction to Amharic language including Ge\'ez script and basic grammar.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Amharic',
    isCompulsory: false,
    icon: '🇪🇹',
    topics: [
      { title: 'Ge\'ez Script', description: 'Learning Ethiopian alphabet', order: 1 },
      { title: 'Amharic Pronunciation', description: 'Sounds and pronunciation rules', order: 2 },
      { title: 'Basic Greetings', description: 'Selam and common phrases', order: 3 },
      { title: 'Numbers & Time', description: 'Counting and telling time', order: 4 },
      { title: 'Ethiopian Culture', description: 'Customs and traditions', order: 5 }
    ]
  },

  // 4. Shona (regional/optional)
  {
    name: 'Introductory Shona',
    code: 'SHON-101',
    description: 'Introduction to chiShona language, Zimbabwe\'s most widely spoken indigenous language.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Shona',
    isCompulsory: false,
    icon: '🇿🇼',
    topics: [
      { title: 'Shona Pronunciation', description: 'Shona sounds and tone patterns', order: 1 },
      { title: 'Basic Greetings', description: 'Mhoro, makadii, and introductions', order: 2 },
      { title: 'Noun Classes', description: 'Understanding Shona noun classes', order: 3 },
      { title: 'Present Tense', description: 'Basic verb conjugation', order: 4 },
      { title: 'Shona Culture', description: 'Traditions, proverbs, and customs', order: 5 }
    ]
  },

  // 5. IsiNdebele (regional/optional)
  {
    name: 'Basic Ndebele Conversation',
    code: 'NDEB-101',
    description: 'Introduction to isiNdebele language, one of Zimbabwe\'s official languages.',
    level: 'TERTIARY' as EducationLevel,
    category: 'IsiNdebele',
    isCompulsory: false,
    icon: '🇿🇼',
    topics: [
      { title: 'Ndebele Pronunciation', description: 'Click consonants and Ndebele sounds', order: 1 },
      { title: 'Basic Greetings', description: 'Salibonani and common phrases', order: 2 },
      { title: 'Noun Classes', description: 'Understanding Ndebele noun classes', order: 3 },
      { title: 'Simple Conversations', description: 'Everyday communication', order: 4 },
      { title: 'Ndebele Culture', description: 'Traditions and customs', order: 5 }
    ]
  }
];

async function seedForeignLanguages() {
  console.log('🌍 Starting Foreign Languages seeding...\n');

  for (const course of foreignLanguageCourses) {
    try {
      const { topics, ...courseData } = course;

      // Upsert subject
      const createdCourse = await prisma.subject.upsert({
        where: { code: course.code },
        update: courseData,
        create: courseData
      });

      console.log(`✅ ${course.name} (${course.category})`);

      // Create topics
      for (const topic of topics) {
        const existingTopic = await prisma.topic.findFirst({
          where: {
            subjectId: createdCourse.id,
            title: topic.title
          }
        });

        if (existingTopic) {
          await prisma.topic.update({
            where: { id: existingTopic.id },
            data: {
              description: topic.description,
              order: topic.order
            }
          });
        } else {
          await prisma.topic.create({
            data: {
              ...topic,
              subjectId: createdCourse.id
            }
          });
        }
      }

      console.log(`   └─ ${topics.length} topics added\n`);
    } catch (error) {
      console.error(`❌ Error seeding ${course.name}:`, error);
    }
  }

  console.log('✅ Foreign Languages seeding complete!\n');
  
  // Print summary
  const courseCount = foreignLanguageCourses.length;
  const topicCount = foreignLanguageCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`\n   Major World Languages:`);
  console.log(`   - Spanish (4 courses)`);
  console.log(`   - French (3 courses)`);
  console.log(`   - German (3 courses)`);
  console.log(`   - Italian (2 courses)`);
  console.log(`   - Portuguese (2 courses)`);
  console.log(`\n   Asian Languages:`);
  console.log(`   - Chinese/Mandarin (3 courses)`);
  console.log(`   - Japanese (3 courses)`);
  console.log(`   - Korean (3 courses)`);
  console.log(`   - Hindi (2 courses)`);
  console.log(`\n   Middle Eastern Languages:`);
  console.log(`   - Arabic (3 courses)`);
  console.log(`   - Hebrew (2 courses)`);
  console.log(`\n   African Languages:`);
  console.log(`   - Swahili (2 courses)`);
  console.log(`   - Zulu (1 course)`);
  console.log(`   - Amharic (1 course)`);
  console.log(`   - Shona (1 course)`);
  console.log(`   - IsiNdebele (1 course)`);
}

seedForeignLanguages()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
