import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const socialScienceEducationCourses = [
  // SOCIAL SCIENCE COURSES
  
  // 1. Psychology
  {
    name: 'Introduction to Psychology',
    code: 'PSY-101',
    description: 'Foundational course covering the scientific study of behavior and mental processes, including major theories and research methods.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Psychology',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'What is Psychology?', description: 'Definition, history, and major perspectives in psychology', order: 1 },
      { title: 'Research Methods', description: 'Scientific method, experiments, and ethical considerations', order: 2 },
      { title: 'Biological Bases of Behavior', description: 'Brain, nervous system, and genetics', order: 3 },
      { title: 'Sensation & Perception', description: 'How we sense and interpret the world', order: 4 },
      { title: 'Learning & Memory', description: 'Classical conditioning, operant conditioning, and memory systems', order: 5 }
    ]
  },
  {
    name: 'Developmental Psychology',
    code: 'PSY-201',
    description: 'Study of human development across the lifespan from infancy through old age, including physical, cognitive, and social-emotional development.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Psychology',
    isCompulsory: false,
    icon: '👶',
    topics: [
      { title: 'Prenatal Development', description: 'Conception, pregnancy, and birth', order: 1 },
      { title: 'Infancy & Toddlerhood', description: 'Physical and cognitive development in early years', order: 2 },
      { title: 'Childhood Development', description: 'Middle childhood cognitive and social development', order: 3 },
      { title: 'Adolescence', description: 'Physical changes, identity formation, and peer relationships', order: 4 },
      { title: 'Adulthood & Aging', description: 'Adult development, aging, and end-of-life issues', order: 5 }
    ]
  },
  {
    name: 'Educational Psychology',
    code: 'PSY-202',
    description: 'Application of psychological principles to education, including learning theories, motivation, classroom management, and assessment.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Psychology',
    isCompulsory: false,
    icon: '📚',
    topics: [
      { title: 'Learning Theories', description: 'Behaviorism, cognitivism, constructivism, and social learning', order: 1 },
      { title: 'Cognitive Development', description: 'Piaget, Vygotsky, and information processing', order: 2 },
      { title: 'Motivation in Learning', description: 'Intrinsic vs. extrinsic motivation and self-efficacy', order: 3 },
      { title: 'Individual Differences', description: 'Intelligence, learning styles, and special needs', order: 4 },
      { title: 'Assessment & Evaluation', description: 'Testing, grading, and feedback strategies', order: 5 }
    ]
  },
  {
    name: 'Abnormal Psychology',
    code: 'PSY-301',
    description: 'Study of psychological disorders including symptoms, causes, diagnosis, and treatment approaches.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Psychology',
    isCompulsory: false,
    icon: '🩺',
    topics: [
      { title: 'Defining Abnormality', description: 'Criteria for psychological disorders and classification systems', order: 1 },
      { title: 'Anxiety Disorders', description: 'Phobias, panic disorder, GAD, and OCD', order: 2 },
      { title: 'Mood Disorders', description: 'Depression, bipolar disorder, and suicide', order: 3 },
      { title: 'Schizophrenia', description: 'Symptoms, causes, and treatment', order: 4 },
      { title: 'Treatment Approaches', description: 'Psychotherapy, medication, and alternative treatments', order: 5 }
    ]
  },
  {
    name: 'Social Psychology',
    code: 'PSY-203',
    description: 'Study of how people think about, influence, and relate to one another in social contexts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Psychology',
    isCompulsory: false,
    icon: '👥',
    topics: [
      { title: 'Social Cognition', description: 'Attribution, attitudes, and persuasion', order: 1 },
      { title: 'Social Influence', description: 'Conformity, compliance, and obedience', order: 2 },
      { title: 'Group Dynamics', description: 'Group behavior, leadership, and decision-making', order: 3 },
      { title: 'Prejudice & Discrimination', description: 'Stereotypes, bias, and reducing prejudice', order: 4 },
      { title: 'Prosocial Behavior', description: 'Helping, altruism, and aggression', order: 5 }
    ]
  },
  {
    name: 'Cognitive Psychology',
    code: 'PSY-302',
    description: 'Study of mental processes including perception, attention, memory, language, and problem-solving.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Psychology',
    isCompulsory: false,
    icon: '🧩',
    topics: [
      { title: 'Attention & Consciousness', description: 'Selective attention and awareness', order: 1 },
      { title: 'Memory Systems', description: 'Sensory, short-term, and long-term memory', order: 2 },
      { title: 'Language & Communication', description: 'Language acquisition and processing', order: 3 },
      { title: 'Problem Solving', description: 'Reasoning, decision-making, and creativity', order: 4 },
      { title: 'Cognitive Development', description: 'How thinking changes across the lifespan', order: 5 }
    ]
  },
  {
    name: 'Counseling Skills',
    code: 'PSY-204',
    description: 'Practical counseling techniques including active listening, empathy, rapport building, and ethical practice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Psychology',
    isCompulsory: false,
    icon: '🤝',
    topics: [
      { title: 'Counseling Fundamentals', description: 'Counseling theories and approaches', order: 1 },
      { title: 'Active Listening', description: 'Listening skills and nonverbal communication', order: 2 },
      { title: 'Building Rapport', description: 'Establishing trust and therapeutic relationships', order: 3 },
      { title: 'Counseling Techniques', description: 'Open questions, reflection, and summarizing', order: 4 },
      { title: 'Ethics & Boundaries', description: 'Professional ethics and confidentiality', order: 5 }
    ]
  },

  // 2. Sociology
  {
    name: 'Introduction to Sociology',
    code: 'SOC-101',
    description: 'Foundational course examining society, social institutions, culture, and social interaction.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Sociology',
    isCompulsory: false,
    icon: '🏛️',
    topics: [
      { title: 'Sociological Imagination', description: 'Understanding society and social structures', order: 1 },
      { title: 'Culture & Society', description: 'Cultural norms, values, and diversity', order: 2 },
      { title: 'Socialization', description: 'How individuals learn social norms', order: 3 },
      { title: 'Social Institutions', description: 'Family, education, religion, and economy', order: 4 },
      { title: 'Social Stratification', description: 'Class, inequality, and social mobility', order: 5 }
    ]
  },
  {
    name: 'Social Problems',
    code: 'SOC-201',
    description: 'Analysis of contemporary social issues including poverty, crime, inequality, and environmental challenges.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Sociology',
    isCompulsory: false,
    icon: '⚠️',
    topics: [
      { title: 'Defining Social Problems', description: 'What makes an issue a social problem?', order: 1 },
      { title: 'Poverty & Inequality', description: 'Economic disparities and their impacts', order: 2 },
      { title: 'Crime & Deviance', description: 'Causes of crime and criminal justice', order: 3 },
      { title: 'Health & Healthcare', description: 'Access to healthcare and health disparities', order: 4 },
      { title: 'Environmental Issues', description: 'Climate change and sustainability', order: 5 }
    ]
  },
  {
    name: 'Sociology of Education',
    code: 'SOC-202',
    description: 'Examination of education as a social institution, including inequality, access, and educational outcomes.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Sociology',
    isCompulsory: false,
    icon: '🎓',
    topics: [
      { title: 'Education & Society', description: 'Functions of education in society', order: 1 },
      { title: 'Educational Inequality', description: 'Class, race, and gender in education', order: 2 },
      { title: 'School Culture', description: 'Hidden curriculum and socialization', order: 3 },
      { title: 'Teacher-Student Relations', description: 'Power dynamics in classrooms', order: 4 },
      { title: 'Education Policy', description: 'Educational reform and access', order: 5 }
    ]
  },
  {
    name: 'Gender & Society',
    code: 'SOC-203',
    description: 'Study of gender roles, gender inequality, and the social construction of gender.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Sociology',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Gender as Social Construction', description: 'Biological sex vs. gender identity', order: 1 },
      { title: 'Gender Socialization', description: 'How gender roles are learned', order: 2 },
      { title: 'Gender Inequality', description: 'Wage gap, glass ceiling, and discrimination', order: 3 },
      { title: 'Masculinity & Femininity', description: 'Changing gender norms and expectations', order: 4 },
      { title: 'Gender & Intersectionality', description: 'Race, class, and gender interactions', order: 5 }
    ]
  },
  {
    name: 'Family & Community Studies',
    code: 'SOC-204',
    description: 'Examination of family structures, community dynamics, and social support systems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Sociology',
    isCompulsory: false,
    icon: '👨‍👩‍👧‍👦',
    topics: [
      { title: 'Family Structures', description: 'Nuclear, extended, and diverse family forms', order: 1 },
      { title: 'Marriage & Partnerships', description: 'Changing patterns of marriage and cohabitation', order: 2 },
      { title: 'Parenting & Childcare', description: 'Parenting styles and child development', order: 3 },
      { title: 'Community & Social Networks', description: 'Community cohesion and social capital', order: 4 },
      { title: 'Family Challenges', description: 'Divorce, domestic violence, and family stress', order: 5 }
    ]
  },
  {
    name: 'Cultural Diversity',
    code: 'SOC-205',
    description: 'Study of cultural diversity, multiculturalism, and intercultural communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Sociology',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'Understanding Culture', description: 'Cultural relativism and ethnocentrism', order: 1 },
      { title: 'Race & Ethnicity', description: 'Social construction of race and ethnic identity', order: 2 },
      { title: 'Multiculturalism', description: 'Cultural pluralism and integration', order: 3 },
      { title: 'Intercultural Communication', description: 'Cross-cultural understanding and dialogue', order: 4 },
      { title: 'Globalization & Culture', description: 'Cultural exchange and cultural imperialism', order: 5 }
    ]
  },

  // 3. Anthropology
  {
    name: 'Cultural Anthropology',
    code: 'ANT-201',
    description: 'Study of human cultures, social practices, and cultural diversity across the world.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Anthropology',
    isCompulsory: false,
    icon: '🗿',
    topics: [
      { title: 'What is Anthropology?', description: 'Anthropological perspectives and methods', order: 1 },
      { title: 'Culture & Society', description: 'Cultural systems and social organization', order: 2 },
      { title: 'Kinship & Family', description: 'Family structures across cultures', order: 3 },
      { title: 'Religion & Ritual', description: 'Religious beliefs and practices', order: 4 },
      { title: 'Ethnographic Research', description: 'Fieldwork and participant observation', order: 5 }
    ]
  },
  {
    name: 'Human Evolution',
    code: 'ANT-101',
    description: 'Study of human origins, biological evolution, and the development of human societies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Anthropology',
    isCompulsory: false,
    icon: '🦴',
    topics: [
      { title: 'Evolution & Natural Selection', description: 'Darwin and evolutionary theory', order: 1 },
      { title: 'Primate Evolution', description: 'Our primate relatives and ancestors', order: 2 },
      { title: 'Early Hominins', description: 'Australopithecus and early human ancestors', order: 3 },
      { title: 'Homo Species', description: 'Homo erectus, Neanderthals, and Homo sapiens', order: 4 },
      { title: 'Human Variation', description: 'Biological diversity in modern humans', order: 5 }
    ]
  },
  {
    name: 'African Cultures & Societies',
    code: 'ANT-202',
    description: 'In-depth study of African cultures, social systems, and contemporary issues in African societies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Anthropology',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'African Cultural Diversity', description: 'Overview of African ethnic groups and cultures', order: 1 },
      { title: 'Traditional African Societies', description: 'Pre-colonial social structures and governance', order: 2 },
      { title: 'African Religions & Spirituality', description: 'Traditional beliefs and practices', order: 3 },
      { title: 'Colonialism & Its Impact', description: 'Colonial legacy and cultural change', order: 4 },
      { title: 'Contemporary African Issues', description: 'Urbanization, globalization, and development', order: 5 }
    ]
  },

  // 4. Political Science
  {
    name: 'Introduction to Political Science',
    code: 'POL-101',
    description: 'Foundational course covering political systems, government structures, and political behavior.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Political Science',
    isCompulsory: false,
    icon: '🏛️',
    topics: [
      { title: 'What is Politics?', description: 'Power, authority, and political systems', order: 1 },
      { title: 'Forms of Government', description: 'Democracy, authoritarianism, and monarchy', order: 2 },
      { title: 'Political Ideologies', description: 'Liberalism, conservatism, socialism, and others', order: 3 },
      { title: 'Political Institutions', description: 'Legislature, executive, and judiciary', order: 4 },
      { title: 'Political Participation', description: 'Voting, parties, and civic engagement', order: 5 }
    ]
  },
  {
    name: 'Public Policy & Governance',
    code: 'POL-201',
    description: 'Study of policy-making processes, governance structures, and public administration.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Political Science',
    isCompulsory: false,
    icon: '📋',
    topics: [
      { title: 'Policy-Making Process', description: 'Agenda setting, formulation, and implementation', order: 1 },
      { title: 'Governance Models', description: 'Good governance and accountability', order: 2 },
      { title: 'Public Administration', description: 'Bureaucracy and civil service', order: 3 },
      { title: 'Policy Analysis', description: 'Evaluating policy effectiveness', order: 4 },
      { title: 'Citizen Participation', description: 'Public engagement in governance', order: 5 }
    ]
  },
  {
    name: 'International Relations',
    code: 'POL-301',
    description: 'Study of relations between nations, international organizations, and global politics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Political Science',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'IR Theories', description: 'Realism, liberalism, and constructivism', order: 1 },
      { title: 'International Organizations', description: 'UN, AU, and regional organizations', order: 2 },
      { title: 'War & Peace', description: 'Conflict resolution and peacekeeping', order: 3 },
      { title: 'Global Economy', description: 'Trade, finance, and economic interdependence', order: 4 },
      { title: 'Global Challenges', description: 'Climate change, terrorism, and migration', order: 5 }
    ]
  },
  {
    name: 'Comparative Politics',
    code: 'POL-202',
    description: 'Comparative analysis of political systems, institutions, and processes across countries.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Political Science',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Comparative Method', description: 'Approaches to comparing political systems', order: 1 },
      { title: 'Democratic Systems', description: 'Parliamentary vs. presidential systems', order: 2 },
      { title: 'Authoritarian Regimes', description: 'Military rule and one-party states', order: 3 },
      { title: 'Political Development', description: 'Democratization and regime change', order: 4 },
      { title: 'African Politics', description: 'Political systems in African countries', order: 5 }
    ]
  },

  // 5. Economics (Social Science Track)
  {
    name: 'Microeconomics',
    code: 'ECON-101',
    description: 'Study of individual economic behavior, markets, supply and demand, and consumer choice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics (Social Science)',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Supply & Demand', description: 'Market equilibrium and price determination', order: 1 },
      { title: 'Consumer Behavior', description: 'Utility, preferences, and demand curves', order: 2 },
      { title: 'Production & Costs', description: 'Firm behavior and cost structures', order: 3 },
      { title: 'Market Structures', description: 'Perfect competition, monopoly, and oligopoly', order: 4 },
      { title: 'Market Failures', description: 'Externalities, public goods, and government intervention', order: 5 }
    ]
  },
  {
    name: 'Macroeconomics',
    code: 'ECON-102',
    description: 'Study of national economies, GDP, inflation, unemployment, and economic policy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics (Social Science)',
    isCompulsory: false,
    icon: '📈',
    topics: [
      { title: 'National Income', description: 'GDP, GNP, and economic measurement', order: 1 },
      { title: 'Unemployment', description: 'Types of unemployment and labor markets', order: 2 },
      { title: 'Inflation', description: 'Causes and consequences of inflation', order: 3 },
      { title: 'Fiscal Policy', description: 'Government spending and taxation', order: 4 },
      { title: 'Monetary Policy', description: 'Central banks and interest rates', order: 5 }
    ]
  },
  {
    name: 'Development Economics',
    code: 'ECON-301',
    description: 'Study of economic development in developing countries, poverty, and growth strategies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics (Social Science)',
    isCompulsory: false,
    icon: '🌱',
    topics: [
      { title: 'Economic Development', description: 'Defining and measuring development', order: 1 },
      { title: 'Poverty & Inequality', description: 'Causes and consequences of poverty', order: 2 },
      { title: 'Growth Theories', description: 'Solow model and endogenous growth', order: 3 },
      { title: 'Development Strategies', description: 'Industrialization, trade, and aid', order: 4 },
      { title: 'African Development', description: 'Challenges and opportunities in Africa', order: 5 }
    ]
  },
  {
    name: 'Public Finance',
    code: 'ECON-201',
    description: 'Study of government revenue, expenditure, budgeting, and public sector economics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics (Social Science)',
    isCompulsory: false,
    icon: '💰',
    topics: [
      { title: 'Government Revenue', description: 'Taxation systems and tax policy', order: 1 },
      { title: 'Government Expenditure', description: 'Public spending and budget allocation', order: 2 },
      { title: 'Budget Deficits', description: 'Debt, deficits, and fiscal sustainability', order: 3 },
      { title: 'Public Goods', description: 'Provision of public services', order: 4 },
      { title: 'Fiscal Federalism', description: 'Central vs. local government finance', order: 5 }
    ]
  },

  // 6. Social Work & Community Development
  {
    name: 'Social Work Principles',
    code: 'SW-101',
    description: 'Introduction to social work profession, values, ethics, and practice methods.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Work & Community Development',
    isCompulsory: false,
    icon: '🤲',
    topics: [
      { title: 'What is Social Work?', description: 'Social work profession and roles', order: 1 },
      { title: 'Social Work Values', description: 'Ethics, human rights, and social justice', order: 2 },
      { title: 'Practice Methods', description: 'Casework, group work, and community work', order: 3 },
      { title: 'Assessment Skills', description: 'Client assessment and needs analysis', order: 4 },
      { title: 'Intervention Strategies', description: 'Helping techniques and empowerment', order: 5 }
    ]
  },
  {
    name: 'Child Welfare',
    code: 'SW-201',
    description: 'Study of child protection, child rights, and services for vulnerable children.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Work & Community Development',
    isCompulsory: false,
    icon: '👶',
    topics: [
      { title: 'Child Rights', description: 'UN Convention on the Rights of the Child', order: 1 },
      { title: 'Child Abuse & Neglect', description: 'Recognizing and responding to abuse', order: 2 },
      { title: 'Foster Care & Adoption', description: 'Alternative care systems', order: 3 },
      { title: 'Child Development', description: 'Developmental needs and milestones', order: 4 },
      { title: 'Working with Families', description: 'Family support and reunification', order: 5 }
    ]
  },
  {
    name: 'Community Development',
    code: 'SW-202',
    description: 'Principles and practices of community development, empowerment, and participatory approaches.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Work & Community Development',
    isCompulsory: false,
    icon: '🏘️',
    topics: [
      { title: 'Community Development Principles', description: 'Participation, empowerment, and sustainability', order: 1 },
      { title: 'Community Assessment', description: 'Needs assessment and asset mapping', order: 2 },
      { title: 'Project Planning', description: 'Designing community projects', order: 3 },
      { title: 'Mobilizing Resources', description: 'Fundraising and partnership building', order: 4 },
      { title: 'Monitoring & Evaluation', description: 'Measuring community impact', order: 5 }
    ]
  },
  {
    name: 'Social Case Management',
    code: 'SW-301',
    description: 'Case management skills including assessment, planning, implementation, and evaluation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Work & Community Development',
    isCompulsory: false,
    icon: '📋',
    topics: [
      { title: 'Case Management Process', description: 'Engagement, assessment, and planning', order: 1 },
      { title: 'Service Coordination', description: 'Linking clients to resources', order: 2 },
      { title: 'Documentation', description: 'Record keeping and case notes', order: 3 },
      { title: 'Crisis Intervention', description: 'Responding to emergencies', order: 4 },
      { title: 'Case Closure', description: 'Termination and follow-up', order: 5 }
    ]
  },

  // EDUCATION & TEACHING COURSES

  // 1. Foundations of Education
  {
    name: 'Introduction to Education',
    code: 'EDU-101',
    description: 'Overview of education systems, teaching profession, and educational philosophy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundations of Education',
    isCompulsory: false,
    icon: '🎓',
    topics: [
      { title: 'What is Education?', description: 'Purposes and goals of education', order: 1 },
      { title: 'Education Systems', description: 'Structure of education in Zimbabwe and globally', order: 2 },
      { title: 'Teaching as a Profession', description: 'Roles, responsibilities, and ethics', order: 3 },
      { title: 'Learning Theories', description: 'How students learn', order: 4 },
      { title: 'Contemporary Issues', description: 'Current challenges in education', order: 5 }
    ]
  },
  {
    name: 'Philosophy of Education',
    code: 'EDU-201',
    description: 'Examination of educational philosophies and their implications for teaching and learning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundations of Education',
    isCompulsory: false,
    icon: '💭',
    topics: [
      { title: 'Educational Philosophies', description: 'Idealism, realism, pragmatism, and existentialism', order: 1 },
      { title: 'African Philosophy of Education', description: 'Ubuntu and indigenous knowledge', order: 2 },
      { title: 'Aims of Education', description: 'What should education achieve?', order: 3 },
      { title: 'Teacher as Philosopher', description: 'Developing your educational philosophy', order: 4 },
      { title: 'Critical Pedagogy', description: 'Education for social justice', order: 5 }
    ]
  },
  {
    name: 'Sociology of Education',
    code: 'EDU-202',
    description: 'Study of education as a social institution and its relationship to society.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundations of Education',
    isCompulsory: false,
    icon: '🏫',
    topics: [
      { title: 'Education & Society', description: 'Social functions of schooling', order: 1 },
      { title: 'Social Class & Education', description: 'Educational inequality and access', order: 2 },
      { title: 'School Culture', description: 'Hidden curriculum and socialization', order: 3 },
      { title: 'Gender in Education', description: 'Gender equity and achievement', order: 4 },
      { title: 'Education & Social Change', description: 'Schools as agents of change', order: 5 }
    ]
  },
  {
    name: 'History of Education',
    code: 'EDU-203',
    description: 'Historical development of education systems from ancient times to the present.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundations of Education',
    isCompulsory: false,
    icon: '📜',
    topics: [
      { title: 'Ancient Education', description: 'Education in ancient civilizations', order: 1 },
      { title: 'Medieval & Renaissance Education', description: 'Universities and humanist education', order: 2 },
      { title: 'Colonial Education in Africa', description: 'Missionary schools and colonial policies', order: 3 },
      { title: 'Post-Independence Education', description: 'Education reform in Zimbabwe', order: 4 },
      { title: 'Global Education Movements', description: 'Education for All and SDGs', order: 5 }
    ]
  },
  {
    name: 'Inclusive Education',
    code: 'EDU-204',
    description: 'Principles and practices of inclusive education for all learners including those with special needs.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundations of Education',
    isCompulsory: false,
    icon: '♿',
    topics: [
      { title: 'What is Inclusion?', description: 'Inclusive education principles and values', order: 1 },
      { title: 'Barriers to Learning', description: 'Identifying and removing barriers', order: 2 },
      { title: 'Diverse Learners', description: 'Supporting students with varied needs', order: 3 },
      { title: 'Inclusive Classroom Practices', description: 'Universal Design for Learning (UDL)', order: 4 },
      { title: 'Collaboration', description: 'Working with parents and specialists', order: 5 }
    ]
  },

  // 2. Teaching Methods (Pedagogy)
  {
    name: 'Teaching Methods for Early Childhood',
    code: 'EDU-301',
    description: 'Developmentally appropriate teaching strategies for young children (ages 0-8).',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teaching Methods (Pedagogy)',
    isCompulsory: false,
    icon: '🧸',
    topics: [
      { title: 'Child Development', description: 'Physical, cognitive, and social-emotional development', order: 1 },
      { title: 'Play-Based Learning', description: 'Learning through play and exploration', order: 2 },
      { title: 'Early Literacy', description: 'Emergent reading and writing', order: 3 },
      { title: 'Early Numeracy', description: 'Mathematical concepts for young children', order: 4 },
      { title: 'Creating Learning Environments', description: 'Classroom setup and materials', order: 5 }
    ]
  },
  {
    name: 'Teaching Methods for Primary School',
    code: 'EDU-302',
    description: 'Effective teaching strategies for primary school students (ages 6-12).',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teaching Methods (Pedagogy)',
    isCompulsory: false,
    icon: '📚',
    topics: [
      { title: 'Primary Curriculum', description: 'Overview of primary school subjects', order: 1 },
      { title: 'Literacy Instruction', description: 'Teaching reading, writing, and comprehension', order: 2 },
      { title: 'Mathematics Instruction', description: 'Teaching numeracy and problem-solving', order: 3 },
      { title: 'Integrated Learning', description: 'Thematic and project-based learning', order: 4 },
      { title: 'Differentiation', description: 'Meeting diverse learning needs', order: 5 }
    ]
  },
  {
    name: 'Secondary School Teaching Methods',
    code: 'EDU-303',
    description: 'Subject-specific teaching methods for secondary school (ages 12-18).',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teaching Methods (Pedagogy)',
    isCompulsory: false,
    icon: '🏫',
    topics: [
      { title: 'Adolescent Learners', description: 'Understanding teenage development', order: 1 },
      { title: 'Subject-Specific Pedagogy', description: 'Teaching methods for different subjects', order: 2 },
      { title: 'Critical Thinking', description: 'Developing higher-order thinking skills', order: 3 },
      { title: 'Exam Preparation', description: 'Preparing students for O Level and A Level', order: 4 },
      { title: 'Student Engagement', description: 'Motivating secondary students', order: 5 }
    ]
  },
  {
    name: 'Classroom Management',
    code: 'EDU-304',
    description: 'Strategies for creating positive learning environments and managing student behavior.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teaching Methods (Pedagogy)',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Classroom Organization', description: 'Physical layout and routines', order: 1 },
      { title: 'Positive Behavior Support', description: 'Preventing and addressing misbehavior', order: 2 },
      { title: 'Rules & Expectations', description: 'Establishing classroom norms', order: 3 },
      { title: 'Conflict Resolution', description: 'Handling disputes and disruptions', order: 4 },
      { title: 'Building Relationships', description: 'Creating a supportive classroom community', order: 5 }
    ]
  },
  {
    name: 'Assessment & Evaluation',
    code: 'EDU-305',
    description: 'Principles and practices of student assessment including formative and summative evaluation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teaching Methods (Pedagogy)',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Types of Assessment', description: 'Formative, summative, and diagnostic assessment', order: 1 },
      { title: 'Designing Assessments', description: 'Creating valid and reliable tests', order: 2 },
      { title: 'Grading & Feedback', description: 'Providing constructive feedback', order: 3 },
      { title: 'Alternative Assessment', description: 'Portfolios, projects, and performance tasks', order: 4 },
      { title: 'Using Data', description: 'Analyzing assessment results to improve teaching', order: 5 }
    ]
  },
  {
    name: 'Curriculum Design',
    code: 'EDU-306',
    description: 'Principles of curriculum development, planning, and implementation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teaching Methods (Pedagogy)',
    isCompulsory: false,
    icon: '📋',
    topics: [
      { title: 'Curriculum Models', description: 'Tyler, Taba, and other curriculum models', order: 1 },
      { title: 'Learning Objectives', description: 'Writing clear and measurable objectives', order: 2 },
      { title: 'Content Selection', description: 'Choosing what to teach', order: 3 },
      { title: 'Lesson Planning', description: 'Daily and unit planning', order: 4 },
      { title: 'Curriculum Evaluation', description: 'Assessing curriculum effectiveness', order: 5 }
    ]
  },

  // 3. Teacher Certification Prep
  {
    name: 'Teacher Certification Exam Prep (General)',
    code: 'EDU-401',
    description: 'Comprehensive preparation for teacher certification exams covering pedagogy and content knowledge.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teacher Certification Prep',
    isCompulsory: false,
    icon: '📝',
    topics: [
      { title: 'Exam Overview', description: 'Structure and content of certification exams', order: 1 },
      { title: 'Pedagogical Knowledge', description: 'Teaching methods and learning theories', order: 2 },
      { title: 'Content Knowledge', description: 'Subject matter expertise', order: 3 },
      { title: 'Test-Taking Strategies', description: 'Time management and question analysis', order: 4 },
      { title: 'Practice Tests', description: 'Sample questions and mock exams', order: 5 }
    ]
  },
  {
    name: 'Reading Instruction Certification Prep',
    code: 'EDU-402',
    description: 'Specialized preparation for reading instruction certification.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teacher Certification Prep',
    isCompulsory: false,
    icon: '📖',
    topics: [
      { title: 'Phonics & Phonemic Awareness', description: 'Teaching foundational reading skills', order: 1 },
      { title: 'Reading Comprehension', description: 'Strategies for understanding text', order: 2 },
      { title: 'Vocabulary Development', description: 'Building word knowledge', order: 3 },
      { title: 'Fluency', description: 'Developing reading speed and accuracy', order: 4 },
      { title: 'Assessment', description: 'Diagnosing reading difficulties', order: 5 }
    ]
  },
  {
    name: 'Special Education Certification Prep',
    code: 'EDU-403',
    description: 'Preparation for special education teacher certification.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Teacher Certification Prep',
    isCompulsory: false,
    icon: '♿',
    topics: [
      { title: 'Special Education Law', description: 'Legal requirements and IEPs', order: 1 },
      { title: 'Disability Categories', description: 'Understanding different disabilities', order: 2 },
      { title: 'Assessment & Identification', description: 'Evaluating students for special education', order: 3 },
      { title: 'Instructional Strategies', description: 'Differentiation and accommodations', order: 4 },
      { title: 'Collaboration', description: 'Working with families and specialists', order: 5 }
    ]
  },

  // 4. Child & Adolescent Development
  {
    name: 'Child Development',
    code: 'EDU-501',
    description: 'Study of physical, cognitive, social, and emotional development from birth to age 12.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Child & Adolescent Development',
    isCompulsory: false,
    icon: '👶',
    topics: [
      { title: 'Prenatal & Infancy', description: 'Development from conception to age 2', order: 1 },
      { title: 'Early Childhood (2-6)', description: 'Preschool development', order: 2 },
      { title: 'Middle Childhood (6-12)', description: 'School-age development', order: 3 },
      { title: 'Cognitive Development', description: 'Piaget and information processing', order: 4 },
      { title: 'Social-Emotional Development', description: 'Attachment, emotions, and relationships', order: 5 }
    ]
  },
  {
    name: 'Adolescent Psychology',
    code: 'EDU-502',
    description: 'Study of teenage development including physical, cognitive, and social changes.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Child & Adolescent Development',
    isCompulsory: false,
    icon: '🧑',
    topics: [
      { title: 'Physical Development', description: 'Puberty and brain development', order: 1 },
      { title: 'Cognitive Development', description: 'Abstract thinking and decision-making', order: 2 },
      { title: 'Identity Formation', description: 'Erikson and identity development', order: 3 },
      { title: 'Peer Relationships', description: 'Friendships and peer pressure', order: 4 },
      { title: 'Risk Behaviors', description: 'Substance use, sexuality, and mental health', order: 5 }
    ]
  },
  {
    name: 'Educational Guidance & Counseling',
    code: 'EDU-503',
    description: 'Counseling skills for teachers including guidance, career counseling, and student support.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Child & Adolescent Development',
    isCompulsory: false,
    icon: '🤝',
    topics: [
      { title: 'Role of School Counselor', description: 'Guidance services in schools', order: 1 },
      { title: 'Counseling Skills', description: 'Active listening and empathy', order: 2 },
      { title: 'Academic Guidance', description: 'Supporting student achievement', order: 3 },
      { title: 'Career Counseling', description: 'Helping students plan their futures', order: 4 },
      { title: 'Crisis Intervention', description: 'Supporting students in distress', order: 5 }
    ]
  },

  // 5. Special Needs & Inclusive Teaching
  {
    name: 'Special Education Basics',
    code: 'EDU-601',
    description: 'Introduction to special education including disability categories and inclusive practices.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Special Needs & Inclusive Teaching',
    isCompulsory: false,
    icon: '♿',
    topics: [
      { title: 'Understanding Disabilities', description: 'Types of disabilities and their characteristics', order: 1 },
      { title: 'Special Education Law', description: 'Rights of students with disabilities', order: 2 },
      { title: 'Individualized Education Plans (IEPs)', description: 'Developing and implementing IEPs', order: 3 },
      { title: 'Inclusive Practices', description: 'Strategies for inclusive classrooms', order: 4 },
      { title: 'Assistive Technology', description: 'Tools to support learning', order: 5 }
    ]
  },
  {
    name: 'Learning Disabilities',
    code: 'EDU-602',
    description: 'In-depth study of learning disabilities including dyslexia, dyscalculia, and ADHD.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Special Needs & Inclusive Teaching',
    isCompulsory: false,
    icon: '📚',
    topics: [
      { title: 'What are Learning Disabilities?', description: 'Defining and identifying LDs', order: 1 },
      { title: 'Dyslexia', description: 'Reading disabilities and interventions', order: 2 },
      { title: 'Dyscalculia', description: 'Math disabilities and support strategies', order: 3 },
      { title: 'ADHD', description: 'Attention deficit hyperactivity disorder', order: 4 },
      { title: 'Interventions', description: 'Evidence-based teaching strategies', order: 5 }
    ]
  },
  {
    name: 'Autism Spectrum Support',
    code: 'EDU-603',
    description: 'Understanding and supporting students with autism spectrum disorders.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Special Needs & Inclusive Teaching',
    isCompulsory: false,
    icon: '🧩',
    topics: [
      { title: 'Understanding Autism', description: 'Characteristics and spectrum', order: 1 },
      { title: 'Communication Challenges', description: 'Supporting verbal and nonverbal communication', order: 2 },
      { title: 'Social Skills', description: 'Teaching social interaction', order: 3 },
      { title: 'Sensory Issues', description: 'Managing sensory sensitivities', order: 4 },
      { title: 'Behavioral Interventions', description: 'ABA and other approaches', order: 5 }
    ]
  },
  {
    name: 'Differentiated Instruction',
    code: 'EDU-604',
    description: 'Strategies for tailoring instruction to meet diverse learning needs.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Special Needs & Inclusive Teaching',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'What is Differentiation?', description: 'Principles of differentiated instruction', order: 1 },
      { title: 'Differentiating Content', description: 'Adjusting what students learn', order: 2 },
      { title: 'Differentiating Process', description: 'Varying how students learn', order: 3 },
      { title: 'Differentiating Product', description: 'Offering choice in assessments', order: 4 },
      { title: 'Flexible Grouping', description: 'Organizing students for learning', order: 5 }
    ]
  },

  // 6. Educational Technology
  {
    name: 'ICT Integration in Teaching',
    code: 'EDU-701',
    description: 'Using information and communication technology to enhance teaching and learning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Educational Technology',
    isCompulsory: false,
    icon: '💻',
    topics: [
      { title: 'Technology in Education', description: 'Benefits and challenges of ICT', order: 1 },
      { title: 'Digital Literacy', description: 'Teaching students to use technology', order: 2 },
      { title: 'Educational Software', description: 'Apps and programs for learning', order: 3 },
      { title: 'Internet Safety', description: 'Protecting students online', order: 4 },
      { title: 'TPACK Framework', description: 'Integrating technology, pedagogy, and content', order: 5 }
    ]
  },
  {
    name: 'Using Digital Tools in the Classroom',
    code: 'EDU-702',
    description: 'Practical use of digital tools including interactive whiteboards, tablets, and educational apps.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Educational Technology',
    isCompulsory: false,
    icon: '📱',
    topics: [
      { title: 'Interactive Whiteboards', description: 'Using SMART Boards and projectors', order: 1 },
      { title: 'Tablets & Mobile Devices', description: 'iPads and Android tablets in education', order: 2 },
      { title: 'Educational Apps', description: 'Khan Academy, Duolingo, and other apps', order: 3 },
      { title: 'Multimedia Creation', description: 'Creating videos, podcasts, and presentations', order: 4 },
      { title: 'Classroom Response Systems', description: 'Polling and formative assessment tools', order: 5 }
    ]
  },
  {
    name: 'Online & Blended Learning Techniques',
    code: 'EDU-703',
    description: 'Designing and delivering online and blended learning experiences.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Educational Technology',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'Online Learning Models', description: 'Synchronous vs. asynchronous learning', order: 1 },
      { title: 'Blended Learning', description: 'Combining online and face-to-face instruction', order: 2 },
      { title: 'Designing Online Courses', description: 'Course structure and content', order: 3 },
      { title: 'Engaging Online Learners', description: 'Interaction and motivation', order: 4 },
      { title: 'Assessment in Online Learning', description: 'Evaluating student learning online', order: 5 }
    ]
  },
  {
    name: 'Learning Management Systems (LMS)',
    code: 'EDU-704',
    description: 'Using LMS platforms like Moodle, Google Classroom, and Canvas for teaching.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Educational Technology',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'What is an LMS?', description: 'Features and benefits of LMS', order: 1 },
      { title: 'Google Classroom', description: 'Setting up and using Google Classroom', order: 2 },
      { title: 'Moodle', description: 'Creating courses in Moodle', order: 3 },
      { title: 'Canvas', description: 'Using Canvas for online teaching', order: 4 },
      { title: 'Managing Online Courses', description: 'Organization, grading, and communication', order: 5 }
    ]
  },

  // 7. Professional Teacher Skills
  {
    name: 'Classroom Leadership',
    code: 'EDU-801',
    description: 'Developing leadership skills for effective classroom management and student engagement.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Professional Teacher Skills',
    isCompulsory: false,
    icon: '👨‍🏫',
    topics: [
      { title: 'Teacher as Leader', description: 'Leadership roles and responsibilities', order: 1 },
      { title: 'Building Classroom Community', description: 'Creating a positive culture', order: 2 },
      { title: 'Student Empowerment', description: 'Giving students voice and choice', order: 3 },
      { title: 'Conflict Resolution', description: 'Mediating disputes and building peace', order: 4 },
      { title: 'Leading Change', description: 'Innovation and continuous improvement', order: 5 }
    ]
  },
  {
    name: 'Communication for Teachers',
    code: 'EDU-802',
    description: 'Effective communication skills for teachers including parent communication and collaboration.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Professional Teacher Skills',
    isCompulsory: false,
    icon: '💬',
    topics: [
      { title: 'Verbal Communication', description: 'Clear and effective speaking', order: 1 },
      { title: 'Nonverbal Communication', description: 'Body language and tone', order: 2 },
      { title: 'Parent Communication', description: 'Conferences and updates', order: 3 },
      { title: 'Colleague Collaboration', description: 'Working with other teachers', order: 4 },
      { title: 'Written Communication', description: 'Emails, reports, and documentation', order: 5 }
    ]
  },
  {
    name: 'Lesson Planning',
    code: 'EDU-803',
    description: 'Designing effective lesson plans including objectives, activities, and assessments.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Professional Teacher Skills',
    isCompulsory: false,
    icon: '📝',
    topics: [
      { title: 'Lesson Plan Components', description: 'Objectives, materials, procedures, and assessment', order: 1 },
      { title: 'Writing Learning Objectives', description: 'SMART and measurable objectives', order: 2 },
      { title: 'Selecting Activities', description: 'Engaging and effective learning activities', order: 3 },
      { title: 'Timing & Pacing', description: 'Managing lesson time effectively', order: 4 },
      { title: 'Reflection & Revision', description: 'Improving lessons based on outcomes', order: 5 }
    ]
  },
  {
    name: 'Student Motivation Techniques',
    code: 'EDU-804',
    description: 'Strategies for motivating students and fostering a love of learning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Professional Teacher Skills',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Motivation Theories', description: 'Intrinsic vs. extrinsic motivation', order: 1 },
      { title: 'Building Self-Efficacy', description: 'Helping students believe in themselves', order: 2 },
      { title: 'Goal Setting', description: 'Teaching students to set and achieve goals', order: 3 },
      { title: 'Praise & Feedback', description: 'Effective reinforcement strategies', order: 4 },
      { title: 'Engaging Lessons', description: 'Making learning relevant and interesting', order: 5 }
    ]
  },
  {
    name: 'Ethics & Professional Conduct',
    code: 'EDU-805',
    description: 'Professional ethics, responsibilities, and conduct for teachers.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Professional Teacher Skills',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Code of Ethics', description: 'Professional standards for teachers', order: 1 },
      { title: 'Confidentiality', description: 'Protecting student information', order: 2 },
      { title: 'Boundaries', description: 'Appropriate teacher-student relationships', order: 3 },
      { title: 'Equity & Fairness', description: 'Treating all students fairly', order: 4 },
      { title: 'Professional Development', description: 'Lifelong learning and growth', order: 5 }
    ]
  },

  // 8. Education Administration & Leadership
  {
    name: 'School Management',
    code: 'EDU-901',
    description: 'Principles and practices of school administration and management.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education Administration & Leadership',
    isCompulsory: false,
    icon: '🏫',
    topics: [
      { title: 'School Organization', description: 'Structure and governance of schools', order: 1 },
      { title: 'Human Resource Management', description: 'Hiring, evaluating, and supporting staff', order: 2 },
      { title: 'Financial Management', description: 'Budgeting and resource allocation', order: 3 },
      { title: 'Facilities Management', description: 'Maintaining school buildings and grounds', order: 4 },
      { title: 'Community Relations', description: 'Engaging parents and stakeholders', order: 5 }
    ]
  },
  {
    name: 'Educational Leadership',
    code: 'EDU-902',
    description: 'Leadership theories and practices for school principals and administrators.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education Administration & Leadership',
    isCompulsory: false,
    icon: '👔',
    topics: [
      { title: 'Leadership Theories', description: 'Transformational, instructional, and distributed leadership', order: 1 },
      { title: 'Vision & Mission', description: 'Setting direction for schools', order: 2 },
      { title: 'Leading Change', description: 'Managing innovation and improvement', order: 3 },
      { title: 'Building Culture', description: 'Creating positive school culture', order: 4 },
      { title: 'Ethical Leadership', description: 'Leading with integrity and values', order: 5 }
    ]
  },
  {
    name: 'Policy & Educational Planning',
    code: 'EDU-903',
    description: 'Educational policy analysis, development, and strategic planning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Education Administration & Leadership',
    isCompulsory: false,
    icon: '📋',
    topics: [
      { title: 'Education Policy', description: 'National and local education policies', order: 1 },
      { title: 'Policy Analysis', description: 'Evaluating policy effectiveness', order: 2 },
      { title: 'Strategic Planning', description: 'Long-term planning for schools', order: 3 },
      { title: 'Curriculum Policy', description: 'Curriculum standards and frameworks', order: 4 },
      { title: 'Equity & Access', description: 'Policies for inclusive education', order: 5 }
    ]
  }
];

async function seedSocialScienceEducationCourses() {
  console.log('🧠 Starting Social Science & Education Courses seeding...\n');

  for (const course of socialScienceEducationCourses) {
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

  console.log('✅ Social Science & Education Courses seeding complete!\n');
  
  // Print summary
  const courseCount = socialScienceEducationCourses.length;
  const topicCount = socialScienceEducationCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`\n   Social Science Courses:`);
  console.log(`   - Psychology (7 courses)`);
  console.log(`   - Sociology (6 courses)`);
  console.log(`   - Anthropology (3 courses)`);
  console.log(`   - Political Science (4 courses)`);
  console.log(`   - Economics (4 courses)`);
  console.log(`   - Social Work & Community Development (4 courses)`);
  console.log(`\n   Education & Teaching Courses:`);
  console.log(`   - Foundations of Education (5 courses)`);
  console.log(`   - Teaching Methods (6 courses)`);
  console.log(`   - Teacher Certification Prep (3 courses)`);
  console.log(`   - Child & Adolescent Development (3 courses)`);
  console.log(`   - Special Needs & Inclusive Teaching (4 courses)`);
  console.log(`   - Educational Technology (4 courses)`);
  console.log(`   - Professional Teacher Skills (5 courses)`);
  console.log(`   - Education Administration & Leadership (3 courses)`);
}

seedSocialScienceEducationCourses()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
