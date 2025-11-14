import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const historyAdvancedHumanitiesCourses = [
  // WORLD HISTORY
  
  {
    name: 'Introduction to World History',
    code: 'HIST-101',
    description: 'Comprehensive overview of major events, civilizations, and developments in world history.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'What is History?', description: 'Understanding historical study and interpretation', order: 1 },
      { title: 'Early Human Societies', description: 'Hunter-gatherers and agricultural revolution', order: 2 },
      { title: 'Major Civilizations', description: 'Overview of world civilizations', order: 3 },
      { title: 'Global Connections', description: 'Trade routes and cultural exchange', order: 4 },
      { title: 'Modern Globalization', description: 'Contemporary world interconnections', order: 5 }
    ]
  },
  {
    name: 'Ancient Civilizations',
    code: 'HIST-102',
    description: 'Study of ancient civilizations including Mesopotamia, Egypt, Indus Valley, and China.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '🏛️',
    topics: [
      { title: 'Mesopotamia', description: 'Sumerians, Babylonians, and Assyrians', order: 1 },
      { title: 'Ancient Egypt', description: 'Pharaohs, pyramids, and Egyptian society', order: 2 },
      { title: 'Indus Valley Civilization', description: 'Harappa and Mohenjo-daro', order: 3 },
      { title: 'Ancient China', description: 'Shang and Zhou dynasties', order: 4 },
      { title: 'Ancient Americas', description: 'Olmec, Maya, and early American cultures', order: 5 }
    ]
  },
  {
    name: 'Medieval World History',
    code: 'HIST-201',
    description: 'Study of the medieval period across different regions and cultures.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '⚔️',
    topics: [
      { title: 'Medieval Europe', description: 'Feudalism, knights, and castles', order: 1 },
      { title: 'Byzantine Empire', description: 'Eastern Roman Empire continuation', order: 2 },
      { title: 'Islamic Golden Age', description: 'Advances in science, math, and culture', order: 3 },
      { title: 'Medieval Africa', description: 'Great Zimbabwe, Mali, and Songhai', order: 4 },
      { title: 'Medieval Asia', description: 'Tang and Song China, Mongol Empire', order: 5 }
    ]
  },
  {
    name: 'Early Modern World (1450-1750)',
    code: 'HIST-202',
    description: 'Exploration, colonization, and global transformations in the early modern period.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '🚢',
    topics: [
      { title: 'Age of Exploration', description: 'European voyages and discoveries', order: 1 },
      { title: 'Columbian Exchange', description: 'Global exchange of goods and ideas', order: 2 },
      { title: 'Renaissance', description: 'Cultural rebirth in Europe', order: 3 },
      { title: 'Reformation', description: 'Religious changes in Christianity', order: 4 },
      { title: 'Early Colonialism', description: 'European colonies in Americas and Asia', order: 5 }
    ]
  },
  {
    name: 'Modern World History (1750-Present)',
    code: 'HIST-301',
    description: 'Major developments from the Industrial Revolution to contemporary times.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '🏭',
    topics: [
      { title: 'Industrial Revolution', description: 'Technological and social changes', order: 1 },
      { title: 'Age of Imperialism', description: 'European colonization of Africa and Asia', order: 2 },
      { title: 'World Wars', description: 'WWI and WWII', order: 3 },
      { title: 'Cold War', description: 'US-Soviet rivalry and global tensions', order: 4 },
      { title: 'Contemporary World', description: 'Globalization and 21st century', order: 5 }
    ]
  },
  {
    name: 'Global Empires & Colonialism',
    code: 'HIST-302',
    description: 'Study of imperial expansion and colonial systems worldwide.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '👑',
    topics: [
      { title: 'Spanish Empire', description: 'Conquest of Americas', order: 1 },
      { title: 'British Empire', description: 'Global British colonial system', order: 2 },
      { title: 'French Colonialism', description: 'French territories in Africa and Asia', order: 3 },
      { title: 'Colonial Resistance', description: 'Anti-colonial movements', order: 4 },
      { title: 'Decolonization', description: 'End of colonial empires', order: 5 }
    ]
  },
  {
    name: 'History of Revolutions',
    code: 'HIST-303',
    description: 'Major political and social revolutions that transformed societies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '✊',
    topics: [
      { title: 'American Revolution', description: 'Independence from Britain', order: 1 },
      { title: 'French Revolution', description: 'Overthrow of monarchy', order: 2 },
      { title: 'Haitian Revolution', description: 'First successful slave revolt', order: 3 },
      { title: 'Russian Revolution', description: 'Bolshevik takeover', order: 4 },
      { title: 'Chinese Revolution', description: 'Communist revolution', order: 5 }
    ]
  },
  {
    name: 'World Wars I & II',
    code: 'HIST-304',
    description: 'Comprehensive study of the two World Wars and their global impact.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '💣',
    topics: [
      { title: 'Causes of WWI', description: 'Alliances, imperialism, and nationalism', order: 1 },
      { title: 'WWI Battles', description: 'Trench warfare and major campaigns', order: 2 },
      { title: 'Interwar Period', description: 'Treaty of Versailles and rise of fascism', order: 3 },
      { title: 'WWII in Europe', description: 'Nazi Germany and Allied response', order: 4 },
      { title: 'WWII in Pacific', description: 'Japan, Pearl Harbor, and atomic bombs', order: 5 }
    ]
  },
  {
    name: 'Post-Colonial World History',
    code: 'HIST-305',
    description: 'Development of newly independent nations after decolonization.',
    level: 'TERTIARY' as EducationLevel,
    category: 'World History',
    isCompulsory: false,
    icon: '🗽',
    topics: [
      { title: 'Decolonization Process', description: 'Independence movements', order: 1 },
      { title: 'New Nations', description: 'State-building challenges', order: 2 },
      { title: 'Cold War Influence', description: 'Superpower involvement', order: 3 },
      { title: 'Economic Development', description: 'Development strategies', order: 4 },
      { title: 'Contemporary Challenges', description: 'Modern post-colonial issues', order: 5 }
    ]
  },

  // AFRICAN HISTORY
  
  {
    name: 'Introduction to African History',
    code: 'AFRI-101',
    description: 'Comprehensive overview of African history from ancient times to present.',
    level: 'TERTIARY' as EducationLevel,
    category: 'African History',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'African Geography', description: 'Diverse landscapes and regions', order: 1 },
      { title: 'Early Human History', description: 'Origins of humanity in Africa', order: 2 },
      { title: 'Major Periods', description: 'Overview of African historical eras', order: 3 },
      { title: 'Cultural Diversity', description: 'Languages, religions, and traditions', order: 4 },
      { title: 'Contemporary Africa', description: 'Modern African nations', order: 5 }
    ]
  },
  {
    name: 'Pre-Colonial African Kingdoms',
    code: 'AFRI-201',
    description: 'Study of great African civilizations before European colonization.',
    level: 'TERTIARY' as EducationLevel,
    category: 'African History',
    isCompulsory: false,
    icon: '👑',
    topics: [
      { title: 'Great Zimbabwe', description: 'Stone city and Shona civilization', order: 1 },
      { title: 'Kingdom of Mali', description: 'Mansa Musa and trans-Saharan trade', order: 2 },
      { title: 'Kingdom of Kush', description: 'Nubian civilization', order: 3 },
      { title: 'Axum Empire', description: 'Ethiopian kingdom', order: 4 },
      { title: 'Songhai Empire', description: 'West African power', order: 5 }
    ]
  },
  {
    name: 'African Colonial History',
    code: 'AFRI-202',
    description: 'European colonization of Africa and its impacts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'African History',
    isCompulsory: false,
    icon: '🗺️',
    topics: [
      { title: 'Scramble for Africa', description: 'Berlin Conference and partition', order: 1 },
      { title: 'Colonial Rule', description: 'Administrative systems and exploitation', order: 2 },
      { title: 'African Resistance', description: 'Rebellions and resistance movements', order: 3 },
      { title: 'Colonial Economy', description: 'Resource extraction and labor', order: 4 },
      { title: 'Cultural Impact', description: 'Effects on African societies', order: 5 }
    ]
  },
  {
    name: 'Pan-Africanism',
    code: 'AFRI-301',
    description: 'Movement for African unity and liberation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'African History',
    isCompulsory: false,
    icon: '✊',
    topics: [
      { title: 'Origins of Pan-Africanism', description: 'Early thinkers and movements', order: 1 },
      { title: 'Key Leaders', description: 'Nkrumah, Nyerere, and others', order: 2 },
      { title: 'African Unity', description: 'OAU and African Union', order: 3 },
      { title: 'Liberation Movements', description: 'Anti-colonial struggles', order: 4 },
      { title: 'Contemporary Pan-Africanism', description: 'Modern unity efforts', order: 5 }
    ]
  },
  {
    name: 'Post-Independence African States',
    code: 'AFRI-302',
    description: 'Development of African nations after independence.',
    level: 'TERTIARY' as EducationLevel,
    category: 'African History',
    isCompulsory: false,
    icon: '🗳️',
    topics: [
      { title: 'Independence Movements', description: 'Path to self-rule', order: 1 },
      { title: 'Nation Building', description: 'Creating new states', order: 2 },
      { title: 'Political Challenges', description: 'Coups, conflicts, and democracy', order: 3 },
      { title: 'Economic Development', description: 'Development strategies', order: 4 },
      { title: 'Contemporary Issues', description: 'Modern African challenges', order: 5 }
    ]
  },
  {
    name: 'Southern African Liberation Movements',
    code: 'AFRI-303',
    description: 'Anti-colonial and anti-apartheid struggles in Southern Africa.',
    level: 'TERTIARY' as EducationLevel,
    category: 'African History',
    isCompulsory: false,
    icon: '✊',
    topics: [
      { title: 'Zimbabwe Liberation War', description: 'Chimurenga and independence', order: 1 },
      { title: 'South African Apartheid', description: 'Racial segregation system', order: 2 },
      { title: 'ANC and Mandela', description: 'Anti-apartheid movement', order: 3 },
      { title: 'Namibian Independence', description: 'Liberation from South Africa', order: 4 },
      { title: 'Regional Cooperation', description: 'SADC and regional unity', order: 5 }
    ]
  },
  {
    name: 'African Diaspora Studies',
    code: 'AFRI-304',
    description: 'African peoples and cultures outside the continent.',
    level: 'TERTIARY' as EducationLevel,
    category: 'African History',
    isCompulsory: false,
    icon: '🌎',
    topics: [
      { title: 'Transatlantic Slave Trade', description: 'Forced migration to Americas', order: 1 },
      { title: 'African Americans', description: 'Black history in United States', order: 2 },
      { title: 'Caribbean Africans', description: 'African cultures in Caribbean', order: 3 },
      { title: 'African Diaspora Culture', description: 'Music, art, and traditions', order: 4 },
      { title: 'Return Movements', description: 'Back-to-Africa movements', order: 5 }
    ]
  },

  // THEMATIC & SPECIALIZED HISTORY
  
  {
    name: 'Economic History',
    code: 'HIST-401',
    description: 'Study of economic systems and development throughout history.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Thematic History',
    isCompulsory: false,
    icon: '💰',
    topics: [
      { title: 'Pre-Industrial Economies', description: 'Agricultural and trade economies', order: 1 },
      { title: 'Industrial Revolution', description: 'Economic transformation', order: 2 },
      { title: 'Capitalism Development', description: 'Rise of market economies', order: 3 },
      { title: 'Great Depression', description: 'Economic crisis and recovery', order: 4 },
      { title: 'Global Economy', description: 'Modern economic systems', order: 5 }
    ]
  },
  {
    name: 'Social & Cultural History',
    code: 'HIST-402',
    description: 'History of everyday life, customs, and cultural practices.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Thematic History',
    isCompulsory: false,
    icon: '👥',
    topics: [
      { title: 'Daily Life', description: 'How people lived in different eras', order: 1 },
      { title: 'Family Structures', description: 'Evolution of family and kinship', order: 2 },
      { title: 'Popular Culture', description: 'Entertainment and leisure', order: 3 },
      { title: 'Social Movements', description: 'Collective action for change', order: 4 },
      { title: 'Cultural Exchange', description: 'Cross-cultural interactions', order: 5 }
    ]
  },
  {
    name: 'History of Slavery & Emancipation',
    code: 'HIST-403',
    description: 'Study of slavery systems and abolition movements.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Thematic History',
    isCompulsory: false,
    icon: '⛓️',
    topics: [
      { title: 'Ancient Slavery', description: 'Slavery in ancient civilizations', order: 1 },
      { title: 'Transatlantic Slave Trade', description: 'African enslavement in Americas', order: 2 },
      { title: 'Slave Resistance', description: 'Rebellions and escape', order: 3 },
      { title: 'Abolition Movements', description: 'Ending slavery', order: 4 },
      { title: 'Legacy of Slavery', description: 'Continuing impacts', order: 5 }
    ]
  },
  {
    name: 'Environmental History',
    code: 'HIST-404',
    description: 'Human interaction with the natural environment over time.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Thematic History',
    isCompulsory: false,
    icon: '🌱',
    topics: [
      { title: 'Human-Environment Relations', description: 'Historical ecological interactions', order: 1 },
      { title: 'Agricultural Revolution', description: 'Domestication and farming', order: 2 },
      { title: 'Industrial Impact', description: 'Environmental changes from industry', order: 3 },
      { title: 'Conservation Movements', description: 'Protecting nature', order: 4 },
      { title: 'Climate Change History', description: 'Historical climate patterns', order: 5 }
    ]
  },
  {
    name: "Women's History",
    code: 'HIST-405',
    description: 'History of women, gender roles, and feminist movements.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Thematic History',
    isCompulsory: false,
    icon: '👩',
    topics: [
      { title: 'Women in Ancient Societies', description: 'Gender roles in early civilizations', order: 1 },
      { title: 'Women in Medieval Times', description: 'Medieval women\'s lives', order: 2 },
      { title: 'Suffrage Movements', description: 'Fighting for voting rights', order: 3 },
      { title: 'Feminist Waves', description: 'First, second, and third wave feminism', order: 4 },
      { title: 'Contemporary Gender Issues', description: 'Modern women\'s rights', order: 5 }
    ]
  },
  {
    name: 'Military History',
    code: 'HIST-406',
    description: 'Study of warfare, military strategy, and armed conflicts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Thematic History',
    isCompulsory: false,
    icon: '⚔️',
    topics: [
      { title: 'Ancient Warfare', description: 'Early military tactics', order: 1 },
      { title: 'Medieval Battles', description: 'Knights and sieges', order: 2 },
      { title: 'Napoleonic Wars', description: 'European conflicts', order: 3 },
      { title: 'Modern Warfare', description: '20th century conflicts', order: 4 },
      { title: 'Military Technology', description: 'Evolution of weapons', order: 5 }
    ]
  },
  {
    name: 'History of Migration',
    code: 'HIST-407',
    description: 'Human migration patterns and their historical impacts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Thematic History',
    isCompulsory: false,
    icon: '🚶',
    topics: [
      { title: 'Early Human Migration', description: 'Out of Africa', order: 1 },
      { title: 'Forced Migration', description: 'Slavery and displacement', order: 2 },
      { title: 'Immigration Waves', description: 'Voluntary migration', order: 3 },
      { title: 'Refugee Crises', description: 'Displacement from conflict', order: 4 },
      { title: 'Contemporary Migration', description: 'Modern global movement', order: 5 }
    ]
  },
  {
    name: 'History of Human Rights',
    code: 'HIST-408',
    description: 'Development of human rights concepts and movements.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Thematic History',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Origins of Rights', description: 'Early concepts of human dignity', order: 1 },
      { title: 'Enlightenment Ideas', description: 'Natural rights philosophy', order: 2 },
      { title: 'Universal Declaration', description: 'UN human rights charter', order: 3 },
      { title: 'Civil Rights Movements', description: 'Fighting for equality', order: 4 },
      { title: 'Contemporary Rights Issues', description: 'Modern human rights challenges', order: 5 }
    ]
  },

  // HISTORICAL METHODS & RESEARCH
  
  {
    name: 'Introduction to Historiography',
    code: 'HIST-501',
    description: 'Study of historical writing and interpretation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Historical Methods',
    isCompulsory: false,
    icon: '📚',
    topics: [
      { title: 'What is Historiography?', description: 'Study of history writing', order: 1 },
      { title: 'Historical Schools', description: 'Different approaches to history', order: 2 },
      { title: 'Bias in History', description: 'Perspective and interpretation', order: 3 },
      { title: 'Changing Interpretations', description: 'How history is rewritten', order: 4 },
      { title: 'Contemporary Historiography', description: 'Modern historical methods', order: 5 }
    ]
  },
  {
    name: 'Research Methods in History',
    code: 'HIST-502',
    description: 'Techniques for conducting historical research.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Historical Methods',
    isCompulsory: false,
    icon: '🔍',
    topics: [
      { title: 'Research Questions', description: 'Formulating historical inquiries', order: 1 },
      { title: 'Finding Sources', description: 'Locating historical evidence', order: 2 },
      { title: 'Source Evaluation', description: 'Assessing reliability', order: 3 },
      { title: 'Note-Taking', description: 'Organizing research', order: 4 },
      { title: 'Historical Analysis', description: 'Interpreting evidence', order: 5 }
    ]
  },
  {
    name: 'Primary Source Analysis',
    code: 'HIST-503',
    description: 'Working with original historical documents and artifacts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Historical Methods',
    isCompulsory: false,
    icon: '📜',
    topics: [
      { title: 'Types of Primary Sources', description: 'Documents, artifacts, and records', order: 1 },
      { title: 'Reading Documents', description: 'Understanding historical texts', order: 2 },
      { title: 'Context Analysis', description: 'Historical context of sources', order: 3 },
      { title: 'Bias Detection', description: 'Identifying perspective', order: 4 },
      { title: 'Source Comparison', description: 'Cross-referencing evidence', order: 5 }
    ]
  },
  {
    name: 'Oral History Methods',
    code: 'HIST-504',
    description: 'Collecting and analyzing oral testimonies and memories.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Historical Methods',
    isCompulsory: false,
    icon: '🎤',
    topics: [
      { title: 'Oral History Basics', description: 'What is oral history?', order: 1 },
      { title: 'Interview Techniques', description: 'Conducting interviews', order: 2 },
      { title: 'Recording Methods', description: 'Audio and video recording', order: 3 },
      { title: 'Memory and Reliability', description: 'Understanding memory', order: 4 },
      { title: 'Transcription and Analysis', description: 'Processing interviews', order: 5 }
    ]
  },
  {
    name: 'Archival Studies',
    code: 'HIST-505',
    description: 'Working with archives and historical collections.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Historical Methods',
    isCompulsory: false,
    icon: '📁',
    topics: [
      { title: 'What are Archives?', description: 'Understanding archival collections', order: 1 },
      { title: 'Finding Aids', description: 'Navigating archives', order: 2 },
      { title: 'Document Handling', description: 'Preserving historical materials', order: 3 },
      { title: 'Archival Research', description: 'Conducting archival research', order: 4 },
      { title: 'Digital Archives', description: 'Online historical collections', order: 5 }
    ]
  },
  {
    name: 'Historical Writing & Academic Skills',
    code: 'HIST-506',
    description: 'Writing history papers and academic communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Historical Methods',
    isCompulsory: false,
    icon: '✍️',
    topics: [
      { title: 'Historical Arguments', description: 'Making historical claims', order: 1 },
      { title: 'Essay Structure', description: 'Organizing historical writing', order: 2 },
      { title: 'Citations', description: 'Referencing sources', order: 3 },
      { title: 'Academic Style', description: 'Writing conventions', order: 4 },
      { title: 'Revision and Editing', description: 'Improving historical writing', order: 5 }
    ]
  },

  // PHILOSOPHY & ETHICS
  
  {
    name: 'Introduction to Philosophy',
    code: 'PHIL-101',
    description: 'Overview of major philosophers, traditions, and philosophical concepts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Philosophy & Ethics',
    isCompulsory: false,
    icon: '🤔',
    topics: [
      { title: 'What is Philosophy?', description: 'Nature and purpose of philosophy', order: 1 },
      { title: 'Ancient Philosophy', description: 'Socrates, Plato, Aristotle', order: 2 },
      { title: 'Metaphysics', description: 'Nature of reality', order: 3 },
      { title: 'Epistemology', description: 'Theory of knowledge', order: 4 },
      { title: 'Logic', description: 'Reasoning and argument', order: 5 }
    ]
  },
  {
    name: 'Ethics & Moral Philosophy',
    code: 'PHIL-201',
    description: 'Study of right and wrong, moral theories, and applied ethics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Philosophy & Ethics',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'What is Ethics?', description: 'Moral philosophy basics', order: 1 },
      { title: 'Utilitarianism', description: 'Greatest good for greatest number', order: 2 },
      { title: 'Deontology', description: 'Duty-based ethics', order: 3 },
      { title: 'Virtue Ethics', description: 'Character and moral excellence', order: 4 },
      { title: 'Applied Ethics', description: 'Real-world moral issues', order: 5 }
    ]
  },
  {
    name: 'Logic & Critical Thinking',
    code: 'PHIL-102',
    description: 'Reasoning, argument analysis, and identifying logical fallacies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Philosophy & Ethics',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'Logical Reasoning', description: 'Valid and sound arguments', order: 1 },
      { title: 'Deductive Logic', description: 'Formal logic systems', order: 2 },
      { title: 'Inductive Reasoning', description: 'Probability and inference', order: 3 },
      { title: 'Logical Fallacies', description: 'Common reasoning errors', order: 4 },
      { title: 'Critical Analysis', description: 'Evaluating arguments', order: 5 }
    ]
  },
  {
    name: 'Political Philosophy',
    code: 'PHIL-301',
    description: 'Examination of justice, democracy, freedom, and political authority.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Philosophy & Ethics',
    isCompulsory: false,
    icon: '🏛️',
    topics: [
      { title: 'Political Authority', description: 'Legitimacy of government', order: 1 },
      { title: 'Justice', description: 'Theories of fairness', order: 2 },
      { title: 'Liberty', description: 'Freedom and rights', order: 3 },
      { title: 'Democracy', description: 'Democratic theory', order: 4 },
      { title: 'Social Contract', description: 'Hobbes, Locke, Rousseau', order: 5 }
    ]
  },
  {
    name: 'Philosophy of Religion',
    code: 'PHIL-302',
    description: 'Philosophical exploration of faith, spirituality, and the divine.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Philosophy & Ethics',
    isCompulsory: false,
    icon: '🙏',
    topics: [
      { title: 'Existence of God', description: 'Arguments for and against', order: 1 },
      { title: 'Problem of Evil', description: 'Suffering and divine goodness', order: 2 },
      { title: 'Faith and Reason', description: 'Relationship between belief and logic', order: 3 },
      { title: 'Religious Experience', description: 'Mysticism and revelation', order: 4 },
      { title: 'Religious Pluralism', description: 'Multiple religious truths', order: 5 }
    ]
  },

  // LITERATURE & LANGUAGE STUDIES
  
  {
    name: 'Introduction to Literature',
    code: 'LIT-101',
    description: 'Reading, analyzing, and interpreting poetry, fiction, drama, and essays.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Literature & Language',
    isCompulsory: false,
    icon: '📖',
    topics: [
      { title: 'Literary Elements', description: 'Plot, character, setting, theme', order: 1 },
      { title: 'Poetry Analysis', description: 'Understanding poetic forms', order: 2 },
      { title: 'Fiction Reading', description: 'Novels and short stories', order: 3 },
      { title: 'Drama Study', description: 'Plays and performance', order: 4 },
      { title: 'Literary Criticism', description: 'Interpreting literature', order: 5 }
    ]
  },
  {
    name: 'World Literature',
    code: 'LIT-201',
    description: 'Survey of global literary traditions from diverse cultures.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Literature & Language',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'African Literature', description: 'Achebe, Soyinka, and others', order: 1 },
      { title: 'European Literature', description: 'Classic and modern European works', order: 2 },
      { title: 'Asian Literature', description: 'Chinese, Japanese, Indian literature', order: 3 },
      { title: 'Latin American Literature', description: 'Magical realism and more', order: 4 },
      { title: 'Comparative Analysis', description: 'Cross-cultural literary themes', order: 5 }
    ]
  },
  {
    name: 'English Language & Composition',
    code: 'LIT-102',
    description: 'Grammar, writing, rhetoric, and academic communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Literature & Language',
    isCompulsory: false,
    icon: '✍️',
    topics: [
      { title: 'Grammar Fundamentals', description: 'Parts of speech and sentence structure', order: 1 },
      { title: 'Writing Process', description: 'Planning, drafting, revising', order: 2 },
      { title: 'Rhetorical Analysis', description: 'Persuasion and argument', order: 3 },
      { title: 'Academic Writing', description: 'Essays and research papers', order: 4 },
      { title: 'Style and Voice', description: 'Developing writing style', order: 5 }
    ]
  },
  {
    name: 'Comparative Literature',
    code: 'LIT-301',
    description: 'Analysis of cross-cultural literature and thematic comparisons.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Literature & Language',
    isCompulsory: false,
    icon: '🔄',
    topics: [
      { title: 'Comparative Methods', description: 'Approaches to comparison', order: 1 },
      { title: 'Universal Themes', description: 'Common literary themes', order: 2 },
      { title: 'Cultural Context', description: 'Literature and society', order: 3 },
      { title: 'Translation Studies', description: 'Literature across languages', order: 4 },
      { title: 'Global Literary Movements', description: 'International literary trends', order: 5 }
    ]
  },
  {
    name: 'Creative Writing & Poetry',
    code: 'LIT-202',
    description: 'Original storytelling, poetic form, and literary expression.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Literature & Language',
    isCompulsory: false,
    icon: '🖊️',
    topics: [
      { title: 'Fiction Writing', description: 'Crafting short stories and novels', order: 1 },
      { title: 'Poetry Composition', description: 'Writing poems', order: 2 },
      { title: 'Character Development', description: 'Creating believable characters', order: 3 },
      { title: 'Dialogue', description: 'Writing realistic conversation', order: 4 },
      { title: 'Revision Techniques', description: 'Improving creative work', order: 5 }
    ]
  },

  // ARTS & MUSIC HISTORY
  
  {
    name: 'Music Appreciation & History',
    code: 'ARTS-201',
    description: 'Overview of classical, jazz, folk, and modern music with cultural analysis.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Arts & Music History',
    isCompulsory: false,
    icon: '🎵',
    topics: [
      { title: 'Elements of Music', description: 'Melody, harmony, rhythm, timbre', order: 1 },
      { title: 'Classical Music', description: 'Bach, Mozart, Beethoven', order: 2 },
      { title: 'Jazz History', description: 'Origins and development of jazz', order: 3 },
      { title: 'World Music', description: 'Traditional music from different cultures', order: 4 },
      { title: 'Contemporary Music', description: 'Modern musical styles', order: 5 }
    ]
  },
  {
    name: 'Theatre Arts & Performance Studies',
    code: 'ARTS-202',
    description: 'Dramatic literature, acting, directing, and stagecraft.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Arts & Music History',
    isCompulsory: false,
    icon: '🎭',
    topics: [
      { title: 'Theatre History', description: 'Ancient to modern theatre', order: 1 },
      { title: 'Dramatic Literature', description: 'Reading and analyzing plays', order: 2 },
      { title: 'Acting Techniques', description: 'Performance methods', order: 3 },
      { title: 'Stagecraft', description: 'Sets, lighting, and sound', order: 4 },
      { title: 'Contemporary Theatre', description: 'Modern performance', order: 5 }
    ]
  },
  {
    name: 'Film Studies',
    code: 'ARTS-301',
    description: 'Cinematography, storytelling, and historical evolution of cinema.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Arts & Music History',
    isCompulsory: false,
    icon: '🎬',
    topics: [
      { title: 'Film History', description: 'Evolution of cinema', order: 1 },
      { title: 'Film Analysis', description: 'Understanding cinematic techniques', order: 2 },
      { title: 'Genres', description: 'Different types of films', order: 3 },
      { title: 'Directors and Auteurs', description: 'Major filmmakers', order: 4 },
      { title: 'Contemporary Cinema', description: 'Modern film trends', order: 5 }
    ]
  },
  {
    name: 'Cultural & Media Studies',
    code: 'ARTS-302',
    description: 'Analysis of popular culture, media, and artistic influence in society.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Arts & Music History',
    isCompulsory: false,
    icon: '📺',
    topics: [
      { title: 'Popular Culture', description: 'Mass culture and society', order: 1 },
      { title: 'Media Analysis', description: 'Understanding media messages', order: 2 },
      { title: 'Digital Culture', description: 'Internet and social media', order: 3 },
      { title: 'Cultural Identity', description: 'Culture and identity formation', order: 4 },
      { title: 'Globalization', description: 'Global cultural exchange', order: 5 }
    ]
  },

  // RELIGIOUS STUDIES & THEOLOGY
  
  {
    name: 'Introduction to World Religions',
    code: 'REL-101',
    description: 'Overview of Christianity, Islam, Hinduism, Buddhism, Judaism, and indigenous religions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Religious Studies',
    isCompulsory: false,
    icon: '🕉️',
    topics: [
      { title: 'Christianity', description: 'Beliefs, practices, and history', order: 1 },
      { title: 'Islam', description: 'Five pillars and Islamic tradition', order: 2 },
      { title: 'Hinduism', description: 'Hindu philosophy and practices', order: 3 },
      { title: 'Buddhism', description: 'Four Noble Truths and Eightfold Path', order: 4 },
      { title: 'Indigenous Religions', description: 'Traditional African and other indigenous beliefs', order: 5 }
    ]
  },
  {
    name: 'Comparative Religion',
    code: 'REL-201',
    description: 'Study of similarities, differences, and interactions among global religions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Religious Studies',
    isCompulsory: false,
    icon: '🔄',
    topics: [
      { title: 'Comparative Methods', description: 'Approaches to comparing religions', order: 1 },
      { title: 'Common Themes', description: 'Universal religious concepts', order: 2 },
      { title: 'Sacred Texts', description: 'Religious scriptures', order: 3 },
      { title: 'Rituals and Practices', description: 'Religious ceremonies', order: 4 },
      { title: 'Interfaith Dialogue', description: 'Religious cooperation', order: 5 }
    ]
  },
  {
    name: 'Theology & Spirituality',
    code: 'REL-301',
    description: 'Examination of sacred texts, rituals, and historical development of religious movements.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Religious Studies',
    isCompulsory: false,
    icon: '📿',
    topics: [
      { title: 'Theological Concepts', description: 'God, salvation, and afterlife', order: 1 },
      { title: 'Sacred Texts', description: 'Bible, Quran, and other scriptures', order: 2 },
      { title: 'Spiritual Practices', description: 'Prayer, meditation, and worship', order: 3 },
      { title: 'Religious Movements', description: 'Historical development', order: 4 },
      { title: 'Contemporary Theology', description: 'Modern religious thought', order: 5 }
    ]
  },
  {
    name: 'Religion & Ethics',
    code: 'REL-202',
    description: 'Exploration of moral guidance and social impact derived from religious teachings.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Religious Studies',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Religious Moral Teachings', description: 'Ethical principles in religions', order: 1 },
      { title: 'Social Justice', description: 'Religious perspectives on justice', order: 2 },
      { title: 'Bioethics', description: 'Religious views on medical ethics', order: 3 },
      { title: 'Environmental Ethics', description: 'Religious stewardship of nature', order: 4 },
      { title: 'Applied Religious Ethics', description: 'Real-world moral issues', order: 5 }
    ]
  },

  // LINGUISTICS
  
  {
    name: 'Introduction to Linguistics',
    code: 'LING-101',
    description: 'Phonetics, syntax, semantics, language acquisition, and sociolinguistics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Linguistics',
    isCompulsory: false,
    icon: '🗣️',
    topics: [
      { title: 'What is Linguistics?', description: 'Scientific study of language', order: 1 },
      { title: 'Phonetics', description: 'Sounds of language', order: 2 },
      { title: 'Syntax', description: 'Sentence structure', order: 3 },
      { title: 'Semantics', description: 'Meaning in language', order: 4 },
      { title: 'Language Acquisition', description: 'How we learn language', order: 5 }
    ]
  },
  {
    name: 'Translation & Interpretation',
    code: 'LING-201',
    description: 'Written and oral translation, cultural nuances, and professional practice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Linguistics',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'Translation Theory', description: 'Principles of translation', order: 1 },
      { title: 'Translation Techniques', description: 'Methods for translating', order: 2 },
      { title: 'Interpretation', description: 'Oral translation skills', order: 3 },
      { title: 'Cultural Context', description: 'Cultural aspects of translation', order: 4 },
      { title: 'Professional Practice', description: 'Working as a translator', order: 5 }
    ]
  },

  // PHILOSOPHY OF SCIENCE & TECHNOLOGY
  
  {
    name: 'History of Science & Technology',
    code: 'SCI-301',
    description: 'Study of discoveries and inventions shaping society.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Philosophy of Science',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Ancient Science', description: 'Early scientific thought', order: 1 },
      { title: 'Scientific Revolution', description: 'Copernicus, Galileo, Newton', order: 2 },
      { title: 'Industrial Technology', description: 'Technological advances', order: 3 },
      { title: 'Modern Science', description: '20th century discoveries', order: 4 },
      { title: 'Contemporary Technology', description: 'Digital age innovations', order: 5 }
    ]
  },
  {
    name: 'Ethics of Technology',
    code: 'SCI-302',
    description: 'Examination of AI, medicine, communication, and societal impacts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Philosophy of Science',
    isCompulsory: false,
    icon: '🤖',
    topics: [
      { title: 'Technology and Society', description: 'Social impacts of technology', order: 1 },
      { title: 'AI Ethics', description: 'Artificial intelligence and morality', order: 2 },
      { title: 'Bioethics', description: 'Medical technology ethics', order: 3 },
      { title: 'Privacy', description: 'Digital privacy and surveillance', order: 4 },
      { title: 'Environmental Technology', description: 'Technology and sustainability', order: 5 }
    ]
  },
  {
    name: 'Science in Cultural Context',
    code: 'SCI-303',
    description: 'Interaction between scientific knowledge and societal development.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Philosophy of Science',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'Science and Culture', description: 'Cultural influences on science', order: 1 },
      { title: 'Scientific Revolutions', description: 'Paradigm shifts', order: 2 },
      { title: 'Science Communication', description: 'Public understanding of science', order: 3 },
      { title: 'Indigenous Knowledge', description: 'Traditional scientific knowledge', order: 4 },
      { title: 'Science Policy', description: 'Science in decision-making', order: 5 }
    ]
  },

  // PROFESSIONAL & INTERDISCIPLINARY HUMANITIES
  
  {
    name: 'Digital Humanities',
    code: 'HUM-401',
    description: 'Applying computational methods to analyze text, archives, and cultural data.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Interdisciplinary Humanities',
    isCompulsory: false,
    icon: '💻',
    topics: [
      { title: 'What are Digital Humanities?', description: 'Technology in humanities research', order: 1 },
      { title: 'Text Analysis', description: 'Computational text analysis', order: 2 },
      { title: 'Digital Archives', description: 'Online cultural collections', order: 3 },
      { title: 'Data Visualization', description: 'Visualizing humanities data', order: 4 },
      { title: 'Digital Projects', description: 'Creating digital humanities work', order: 5 }
    ]
  },
  {
    name: 'Human Rights & Social Justice in Humanities',
    code: 'HUM-402',
    description: 'Examination of human rights, ethics, and social advocacy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Interdisciplinary Humanities',
    isCompulsory: false,
    icon: '✊',
    topics: [
      { title: 'Human Rights Theory', description: 'Philosophical foundations', order: 1 },
      { title: 'Social Justice', description: 'Equity and fairness', order: 2 },
      { title: 'Advocacy', description: 'Fighting for rights', order: 3 },
      { title: 'Global Issues', description: 'International human rights', order: 4 },
      { title: 'Activism', description: 'Social change movements', order: 5 }
    ]
  },
  {
    name: 'Global Cultural Studies',
    code: 'HUM-403',
    description: 'Analysis of cultural exchange, globalization, and the evolution of ideas.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Interdisciplinary Humanities',
    isCompulsory: false,
    icon: '🌏',
    topics: [
      { title: 'Globalization', description: 'Global cultural connections', order: 1 },
      { title: 'Cultural Exchange', description: 'Cross-cultural interactions', order: 2 },
      { title: 'Hybridity', description: 'Mixed cultural forms', order: 3 },
      { title: 'Cultural Identity', description: 'Identity in global context', order: 4 },
      { title: 'Transnationalism', description: 'Beyond national boundaries', order: 5 }
    ]
  },
  {
    name: 'Comparative Philosophy & Ethics',
    code: 'HUM-404',
    description: 'Study of moral frameworks across cultures and historical periods.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Interdisciplinary Humanities',
    isCompulsory: false,
    icon: '🔄',
    topics: [
      { title: 'Western Philosophy', description: 'European philosophical traditions', order: 1 },
      { title: 'Eastern Philosophy', description: 'Asian philosophical thought', order: 2 },
      { title: 'African Philosophy', description: 'Ubuntu and African ethics', order: 3 },
      { title: 'Comparative Methods', description: 'Comparing philosophical systems', order: 4 },
      { title: 'Universal Ethics', description: 'Common moral principles', order: 5 }
    ]
  }
];

async function seedHistoryAdvancedHumanities() {
  console.log('📚 Starting History & Advanced Humanities seeding...\n');

  for (const course of historyAdvancedHumanitiesCourses) {
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

  console.log('✅ History & Advanced Humanities seeding complete!\n');
  
  // Print summary
  const courseCount = historyAdvancedHumanitiesCourses.length;
  const topicCount = historyAdvancedHumanitiesCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`\n   Categories:`);
  console.log(`   - World History (9 courses)`);
  console.log(`   - African History (7 courses)`);
  console.log(`   - Thematic History (8 courses)`);
  console.log(`   - Historical Methods (6 courses)`);
  console.log(`   - Philosophy & Ethics (5 courses)`);
  console.log(`   - Literature & Language (5 courses)`);
  console.log(`   - Arts & Music History (4 courses)`);
  console.log(`   - Religious Studies (4 courses)`);
  console.log(`   - Linguistics (2 courses)`);
  console.log(`   - Philosophy of Science (3 courses)`);
  console.log(`   - Interdisciplinary Humanities (4 courses)`);
}

seedHistoryAdvancedHumanities()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
