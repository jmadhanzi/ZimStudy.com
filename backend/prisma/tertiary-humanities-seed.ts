import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const tertiaryHumanitiesProgrammes = [
  // 1. Languages & Linguistics
  {
    name: 'English Language & Literature',
    code: 'ENG-T',
    description: 'Advanced study of English language, literary analysis, critical theory, and creative writing. Prepares students for careers in education, publishing, and communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '📚',
    topics: [
      { title: 'Literary Theory & Criticism', description: 'Major literary theories and critical approaches', order: 1 },
      { title: 'Shakespeare & Renaissance Literature', description: 'Study of Elizabethan and Jacobean drama and poetry', order: 2 },
      { title: 'African Literature', description: 'Contemporary and classical African literary works', order: 3 },
      { title: 'Creative Writing Workshop', description: 'Fiction, poetry, and non-fiction writing techniques', order: 4 },
      { title: 'Linguistics & Language Structure', description: 'Phonetics, syntax, semantics, and pragmatics', order: 5 }
    ]
  },
  {
    name: 'Shona Language & Literature',
    code: 'SHONA-T',
    description: 'In-depth study of Shona language, literature, culture, and linguistics. Focus on oral traditions, modern Shona writing, and language preservation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '🇿🇼',
    topics: [
      { title: 'Shona Oral Literature', description: 'Traditional folktales, proverbs, and oral poetry', order: 1 },
      { title: 'Modern Shona Literature', description: 'Contemporary Shona novels, drama, and poetry', order: 2 },
      { title: 'Shona Linguistics', description: 'Phonology, morphology, and syntax of Shona', order: 3 },
      { title: 'Shona Culture & Society', description: 'Cultural practices, beliefs, and social structures', order: 4 },
      { title: 'Language Teaching Methods', description: 'Pedagogy for teaching Shona as first and second language', order: 5 }
    ]
  },
  {
    name: 'Ndebele Language & Literature',
    code: 'NDEB-T',
    description: 'Comprehensive study of Ndebele language, literary traditions, cultural heritage, and modern linguistic developments.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '🇿🇼',
    topics: [
      { title: 'Ndebele Oral Traditions', description: 'Praise poetry, storytelling, and cultural narratives', order: 1 },
      { title: 'Contemporary Ndebele Writing', description: 'Modern Ndebele literature and creative works', order: 2 },
      { title: 'Ndebele Language Structure', description: 'Grammar, phonetics, and linguistic features', order: 3 },
      { title: 'Ndebele Cultural Heritage', description: 'History, customs, and cultural identity', order: 4 },
      { title: 'Language Documentation', description: 'Preservation and documentation of Ndebele', order: 5 }
    ]
  },
  {
    name: 'African Languages',
    code: 'AFRLANG-T',
    description: 'Comparative study of African languages including Bantu languages, language families, and linguistic diversity across the continent.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'Bantu Language Family', description: 'Comparative Bantu linguistics and language relationships', order: 1 },
      { title: 'African Language Typology', description: 'Structural features of African languages', order: 2 },
      { title: 'Language & Identity', description: 'Role of language in African cultural identity', order: 3 },
      { title: 'Multilingualism in Africa', description: 'Language contact and code-switching', order: 4 },
      { title: 'Language Policy & Planning', description: 'Language policies in African nations', order: 5 }
    ]
  },
  {
    name: 'Linguistics',
    code: 'LING-T',
    description: 'Scientific study of language structure, acquisition, variation, and use. Covers phonetics, syntax, semantics, and sociolinguistics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '🗣️',
    topics: [
      { title: 'Phonetics & Phonology', description: 'Sound systems and pronunciation patterns', order: 1 },
      { title: 'Syntax & Morphology', description: 'Sentence structure and word formation', order: 2 },
      { title: 'Semantics & Pragmatics', description: 'Meaning and language use in context', order: 3 },
      { title: 'Sociolinguistics', description: 'Language variation and social factors', order: 4 },
      { title: 'Language Acquisition', description: 'First and second language learning processes', order: 5 }
    ]
  },
  {
    name: 'French Language & Literature',
    code: 'FRE-T',
    description: 'Advanced French language proficiency, Francophone literature, and French cultural studies. Prepares students for international communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '🇫🇷',
    topics: [
      { title: 'Advanced French Grammar', description: 'Complex grammatical structures and usage', order: 1 },
      { title: 'French Literature', description: 'Classic and contemporary French literary works', order: 2 },
      { title: 'Francophone African Literature', description: 'Literature from French-speaking Africa', order: 3 },
      { title: 'French Conversation & Composition', description: 'Advanced speaking and writing skills', order: 4 },
      { title: 'French Culture & Civilization', description: 'History, society, and cultural practices', order: 5 }
    ]
  },
  {
    name: 'Portuguese Language & Literature',
    code: 'PORT-T',
    description: 'Portuguese language studies with focus on Lusophone African literature and culture, particularly relevant for regional communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '🇵🇹',
    topics: [
      { title: 'Portuguese Language Skills', description: 'Grammar, vocabulary, and communication', order: 1 },
      { title: 'Lusophone African Literature', description: 'Literature from Mozambique, Angola, and other regions', order: 2 },
      { title: 'Brazilian Portuguese', description: 'Brazilian variant and cultural context', order: 3 },
      { title: 'Portuguese for Business', description: 'Commercial and professional communication', order: 4 },
      { title: 'Lusophone Culture', description: 'Cultural practices in Portuguese-speaking regions', order: 5 }
    ]
  },
  {
    name: 'Chinese (Mandarin) Studies',
    code: 'CHI-T',
    description: 'Mandarin Chinese language, Chinese culture, and China-Africa relations. Increasingly important for business and diplomacy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '🇨🇳',
    topics: [
      { title: 'Mandarin Language Proficiency', description: 'Speaking, listening, reading, and writing skills', order: 1 },
      { title: 'Chinese Characters', description: 'Character recognition and writing systems', order: 2 },
      { title: 'Chinese Culture & Society', description: 'History, traditions, and modern China', order: 3 },
      { title: 'Business Chinese', description: 'Commercial vocabulary and professional communication', order: 4 },
      { title: 'China-Africa Relations', description: 'Economic, political, and cultural ties', order: 5 }
    ]
  },
  {
    name: 'Communication & Applied Language Studies',
    code: 'COMM-T',
    description: 'Practical application of language skills in professional contexts including business communication, public relations, and organizational communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '💬',
    topics: [
      { title: 'Professional Communication', description: 'Business writing and corporate communication', order: 1 },
      { title: 'Public Relations', description: 'PR strategies and media relations', order: 2 },
      { title: 'Intercultural Communication', description: 'Cross-cultural communication competence', order: 3 },
      { title: 'Digital Communication', description: 'Online communication and social media', order: 4 },
      { title: 'Organizational Communication', description: 'Internal and external organizational messaging', order: 5 }
    ]
  },
  {
    name: 'Translation & Interpretation Studies',
    code: 'TRANS-T',
    description: 'Professional translation and interpretation skills for multiple languages. Essential for international organizations and government.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Languages & Linguistics',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'Translation Theory & Practice', description: 'Principles and techniques of translation', order: 1 },
      { title: 'Consecutive Interpretation', description: 'Note-taking and sequential interpretation', order: 2 },
      { title: 'Simultaneous Interpretation', description: 'Real-time interpretation skills', order: 3 },
      { title: 'Legal & Technical Translation', description: 'Specialized translation fields', order: 4 },
      { title: 'Computer-Assisted Translation', description: 'Translation technology and tools', order: 5 }
    ]
  },

  // 2. Social Sciences & Human Behaviour
  {
    name: 'Sociology',
    code: 'SOC-T',
    description: 'Study of human society, social institutions, relationships, and social change. Examines social structures, inequality, and development.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Sciences & Human Behaviour',
    isCompulsory: false,
    icon: '👥',
    topics: [
      { title: 'Classical Sociological Theory', description: 'Marx, Weber, Durkheim, and foundational theories', order: 1 },
      { title: 'Contemporary Social Theory', description: 'Modern sociological perspectives', order: 2 },
      { title: 'Social Stratification', description: 'Class, race, gender, and inequality', order: 3 },
      { title: 'Urban & Rural Sociology', description: 'Community structures and development', order: 4 },
      { title: 'Research Methods', description: 'Quantitative and qualitative research techniques', order: 5 }
    ]
  },
  {
    name: 'Anthropology',
    code: 'ANTH-T',
    description: 'Study of human cultures, societies, and biological evolution. Includes cultural anthropology, archaeology, and physical anthropology.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Sciences & Human Behaviour',
    isCompulsory: false,
    icon: '🗿',
    topics: [
      { title: 'Cultural Anthropology', description: 'Human cultures and cultural diversity', order: 1 },
      { title: 'Social Anthropology', description: 'Social structures and kinship systems', order: 2 },
      { title: 'Ethnographic Methods', description: 'Fieldwork and participant observation', order: 3 },
      { title: 'African Anthropology', description: 'Cultures and societies in Africa', order: 4 },
      { title: 'Applied Anthropology', description: 'Practical applications in development', order: 5 }
    ]
  },
  {
    name: 'Social Work',
    code: 'SW-T',
    description: 'Professional preparation for social work practice including community development, counseling, and social welfare administration.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Sciences & Human Behaviour',
    isCompulsory: false,
    icon: '🤝',
    topics: [
      { title: 'Social Work Theory', description: 'Theoretical foundations of social work practice', order: 1 },
      { title: 'Community Development', description: 'Participatory development and empowerment', order: 2 },
      { title: 'Counseling Skills', description: 'Individual and group counseling techniques', order: 3 },
      { title: 'Child Protection', description: 'Child welfare and protection systems', order: 4 },
      { title: 'Social Policy & Administration', description: 'Social welfare policies and programs', order: 5 }
    ]
  },
  {
    name: 'Psychology',
    code: 'PSY-T',
    description: 'Scientific study of human behavior, mental processes, and psychological development. Covers clinical, developmental, and social psychology.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Sciences & Human Behaviour',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'Introduction to Psychology', description: 'Foundations of psychological science', order: 1 },
      { title: 'Developmental Psychology', description: 'Human development across the lifespan', order: 2 },
      { title: 'Abnormal Psychology', description: 'Psychological disorders and treatments', order: 3 },
      { title: 'Social Psychology', description: 'Social influence and group behavior', order: 4 },
      { title: 'Research Methods in Psychology', description: 'Experimental design and statistical analysis', order: 5 }
    ]
  },
  {
    name: 'Development Studies',
    code: 'DEV-T',
    description: 'Interdisciplinary study of economic, social, and political development with focus on sustainable development and poverty reduction.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Sciences & Human Behaviour',
    isCompulsory: false,
    icon: '📈',
    topics: [
      { title: 'Development Theory', description: 'Theories of economic and social development', order: 1 },
      { title: 'Sustainable Development', description: 'Environmental and social sustainability', order: 2 },
      { title: 'Rural Development', description: 'Agricultural and rural transformation', order: 3 },
      { title: 'Project Planning & Management', description: 'Development project design and implementation', order: 4 },
      { title: 'Monitoring & Evaluation', description: 'Assessment of development interventions', order: 5 }
    ]
  },
  {
    name: 'Gender Studies',
    code: 'GEND-T',
    description: 'Critical analysis of gender, sexuality, and power relations. Examines gender equality, women\'s rights, and social justice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Sciences & Human Behaviour',
    isCompulsory: false,
    icon: '⚧️',
    topics: [
      { title: 'Gender Theory', description: 'Feminist theory and gender analysis', order: 1 },
      { title: 'Women & Development', description: 'Gender and development approaches', order: 2 },
      { title: 'Gender-Based Violence', description: 'Prevention and response to GBV', order: 3 },
      { title: 'Gender & Politics', description: 'Women in political leadership', order: 4 },
      { title: 'Masculinity Studies', description: 'Construction of masculinity and men\'s roles', order: 5 }
    ]
  },
  {
    name: 'Peace, Conflict & Governance',
    code: 'PCG-T',
    description: 'Study of conflict resolution, peacebuilding, and democratic governance. Relevant for post-conflict societies and development.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Sciences & Human Behaviour',
    isCompulsory: false,
    icon: '🕊️',
    topics: [
      { title: 'Conflict Analysis', description: 'Understanding causes and dynamics of conflict', order: 1 },
      { title: 'Peacebuilding & Reconciliation', description: 'Post-conflict reconstruction and healing', order: 2 },
      { title: 'Mediation & Negotiation', description: 'Conflict resolution techniques', order: 3 },
      { title: 'Governance & Democracy', description: 'Democratic institutions and good governance', order: 4 },
      { title: 'Transitional Justice', description: 'Justice mechanisms in post-conflict settings', order: 5 }
    ]
  },
  {
    name: 'International Relations',
    code: 'IR-T',
    description: 'Study of global politics, diplomacy, and international organizations. Covers foreign policy, international law, and global governance.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Sciences & Human Behaviour',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'International Relations Theory', description: 'Realism, liberalism, and constructivism', order: 1 },
      { title: 'African International Relations', description: 'Africa in global politics', order: 2 },
      { title: 'International Organizations', description: 'UN, AU, and regional bodies', order: 3 },
      { title: 'Diplomacy & Foreign Policy', description: 'Diplomatic practice and strategy', order: 4 },
      { title: 'Global Security', description: 'Security challenges and responses', order: 5 }
    ]
  },

  // 3. History, Heritage & Culture
  {
    name: 'History',
    code: 'HIST-T',
    description: 'Advanced study of historical events, processes, and interpretations with focus on African history, Zimbabwe, and global perspectives.',
    level: 'TERTIARY' as EducationLevel,
    category: 'History, Heritage & Culture',
    isCompulsory: false,
    icon: '📜',
    topics: [
      { title: 'Pre-Colonial African History', description: 'African kingdoms, societies, and civilizations', order: 1 },
      { title: 'Colonial History', description: 'European colonialism and African resistance', order: 2 },
      { title: 'Zimbabwean History', description: 'From Great Zimbabwe to independence', order: 3 },
      { title: 'Historiography', description: 'Historical methods and interpretation', order: 4 },
      { title: 'Contemporary African History', description: 'Post-independence Africa', order: 5 }
    ]
  },
  {
    name: 'Archaeology',
    code: 'ARCH-T',
    description: 'Study of human past through material remains. Includes archaeological methods, African prehistory, and heritage management.',
    level: 'TERTIARY' as EducationLevel,
    category: 'History, Heritage & Culture',
    isCompulsory: false,
    icon: '🏺',
    topics: [
      { title: 'Archaeological Methods', description: 'Excavation, survey, and dating techniques', order: 1 },
      { title: 'African Prehistory', description: 'Stone Age to Iron Age in Africa', order: 2 },
      { title: 'Great Zimbabwe Studies', description: 'Archaeology of Great Zimbabwe', order: 3 },
      { title: 'Rock Art', description: 'San rock paintings and engravings', order: 4 },
      { title: 'Cultural Resource Management', description: 'Heritage site management', order: 5 }
    ]
  },
  {
    name: 'Heritage Studies',
    code: 'HER-T',
    description: 'Management and preservation of cultural and natural heritage. Covers UNESCO World Heritage Sites and heritage tourism.',
    level: 'TERTIARY' as EducationLevel,
    category: 'History, Heritage & Culture',
    isCompulsory: false,
    icon: '🏛️',
    topics: [
      { title: 'Heritage Theory & Practice', description: 'Concepts of heritage and conservation', order: 1 },
      { title: 'World Heritage Sites', description: 'UNESCO designation and management', order: 2 },
      { title: 'Intangible Cultural Heritage', description: 'Oral traditions and cultural practices', order: 3 },
      { title: 'Heritage Tourism', description: 'Cultural tourism development', order: 4 },
      { title: 'Community Heritage', description: 'Participatory heritage management', order: 5 }
    ]
  },
  {
    name: 'Museum Studies',
    code: 'MUS-T',
    description: 'Museum management, curation, and exhibition design. Prepares students for careers in museums and cultural institutions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'History, Heritage & Culture',
    isCompulsory: false,
    icon: '🖼️',
    topics: [
      { title: 'Museum Management', description: 'Administration and operations', order: 1 },
      { title: 'Curation & Collections', description: 'Artifact management and care', order: 2 },
      { title: 'Exhibition Design', description: 'Creating engaging exhibitions', order: 3 },
      { title: 'Public Programming', description: 'Educational programs and outreach', order: 4 },
      { title: 'Digital Museums', description: 'Virtual exhibitions and online collections', order: 5 }
    ]
  },
  {
    name: 'Cultural & Media Studies',
    code: 'CMS-T',
    description: 'Critical analysis of culture, media, and popular culture. Examines representation, identity, and cultural production.',
    level: 'TERTIARY' as EducationLevel,
    category: 'History, Heritage & Culture',
    isCompulsory: false,
    icon: '📺',
    topics: [
      { title: 'Cultural Theory', description: 'Theories of culture and cultural analysis', order: 1 },
      { title: 'Media & Society', description: 'Media influence and social change', order: 2 },
      { title: 'Popular Culture', description: 'Music, film, and contemporary culture', order: 3 },
      { title: 'Digital Culture', description: 'Internet culture and social media', order: 4 },
      { title: 'African Cultural Production', description: 'African arts, music, and media', order: 5 }
    ]
  },
  {
    name: 'African Studies',
    code: 'AFRS-T',
    description: 'Interdisciplinary study of Africa including history, politics, culture, and development. Pan-African perspective.',
    level: 'TERTIARY' as EducationLevel,
    category: 'History, Heritage & Culture',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'African History & Politics', description: 'Political development and governance', order: 1 },
      { title: 'African Philosophy', description: 'Indigenous knowledge systems', order: 2 },
      { title: 'African Economies', description: 'Economic development and challenges', order: 3 },
      { title: 'Pan-Africanism', description: 'Unity movements and regional integration', order: 4 },
      { title: 'Contemporary African Issues', description: 'Current challenges and opportunities', order: 5 }
    ]
  },

  // 4. Religious & Philosophical Studies
  {
    name: 'Theology',
    code: 'THEO-T',
    description: 'Systematic study of Christian theology, biblical studies, and church history. Prepares students for ministry and religious leadership.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Religious & Philosophical Studies',
    isCompulsory: false,
    icon: '✝️',
    topics: [
      { title: 'Biblical Studies', description: 'Old and New Testament exegesis', order: 1 },
      { title: 'Systematic Theology', description: 'Christian doctrines and beliefs', order: 2 },
      { title: 'Church History', description: 'History of Christianity', order: 3 },
      { title: 'Pastoral Theology', description: 'Ministry and pastoral care', order: 4 },
      { title: 'African Theology', description: 'Contextual theology in Africa', order: 5 }
    ]
  },
  {
    name: 'Religious Studies',
    code: 'REL-T',
    description: 'Comparative study of world religions, religious practices, and religious thought. Includes African Traditional Religion.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Religious & Philosophical Studies',
    isCompulsory: false,
    icon: '🕉️',
    topics: [
      { title: 'World Religions', description: 'Christianity, Islam, Hinduism, Buddhism', order: 1 },
      { title: 'African Traditional Religion', description: 'Indigenous religious practices', order: 2 },
      { title: 'Religion & Society', description: 'Role of religion in social life', order: 3 },
      { title: 'Religious Ethics', description: 'Moral teachings across religions', order: 4 },
      { title: 'New Religious Movements', description: 'Contemporary religious trends', order: 5 }
    ]
  },
  {
    name: 'Philosophy',
    code: 'PHIL-T',
    description: 'Study of fundamental questions about existence, knowledge, ethics, and reality. Includes Western and African philosophy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Religious & Philosophical Studies',
    isCompulsory: false,
    icon: '🤔',
    topics: [
      { title: 'Ancient Philosophy', description: 'Greek and Roman philosophical thought', order: 1 },
      { title: 'Modern Philosophy', description: 'Descartes, Kant, and Enlightenment thinkers', order: 2 },
      { title: 'African Philosophy', description: 'Ubuntu and African philosophical traditions', order: 3 },
      { title: 'Ethics & Moral Philosophy', description: 'Theories of right and wrong', order: 4 },
      { title: 'Logic & Critical Thinking', description: 'Reasoning and argumentation', order: 5 }
    ]
  },
  {
    name: 'Ethics',
    code: 'ETH-T',
    description: 'Study of moral principles, ethical theories, and applied ethics in professional and social contexts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Religious & Philosophical Studies',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Ethical Theory', description: 'Consequentialism, deontology, virtue ethics', order: 1 },
      { title: 'Applied Ethics', description: 'Medical, business, and environmental ethics', order: 2 },
      { title: 'Professional Ethics', description: 'Ethics in various professions', order: 3 },
      { title: 'Social Justice', description: 'Fairness, equality, and human rights', order: 4 },
      { title: 'African Ethics', description: 'Ubuntu and communal values', order: 5 }
    ]
  },

  // 5. Media, Communication & Creative Arts
  {
    name: 'Journalism & Media Studies',
    code: 'JOUR-T',
    description: 'Professional journalism training including news writing, reporting, editing, and media law. Prepares students for media careers.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Media, Communication & Creative Arts',
    isCompulsory: false,
    icon: '📰',
    topics: [
      { title: 'News Writing & Reporting', description: 'Journalistic writing and interviewing', order: 1 },
      { title: 'Broadcast Journalism', description: 'Radio and television news', order: 2 },
      { title: 'Digital Journalism', description: 'Online news and multimedia storytelling', order: 3 },
      { title: 'Media Law & Ethics', description: 'Legal and ethical issues in journalism', order: 4 },
      { title: 'Investigative Journalism', description: 'In-depth reporting techniques', order: 5 }
    ]
  },
  {
    name: 'Communication Studies',
    code: 'COMMS-T',
    description: 'Theoretical and practical study of human communication in interpersonal, organizational, and mass media contexts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Media, Communication & Creative Arts',
    isCompulsory: false,
    icon: '📡',
    topics: [
      { title: 'Communication Theory', description: 'Models and theories of communication', order: 1 },
      { title: 'Mass Communication', description: 'Media effects and audience research', order: 2 },
      { title: 'Organizational Communication', description: 'Communication in organizations', order: 3 },
      { title: 'Interpersonal Communication', description: 'Face-to-face communication skills', order: 4 },
      { title: 'Strategic Communication', description: 'Campaign planning and execution', order: 5 }
    ]
  },
  {
    name: 'Film, Radio & Television Production',
    code: 'FILM-T',
    description: 'Practical training in media production including scriptwriting, directing, cinematography, and editing.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Media, Communication & Creative Arts',
    isCompulsory: false,
    icon: '🎬',
    topics: [
      { title: 'Scriptwriting', description: 'Writing for film, TV, and radio', order: 1 },
      { title: 'Film Production', description: 'Directing, cinematography, and editing', order: 2 },
      { title: 'Television Production', description: 'Studio and field production', order: 3 },
      { title: 'Radio Production', description: 'Audio production and broadcasting', order: 4 },
      { title: 'Documentary Filmmaking', description: 'Non-fiction storytelling', order: 5 }
    ]
  },
  {
    name: 'Creative Writing',
    code: 'CW-T',
    description: 'Development of creative writing skills in fiction, poetry, drama, and creative non-fiction. Workshop-based learning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Media, Communication & Creative Arts',
    isCompulsory: false,
    icon: '✍️',
    topics: [
      { title: 'Fiction Writing', description: 'Short stories and novel writing', order: 1 },
      { title: 'Poetry Workshop', description: 'Poetic forms and techniques', order: 2 },
      { title: 'Playwriting', description: 'Writing for theatre and performance', order: 3 },
      { title: 'Creative Non-Fiction', description: 'Memoir, essays, and literary journalism', order: 4 },
      { title: 'Publishing & Literary Markets', description: 'Getting published and literary industry', order: 5 }
    ]
  },
  {
    name: 'Music & Musicology',
    code: 'MUSIC-T',
    description: 'Study of music theory, history, performance, and ethnomusicology with focus on African music traditions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Media, Communication & Creative Arts',
    isCompulsory: false,
    icon: '🎵',
    topics: [
      { title: 'Music Theory', description: 'Harmony, counterpoint, and analysis', order: 1 },
      { title: 'African Music', description: 'Traditional and contemporary African music', order: 2 },
      { title: 'Music Performance', description: 'Instrumental and vocal performance', order: 3 },
      { title: 'Ethnomusicology', description: 'Cultural contexts of music', order: 4 },
      { title: 'Music Technology', description: 'Recording and production', order: 5 }
    ]
  },
  {
    name: 'Theatre Arts & Drama',
    code: 'THEA-T',
    description: 'Performance training, dramatic literature, and theatre production. Includes acting, directing, and stagecraft.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Media, Communication & Creative Arts',
    isCompulsory: false,
    icon: '🎭',
    topics: [
      { title: 'Acting Techniques', description: 'Performance methods and character development', order: 1 },
      { title: 'Directing', description: 'Theatre direction and production', order: 2 },
      { title: 'Dramatic Literature', description: 'World drama and playwriting', order: 3 },
      { title: 'African Theatre', description: 'Traditional and contemporary African drama', order: 4 },
      { title: 'Stagecraft & Design', description: 'Set design, lighting, and technical theatre', order: 5 }
    ]
  },
  {
    name: 'Fine Arts & Art Design',
    code: 'ART-T',
    description: 'Studio practice in visual arts including painting, sculpture, printmaking, and digital art. Art history and criticism.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Media, Communication & Creative Arts',
    isCompulsory: false,
    icon: '🎨',
    topics: [
      { title: 'Drawing & Painting', description: 'Traditional and contemporary techniques', order: 1 },
      { title: 'Sculpture', description: 'Three-dimensional art and installation', order: 2 },
      { title: 'Printmaking', description: 'Relief, intaglio, and screen printing', order: 3 },
      { title: 'Art History', description: 'African and world art history', order: 4 },
      { title: 'Digital Art & Design', description: 'Computer-based art and design', order: 5 }
    ]
  },

  // 6. Education (Humanities Specialisations)
  {
    name: 'Bachelor of Education - English',
    code: 'BED-ENG',
    description: 'Teacher education programme specializing in English language and literature teaching. Combines pedagogy with subject expertise.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education (Humanities)',
    isCompulsory: false,
    icon: '👨‍🏫',
    topics: [
      { title: 'English Language Teaching Methods', description: 'Pedagogy for teaching English', order: 1 },
      { title: 'Literature in the Classroom', description: 'Teaching literary texts', order: 2 },
      { title: 'Language Assessment', description: 'Testing and evaluation', order: 3 },
      { title: 'Curriculum Development', description: 'Designing English curricula', order: 4 },
      { title: 'Teaching Practice', description: 'Supervised classroom experience', order: 5 }
    ]
  },
  {
    name: 'Bachelor of Education - History',
    code: 'BED-HIST',
    description: 'Teacher education programme for history teaching. Combines historical knowledge with pedagogical skills.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education (Humanities)',
    isCompulsory: false,
    icon: '👨‍🏫',
    topics: [
      { title: 'History Teaching Methods', description: 'Pedagogy for teaching history', order: 1 },
      { title: 'Historical Thinking Skills', description: 'Developing critical historical analysis', order: 2 },
      { title: 'Using Primary Sources', description: 'Teaching with historical documents', order: 3 },
      { title: 'History Curriculum', description: 'Curriculum design and planning', order: 4 },
      { title: 'Teaching Practice', description: 'Classroom teaching experience', order: 5 }
    ]
  },
  {
    name: 'Bachelor of Education - Religious Studies',
    code: 'BED-REL',
    description: 'Teacher education for religious studies and religious education. Prepares teachers for diverse classrooms.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education (Humanities)',
    isCompulsory: false,
    icon: '👨‍🏫',
    topics: [
      { title: 'Religious Education Pedagogy', description: 'Teaching methods for religious studies', order: 1 },
      { title: 'Comparative Religion', description: 'Teaching multiple religious traditions', order: 2 },
      { title: 'Values Education', description: 'Moral and ethical teaching', order: 3 },
      { title: 'Interfaith Dialogue', description: 'Promoting religious tolerance', order: 4 },
      { title: 'Teaching Practice', description: 'Supervised teaching experience', order: 5 }
    ]
  },
  {
    name: 'Bachelor of Education - Geography',
    code: 'BED-GEO',
    description: 'Teacher education programme for geography teaching. Combines physical and human geography with pedagogy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education (Humanities)',
    isCompulsory: false,
    icon: '👨‍🏫',
    topics: [
      { title: 'Geography Teaching Methods', description: 'Pedagogy for geography education', order: 1 },
      { title: 'Fieldwork & Practical Geography', description: 'Outdoor learning and field studies', order: 2 },
      { title: 'Geographic Information Systems', description: 'Using GIS in teaching', order: 3 },
      { title: 'Environmental Education', description: 'Teaching sustainability', order: 4 },
      { title: 'Teaching Practice', description: 'Classroom teaching experience', order: 5 }
    ]
  },
  {
    name: 'Bachelor of Education - Indigenous Languages',
    code: 'BED-LANG',
    description: 'Teacher education for Shona, Ndebele, and other indigenous languages. Promotes mother-tongue education.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education (Humanities)',
    isCompulsory: false,
    icon: '👨‍🏫',
    topics: [
      { title: 'Indigenous Language Pedagogy', description: 'Teaching methods for African languages', order: 1 },
      { title: 'Mother-Tongue Education', description: 'First language instruction', order: 2 },
      { title: 'Bilingual Education', description: 'Teaching in multilingual contexts', order: 3 },
      { title: 'Language & Culture', description: 'Cultural context in language teaching', order: 4 },
      { title: 'Teaching Practice', description: 'Supervised classroom experience', order: 5 }
    ]
  },
  {
    name: 'Early Childhood Development (ECD)',
    code: 'ECD-T',
    description: 'Specialized training for early childhood education. Focuses on child development and age-appropriate pedagogy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education (Humanities)',
    isCompulsory: false,
    icon: '👶',
    topics: [
      { title: 'Child Development', description: 'Physical, cognitive, and social development', order: 1 },
      { title: 'Early Literacy', description: 'Teaching reading and writing to young children', order: 2 },
      { title: 'Play-Based Learning', description: 'Learning through play', order: 3 },
      { title: 'Parent & Community Engagement', description: 'Working with families', order: 4 },
      { title: 'ECD Curriculum', description: 'Designing early childhood programs', order: 5 }
    ]
  },
  {
    name: 'Special Needs Education (Humanities)',
    code: 'SNE-T',
    description: 'Teacher education for inclusive education and special needs. Prepares teachers to work with diverse learners.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education (Humanities)',
    isCompulsory: false,
    icon: '♿',
    topics: [
      { title: 'Inclusive Education', description: 'Principles of inclusion and diversity', order: 1 },
      { title: 'Learning Disabilities', description: 'Identifying and supporting learning challenges', order: 2 },
      { title: 'Differentiated Instruction', description: 'Adapting teaching for diverse needs', order: 3 },
      { title: 'Assistive Technology', description: 'Technology for special needs', order: 4 },
      { title: 'Behavior Management', description: 'Supporting positive behavior', order: 5 }
    ]
  }
];

async function seedTertiaryHumanitiesProgrammes() {
  console.log('🎓 Starting Tertiary Humanities Programmes seeding...\n');

  for (const programme of tertiaryHumanitiesProgrammes) {
    try {
      const { topics, ...programmeData } = programme;

      // Upsert subject
      const createdProgramme = await prisma.subject.upsert({
        where: { code: programme.code },
        update: programmeData,
        create: programmeData
      });

      console.log(`✅ ${programme.name} (${programme.category})`);

      // Create topics
      for (const topic of topics) {
        const existingTopic = await prisma.topic.findFirst({
          where: {
            subjectId: createdProgramme.id,
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
              subjectId: createdProgramme.id
            }
          });
        }
      }

      console.log(`   └─ ${topics.length} topics added\n`);
    } catch (error) {
      console.error(`❌ Error seeding ${programme.name}:`, error);
    }
  }

  console.log('✅ Tertiary Humanities Programmes seeding complete!\n');
  
  // Print summary
  const programmeCount = await prisma.subject.count({ where: { level: 'TERTIARY' } });
  const topicCount = await prisma.topic.count({
    where: { subject: { level: 'TERTIARY' } }
  });

  console.log('📊 Summary:');
  console.log(`   Total Programmes: ${programmeCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`   Categories: 6`);
  console.log(`   - Languages & Linguistics (10)`);
  console.log(`   - Social Sciences & Human Behaviour (8)`);
  console.log(`   - History, Heritage & Culture (6)`);
  console.log(`   - Religious & Philosophical Studies (4)`);
  console.log(`   - Media, Communication & Creative Arts (7)`);
  console.log(`   - Education (Humanities) (7)`);
}

seedTertiaryHumanitiesProgrammes()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
