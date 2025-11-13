import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const zimSecOLevelSubjects = [
  // Core / Common Subjects
  {
    name: 'English Language',
    code: 'ENG-O',
    description: 'Develop proficiency in English language skills including reading, writing, speaking, and listening. Essential for communication and further studies.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Core Subjects',
    isCompulsory: true,
    icon: '📚',
    topics: [
      { title: 'Comprehension', description: 'Reading and understanding texts', order: 1 },
      { title: 'Summary Writing', description: 'Condensing information effectively', order: 2 },
      { title: 'Composition Writing', description: 'Essay writing and creative writing', order: 3 },
      { title: 'Grammar and Usage', description: 'Parts of speech, tenses, and sentence structure', order: 4 },
      { title: 'Oral Communication', description: 'Speaking and listening skills', order: 5 }
    ]
  },
  {
    name: 'Mathematics',
    code: 'MATH-O',
    description: 'Master fundamental mathematical concepts including algebra, geometry, trigonometry, and statistics. Essential for problem-solving and logical thinking.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Core Subjects',
    isCompulsory: true,
    icon: '🔢',
    topics: [
      { title: 'Number Systems', description: 'Integers, fractions, decimals, and percentages', order: 1 },
      { title: 'Algebra', description: 'Equations, inequalities, and functions', order: 2 },
      { title: 'Geometry', description: 'Shapes, angles, and spatial reasoning', order: 3 },
      { title: 'Trigonometry', description: 'Sine, cosine, tangent, and applications', order: 4 },
      { title: 'Statistics and Probability', description: 'Data analysis and chance', order: 5 }
    ]
  },
  {
    name: 'Combined Science',
    code: 'SCI-O',
    description: 'Integrated study of Biology, Chemistry, and Physics covering fundamental scientific principles and practical applications.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Core Subjects',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Biology: Cell Structure', description: 'Plant and animal cells', order: 1 },
      { title: 'Chemistry: Atomic Structure', description: 'Elements, compounds, and mixtures', order: 2 },
      { title: 'Physics: Forces and Motion', description: 'Newton\'s laws and mechanics', order: 3 },
      { title: 'Biology: Human Body Systems', description: 'Digestive, respiratory, and circulatory systems', order: 4 },
      { title: 'Chemistry: Chemical Reactions', description: 'Acids, bases, and salts', order: 5 }
    ]
  },
  {
    name: 'Biology',
    code: 'BIO-O',
    description: 'Study of living organisms, their structure, function, growth, and interactions with the environment.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Core Subjects',
    isCompulsory: false,
    icon: '🧬',
    topics: [
      { title: 'Cell Biology', description: 'Cell structure and function', order: 1 },
      { title: 'Human Biology', description: 'Body systems and health', order: 2 },
      { title: 'Genetics', description: 'Inheritance and variation', order: 3 },
      { title: 'Ecology', description: 'Ecosystems and environmental interactions', order: 4 },
      { title: 'Plant Biology', description: 'Photosynthesis and plant structure', order: 5 }
    ]
  },
  {
    name: 'Chemistry',
    code: 'CHEM-O',
    description: 'Explore the composition, structure, properties, and changes of matter through chemical reactions and principles.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Core Subjects',
    isCompulsory: false,
    icon: '⚗️',
    topics: [
      { title: 'Atomic Structure', description: 'Atoms, elements, and periodic table', order: 1 },
      { title: 'Chemical Bonding', description: 'Ionic, covalent, and metallic bonds', order: 2 },
      { title: 'Acids, Bases, and Salts', description: 'pH and neutralization', order: 3 },
      { title: 'Organic Chemistry', description: 'Hydrocarbons and functional groups', order: 4 },
      { title: 'Chemical Reactions', description: 'Types of reactions and equations', order: 5 }
    ]
  },
  {
    name: 'Physics',
    code: 'PHY-O',
    description: 'Understand the fundamental principles governing matter, energy, motion, and forces in the physical world.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Core Subjects',
    isCompulsory: false,
    icon: '⚛️',
    topics: [
      { title: 'Forces and Motion', description: 'Newton\'s laws and kinematics', order: 1 },
      { title: 'Energy and Work', description: 'Forms of energy and conservation', order: 2 },
      { title: 'Electricity and Magnetism', description: 'Circuits and electromagnetic induction', order: 3 },
      { title: 'Waves and Sound', description: 'Wave properties and acoustics', order: 4 },
      { title: 'Light and Optics', description: 'Reflection, refraction, and lenses', order: 5 }
    ]
  },

  // Humanities & Social Sciences
  {
    name: 'Geography',
    code: 'GEO-O',
    description: 'Study physical and human geography including landforms, climate, population, and economic activities with focus on Zimbabwe and Africa.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Humanities & Social Sciences',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'Map Reading and Skills', description: 'Topographic maps and interpretation', order: 1 },
      { title: 'Physical Geography', description: 'Landforms, climate, and vegetation', order: 2 },
      { title: 'Human Geography', description: 'Population and settlement', order: 3 },
      { title: 'Economic Activities', description: 'Agriculture, mining, and industry', order: 4 },
      { title: 'Zimbabwe Geography', description: 'Physical and human features of Zimbabwe', order: 5 }
    ]
  },
  {
    name: 'History',
    code: 'HIST-O',
    description: 'Explore Zimbabwean, African, and world history including pre-colonial societies, colonialism, independence movements, and modern developments.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Humanities & Social Sciences',
    isCompulsory: false,
    icon: '📜',
    topics: [
      { title: 'Pre-Colonial Zimbabwe', description: 'Great Zimbabwe and early societies', order: 1 },
      { title: 'Colonialism in Africa', description: 'European colonization and resistance', order: 2 },
      { title: 'Zimbabwean Independence', description: 'Liberation struggle and independence', order: 3 },
      { title: 'World Wars', description: 'Causes, events, and consequences', order: 4 },
      { title: 'Post-Independence Zimbabwe', description: 'Modern political and economic development', order: 5 }
    ]
  },
  {
    name: 'Religious Studies',
    code: 'REL-O',
    description: 'Study major world religions, moral values, and ethical principles with emphasis on Christianity and African Traditional Religion.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Humanities & Social Sciences',
    isCompulsory: false,
    icon: '✝️',
    topics: [
      { title: 'Christianity', description: 'Biblical teachings and Christian practices', order: 1 },
      { title: 'African Traditional Religion', description: 'Indigenous beliefs and practices', order: 2 },
      { title: 'Islam', description: 'Islamic beliefs and practices', order: 3 },
      { title: 'Moral and Ethical Issues', description: 'Contemporary moral challenges', order: 4 },
      { title: 'Comparative Religion', description: 'Similarities and differences among religions', order: 5 }
    ]
  },
  {
    name: 'Shona',
    code: 'SHONA-O',
    description: 'Develop proficiency in Shona language including reading, writing, speaking, and understanding Shona literature and culture.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Humanities & Social Sciences',
    isCompulsory: false,
    icon: '🇿🇼',
    topics: [
      { title: 'Shona Grammar', description: 'Language structure and rules', order: 1 },
      { title: 'Shona Literature', description: 'Novels, poems, and short stories', order: 2 },
      { title: 'Composition Writing', description: 'Essay and creative writing in Shona', order: 3 },
      { title: 'Oral Literature', description: 'Proverbs, folktales, and oral traditions', order: 4 },
      { title: 'Shona Culture', description: 'Cultural practices and traditions', order: 5 }
    ]
  },
  {
    name: 'Ndebele',
    code: 'NDEB-O',
    description: 'Develop proficiency in Ndebele language including reading, writing, speaking, and understanding Ndebele literature and culture.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Humanities & Social Sciences',
    isCompulsory: false,
    icon: '🇿🇼',
    topics: [
      { title: 'Ndebele Grammar', description: 'Language structure and rules', order: 1 },
      { title: 'Ndebele Literature', description: 'Novels, poems, and short stories', order: 2 },
      { title: 'Composition Writing', description: 'Essay and creative writing in Ndebele', order: 3 },
      { title: 'Oral Literature', description: 'Proverbs, folktales, and oral traditions', order: 4 },
      { title: 'Ndebele Culture', description: 'Cultural practices and traditions', order: 5 }
    ]
  },
  {
    name: 'Family and Religious Studies',
    code: 'FRS-O',
    description: 'Study family dynamics, relationships, religious values, and their application to daily life and society.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Humanities & Social Sciences',
    isCompulsory: false,
    icon: '👨‍👩‍👧‍👦',
    topics: [
      { title: 'Family Structure', description: 'Types and roles in families', order: 1 },
      { title: 'Marriage and Relationships', description: 'Courtship, marriage, and family life', order: 2 },
      { title: 'Religious Values', description: 'Moral and ethical teachings', order: 3 },
      { title: 'Social Issues', description: 'Contemporary family challenges', order: 4 },
      { title: 'Community and Society', description: 'Social responsibilities', order: 5 }
    ]
  },
  {
    name: 'Sociology',
    code: 'SOC-O',
    description: 'Analyze human society, social relationships, institutions, and social change in Zimbabwe and globally.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Humanities & Social Sciences',
    isCompulsory: false,
    icon: '👥',
    topics: [
      { title: 'Introduction to Sociology', description: 'Basic concepts and theories', order: 1 },
      { title: 'Social Institutions', description: 'Family, education, and religion', order: 2 },
      { title: 'Social Stratification', description: 'Class, inequality, and mobility', order: 3 },
      { title: 'Socialization', description: 'How individuals learn social norms', order: 4 },
      { title: 'Social Change', description: 'Modernization and development', order: 5 }
    ]
  },

  // Commercial Subjects
  {
    name: 'Commerce',
    code: 'COM-O',
    description: 'Understand business operations, trade, banking, insurance, and commercial activities in local and international contexts.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Commercial Subjects',
    isCompulsory: false,
    icon: '💼',
    topics: [
      { title: 'Introduction to Commerce', description: 'Trade and business basics', order: 1 },
      { title: 'Banking and Finance', description: 'Financial institutions and services', order: 2 },
      { title: 'Insurance', description: 'Types and principles of insurance', order: 3 },
      { title: 'International Trade', description: 'Imports, exports, and trade barriers', order: 4 },
      { title: 'Consumer Protection', description: 'Rights and responsibilities', order: 5 }
    ]
  },
  {
    name: 'Accounting',
    code: 'ACC-O',
    description: 'Learn financial record-keeping, bookkeeping, financial statements, and basic accounting principles for business.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Commercial Subjects',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Introduction to Accounting', description: 'Accounting principles and concepts', order: 1 },
      { title: 'Double Entry Bookkeeping', description: 'Recording transactions', order: 2 },
      { title: 'Financial Statements', description: 'Balance sheet and income statement', order: 3 },
      { title: 'Cash and Bank Transactions', description: 'Cash books and bank reconciliation', order: 4 },
      { title: 'Final Accounts', description: 'Preparing year-end accounts', order: 5 }
    ]
  },
  {
    name: 'Business Studies',
    code: 'BUS-O',
    description: 'Explore business organization, management, marketing, and entrepreneurship with practical applications.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Commercial Subjects',
    isCompulsory: false,
    icon: '🏢',
    topics: [
      { title: 'Business Organization', description: 'Types of business entities', order: 1 },
      { title: 'Marketing', description: 'Marketing mix and strategies', order: 2 },
      { title: 'Human Resources', description: 'Recruitment and employee management', order: 3 },
      { title: 'Entrepreneurship', description: 'Starting and running a business', order: 4 },
      { title: 'Business Finance', description: 'Sources of finance and budgeting', order: 5 }
    ]
  },
  {
    name: 'Economics',
    code: 'ECON-O',
    description: 'Study economic principles, systems, and policies including microeconomics and macroeconomics with focus on Zimbabwe.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Commercial Subjects',
    isCompulsory: false,
    icon: '💰',
    topics: [
      { title: 'Basic Economic Concepts', description: 'Scarcity, choice, and opportunity cost', order: 1 },
      { title: 'Demand and Supply', description: 'Market forces and price determination', order: 2 },
      { title: 'Production', description: 'Factors of production and productivity', order: 3 },
      { title: 'Money and Banking', description: 'Functions of money and central banking', order: 4 },
      { title: 'National Economy', description: 'GDP, inflation, and unemployment', order: 5 }
    ]
  },

  // Technical & Practical Subjects
  {
    name: 'Agriculture',
    code: 'AGR-O',
    description: 'Learn agricultural science and practices including crop production, animal husbandry, and farm management.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '🌾',
    topics: [
      { title: 'Crop Production', description: 'Growing and managing crops', order: 1 },
      { title: 'Animal Husbandry', description: 'Livestock management', order: 2 },
      { title: 'Soil Science', description: 'Soil types and fertility', order: 3 },
      { title: 'Farm Management', description: 'Planning and economics', order: 4 },
      { title: 'Agricultural Technology', description: 'Modern farming methods', order: 5 }
    ]
  },
  {
    name: 'Building Studies',
    code: 'BUILD-O',
    description: 'Study construction principles, building materials, techniques, and architectural drawing.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '🏗️',
    topics: [
      { title: 'Building Materials', description: 'Types and properties of materials', order: 1 },
      { title: 'Construction Techniques', description: 'Building methods and processes', order: 2 },
      { title: 'Architectural Drawing', description: 'Plans and elevations', order: 3 },
      { title: 'Building Services', description: 'Plumbing and electrical systems', order: 4 },
      { title: 'Safety and Regulations', description: 'Building codes and safety', order: 5 }
    ]
  },
  {
    name: 'Woodwork',
    code: 'WOOD-O',
    description: 'Develop practical skills in woodworking including design, construction, and finishing of wooden items.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '🪚',
    topics: [
      { title: 'Wood Types and Properties', description: 'Hardwoods and softwoods', order: 1 },
      { title: 'Tools and Equipment', description: 'Hand and power tools', order: 2 },
      { title: 'Joints and Fastenings', description: 'Woodworking joints', order: 3 },
      { title: 'Design and Planning', description: 'Project design and planning', order: 4 },
      { title: 'Finishing Techniques', description: 'Sanding, staining, and varnishing', order: 5 }
    ]
  },
  {
    name: 'Metalwork',
    code: 'METAL-O',
    description: 'Learn metalworking techniques including fabrication, welding, and metal finishing.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '🔧',
    topics: [
      { title: 'Metals and Alloys', description: 'Types and properties of metals', order: 1 },
      { title: 'Metal Fabrication', description: 'Cutting, bending, and shaping', order: 2 },
      { title: 'Welding Techniques', description: 'Joining metal pieces', order: 3 },
      { title: 'Metal Finishing', description: 'Polishing and coating', order: 4 },
      { title: 'Safety in Metalwork', description: 'Workshop safety practices', order: 5 }
    ]
  },
  {
    name: 'Technical Graphics',
    code: 'TECH-O',
    description: 'Master technical drawing, geometric construction, and engineering graphics for design and communication.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '📐',
    topics: [
      { title: 'Drawing Instruments', description: 'Tools and equipment', order: 1 },
      { title: 'Geometric Construction', description: 'Lines, angles, and shapes', order: 2 },
      { title: 'Orthographic Projection', description: 'Multi-view drawings', order: 3 },
      { title: 'Isometric Drawing', description: '3D representation', order: 4 },
      { title: 'Working Drawings', description: 'Technical specifications', order: 5 }
    ]
  },
  {
    name: 'Food and Nutrition',
    code: 'FOOD-O',
    description: 'Study nutrition science, food preparation, cooking techniques, and dietary planning for health.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '🍳',
    topics: [
      { title: 'Nutrition Basics', description: 'Nutrients and their functions', order: 1 },
      { title: 'Food Groups', description: 'Balanced diet and meal planning', order: 2 },
      { title: 'Food Preparation', description: 'Cooking methods and techniques', order: 3 },
      { title: 'Food Safety and Hygiene', description: 'Safe food handling', order: 4 },
      { title: 'Special Diets', description: 'Dietary requirements and restrictions', order: 5 }
    ]
  },
  {
    name: 'Fashion and Fabrics',
    code: 'FASH-O',
    description: 'Learn textile science, garment construction, fashion design, and clothing care.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '👗',
    topics: [
      { title: 'Textile Science', description: 'Fabric types and properties', order: 1 },
      { title: 'Sewing Techniques', description: 'Hand and machine sewing', order: 2 },
      { title: 'Pattern Making', description: 'Creating and using patterns', order: 3 },
      { title: 'Garment Construction', description: 'Making clothing items', order: 4 },
      { title: 'Fashion Design', description: 'Design principles and trends', order: 5 }
    ]
  },
  {
    name: 'Computer Studies',
    code: 'COMP-O',
    description: 'Develop computer literacy including hardware, software, programming basics, and digital applications.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '💻',
    topics: [
      { title: 'Computer Hardware', description: 'Components and peripherals', order: 1 },
      { title: 'Operating Systems', description: 'Windows and file management', order: 2 },
      { title: 'Word Processing', description: 'Microsoft Word and documents', order: 3 },
      { title: 'Spreadsheets', description: 'Microsoft Excel and data analysis', order: 4 },
      { title: 'Introduction to Programming', description: 'Basic coding concepts', order: 5 }
    ]
  },
  {
    name: 'Design and Technology',
    code: 'DT-O',
    description: 'Apply design thinking and problem-solving to create practical solutions using various materials and technologies.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Technical & Practical Subjects',
    isCompulsory: false,
    icon: '🎨',
    topics: [
      { title: 'Design Process', description: 'From concept to product', order: 1 },
      { title: 'Materials and Components', description: 'Selection and properties', order: 2 },
      { title: 'Manufacturing Techniques', description: 'Production methods', order: 3 },
      { title: 'Product Evaluation', description: 'Testing and improvement', order: 4 },
      { title: 'Technology and Society', description: 'Impact of technology', order: 5 }
    ]
  },

  // Arts & Creative Subjects
  {
    name: 'Art and Design',
    code: 'ART-O',
    description: 'Explore visual arts including drawing, painting, sculpture, and design principles with creative expression.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Arts & Creative Subjects',
    isCompulsory: false,
    icon: '🎨',
    topics: [
      { title: 'Drawing Techniques', description: 'Pencil, charcoal, and pen', order: 1 },
      { title: 'Painting', description: 'Watercolor, acrylic, and oil', order: 2 },
      { title: 'Design Principles', description: 'Elements and principles of design', order: 3 },
      { title: 'Sculpture and 3D Art', description: 'Modeling and carving', order: 4 },
      { title: 'Art History', description: 'African and world art movements', order: 5 }
    ]
  },
  {
    name: 'Music',
    code: 'MUS-O',
    description: 'Study music theory, performance, composition, and appreciation of various musical styles and traditions.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Arts & Creative Subjects',
    isCompulsory: false,
    icon: '🎵',
    topics: [
      { title: 'Music Theory', description: 'Notes, scales, and rhythm', order: 1 },
      { title: 'Musical Instruments', description: 'Traditional and modern instruments', order: 2 },
      { title: 'Music Performance', description: 'Singing and instrumental performance', order: 3 },
      { title: 'Music Composition', description: 'Creating original music', order: 4 },
      { title: 'Music Appreciation', description: 'Zimbabwean and world music', order: 5 }
    ]
  },
  {
    name: 'Theatre Arts',
    code: 'THEA-O',
    description: 'Develop performance skills, dramatic techniques, and understanding of theatre production and stagecraft.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Arts & Creative Subjects',
    isCompulsory: false,
    icon: '🎭',
    topics: [
      { title: 'Acting Techniques', description: 'Character development and performance', order: 1 },
      { title: 'Script Writing', description: 'Creating dramatic works', order: 2 },
      { title: 'Stage Management', description: 'Production and technical theatre', order: 3 },
      { title: 'Theatre History', description: 'African and world theatre traditions', order: 4 },
      { title: 'Performance Projects', description: 'Staging productions', order: 5 }
    ]
  },

  // Other Language Options
  {
    name: 'French',
    code: 'FRE-O',
    description: 'Learn French language skills including reading, writing, speaking, and understanding French culture.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Language Options',
    isCompulsory: false,
    icon: '🇫🇷',
    topics: [
      { title: 'French Grammar', description: 'Verb conjugations and sentence structure', order: 1 },
      { title: 'French Vocabulary', description: 'Common words and phrases', order: 2 },
      { title: 'Reading Comprehension', description: 'Understanding French texts', order: 3 },
      { title: 'French Conversation', description: 'Speaking and listening skills', order: 4 },
      { title: 'French Culture', description: 'Francophone world and customs', order: 5 }
    ]
  },
  {
    name: 'Portuguese',
    code: 'PORT-O',
    description: 'Develop proficiency in Portuguese language with emphasis on communication skills and Lusophone culture.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Language Options',
    isCompulsory: false,
    icon: '🇵🇹',
    topics: [
      { title: 'Portuguese Grammar', description: 'Language structure and rules', order: 1 },
      { title: 'Portuguese Vocabulary', description: 'Essential words and expressions', order: 2 },
      { title: 'Reading and Writing', description: 'Comprehension and composition', order: 3 },
      { title: 'Portuguese Conversation', description: 'Oral communication skills', order: 4 },
      { title: 'Lusophone Culture', description: 'Portuguese-speaking world', order: 5 }
    ]
  },
  {
    name: 'German',
    code: 'GER-O',
    description: 'Study German language including grammar, vocabulary, and communication skills with cultural context.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Language Options',
    isCompulsory: false,
    icon: '🇩🇪',
    topics: [
      { title: 'German Grammar', description: 'Cases, genders, and sentence structure', order: 1 },
      { title: 'German Vocabulary', description: 'Common words and phrases', order: 2 },
      { title: 'Reading Comprehension', description: 'Understanding German texts', order: 3 },
      { title: 'German Conversation', description: 'Speaking and listening practice', order: 4 },
      { title: 'German Culture', description: 'Customs and traditions', order: 5 }
    ]
  },
  {
    name: 'Chinese (Mandarin)',
    code: 'CHI-O',
    description: 'Learn Mandarin Chinese including characters, pronunciation, grammar, and Chinese culture.',
    level: 'ORDINARY_LEVEL' as EducationLevel,
    category: 'Language Options',
    isCompulsory: false,
    icon: '🇨🇳',
    topics: [
      { title: 'Chinese Characters', description: 'Reading and writing characters', order: 1 },
      { title: 'Pinyin and Pronunciation', description: 'Tones and sounds', order: 2 },
      { title: 'Chinese Grammar', description: 'Sentence patterns and structure', order: 3 },
      { title: 'Chinese Conversation', description: 'Speaking and listening skills', order: 4 },
      { title: 'Chinese Culture', description: 'Traditions and customs', order: 5 }
    ]
  }
];

async function seedZIMSECSubjects() {
  console.log('🌱 Starting ZIMSEC O Level subjects seeding...\n');

  for (const subjectData of zimSecOLevelSubjects) {
    const { topics, ...subject} = subjectData;

    try {
      // Create or update subject
      const createdSubject = await prisma.subject.upsert({
        where: { code: subject.code },
        update: subject,
        create: subject,
      });

      console.log(`✅ ${subject.name} (${subject.category})`);

      // Create topics for the subject
      for (const topic of topics) {
        const existingTopic = await prisma.topic.findFirst({
          where: {
            subjectId: createdSubject.id,
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
              subjectId: createdSubject.id
            }
          });
        }
      }

      console.log(`   └─ ${topics.length} topics added\n`);

    } catch (error) {
      console.error(`❌ Error seeding ${subject.name}:`, error);
    }
  }

  console.log('✅ ZIMSEC O Level subjects seeding complete!\n');
  
  // Print summary
  const subjectCount = await prisma.subject.count({ where: { level: 'ORDINARY_LEVEL' } });
  const topicCount = await prisma.topic.count({
    where: { subject: { level: 'ORDINARY_LEVEL' } }
  });

  console.log('📊 Summary:');
  console.log(`   Total Subjects: ${subjectCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`   Categories: 6`);
  console.log('   - Core Subjects (6)');
  console.log('   - Humanities & Social Sciences (7)');
  console.log('   - Commercial Subjects (4)');
  console.log('   - Technical & Practical Subjects (10)');
  console.log('   - Arts & Creative Subjects (3)');
  console.log('   - Language Options (4)');
}

seedZIMSECSubjects()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
