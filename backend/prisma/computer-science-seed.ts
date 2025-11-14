import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const computerScienceCourses = [
  // 1. Core Computer Science Courses
  {
    name: 'Introduction to Computer Science',
    code: 'CS-101',
    description: 'Foundational course covering computational thinking, problem-solving, programming basics, and the role of computers in society.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Computer Science',
    isCompulsory: false,
    icon: '💻',
    topics: [
      { title: 'Computational Thinking', description: 'Problem decomposition, pattern recognition, and algorithmic thinking', order: 1 },
      { title: 'Computer Systems Overview', description: 'Hardware, software, and system architecture basics', order: 2 },
      { title: 'Programming Basics', description: 'Variables, data types, control structures, and functions', order: 3 },
      { title: 'Problem-Solving Techniques', description: 'Pseudocode, flowcharts, and algorithm design', order: 4 },
      { title: 'Computing in Society', description: 'Ethics, privacy, and social impact of technology', order: 5 }
    ]
  },
  {
    name: 'Programming Fundamentals',
    code: 'CS-102',
    description: 'Core programming concepts using Python, Java, or C++. Covers syntax, data structures, functions, and object-oriented programming basics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Computer Science',
    isCompulsory: false,
    icon: '🐍',
    topics: [
      { title: 'Programming Languages Overview', description: 'Python, Java, C++ comparison and selection', order: 1 },
      { title: 'Variables & Data Types', description: 'Integers, floats, strings, booleans, and type conversion', order: 2 },
      { title: 'Control Structures', description: 'If-else, loops, and conditional logic', order: 3 },
      { title: 'Functions & Modules', description: 'Function definition, parameters, return values, and code organization', order: 4 },
      { title: 'Basic Data Structures', description: 'Lists, arrays, dictionaries, and sets', order: 5 }
    ]
  },
  {
    name: 'Data Structures & Algorithms',
    code: 'CS-201',
    description: 'Advanced data structures (trees, graphs, hash tables) and algorithms (sorting, searching, dynamic programming). Essential for technical interviews.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Computer Science',
    isCompulsory: false,
    icon: '🌳',
    topics: [
      { title: 'Arrays & Linked Lists', description: 'Implementation and time complexity analysis', order: 1 },
      { title: 'Stacks, Queues & Heaps', description: 'Abstract data types and applications', order: 2 },
      { title: 'Trees & Graphs', description: 'Binary trees, BST, graph traversal algorithms', order: 3 },
      { title: 'Sorting & Searching', description: 'Quick sort, merge sort, binary search, hash tables', order: 4 },
      { title: 'Dynamic Programming', description: 'Memoization, optimization problems, and recursion', order: 5 }
    ]
  },
  {
    name: 'Computer Architecture',
    code: 'CS-202',
    description: 'Computer organization and design including CPU, memory, I/O systems, and instruction set architecture.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Computer Science',
    isCompulsory: false,
    icon: '🖥️',
    topics: [
      { title: 'Digital Logic', description: 'Boolean algebra, logic gates, and combinational circuits', order: 1 },
      { title: 'CPU Architecture', description: 'Instruction cycle, pipelining, and processor design', order: 2 },
      { title: 'Memory Systems', description: 'Cache, RAM, virtual memory, and memory hierarchy', order: 3 },
      { title: 'I/O Systems', description: 'Input/output devices and interfacing', order: 4 },
      { title: 'Assembly Language', description: 'Low-level programming and machine code', order: 5 }
    ]
  },
  {
    name: 'Operating Systems',
    code: 'CS-301',
    description: 'Operating system concepts including process management, memory management, file systems, and concurrency.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Computer Science',
    isCompulsory: false,
    icon: '⚙️',
    topics: [
      { title: 'OS Fundamentals', description: 'OS structure, system calls, and kernel modes', order: 1 },
      { title: 'Process Management', description: 'Processes, threads, scheduling, and synchronization', order: 2 },
      { title: 'Memory Management', description: 'Paging, segmentation, and virtual memory', order: 3 },
      { title: 'File Systems', description: 'File organization, directories, and storage management', order: 4 },
      { title: 'Concurrency & Deadlocks', description: 'Mutual exclusion, semaphores, and deadlock prevention', order: 5 }
    ]
  },
  {
    name: 'Discrete Mathematics',
    code: 'CS-103',
    description: 'Mathematical foundations for computer science including logic, sets, relations, graphs, and combinatorics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Computer Science',
    isCompulsory: false,
    icon: '🔢',
    topics: [
      { title: 'Logic & Proofs', description: 'Propositional logic, predicate logic, and proof techniques', order: 1 },
      { title: 'Sets & Functions', description: 'Set theory, relations, and function properties', order: 2 },
      { title: 'Combinatorics', description: 'Counting principles, permutations, and combinations', order: 3 },
      { title: 'Graph Theory', description: 'Graph properties, trees, and graph algorithms', order: 4 },
      { title: 'Number Theory', description: 'Modular arithmetic, GCD, and cryptography basics', order: 5 }
    ]
  },
  {
    name: 'Theory of Computation',
    code: 'CS-302',
    description: 'Formal languages, automata theory, computability, and complexity theory. Theoretical foundations of computer science.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Computer Science',
    isCompulsory: false,
    icon: '🤖',
    topics: [
      { title: 'Finite Automata', description: 'DFA, NFA, and regular expressions', order: 1 },
      { title: 'Context-Free Grammars', description: 'CFG, pushdown automata, and parsing', order: 2 },
      { title: 'Turing Machines', description: 'TM models and computability', order: 3 },
      { title: 'Decidability', description: 'Decidable and undecidable problems', order: 4 },
      { title: 'Complexity Theory', description: 'P, NP, NP-complete problems', order: 5 }
    ]
  },

  // 2. Software Development & Engineering
  {
    name: 'Software Engineering',
    code: 'SE-201',
    description: 'Software development lifecycle, requirements engineering, design patterns, testing, and project management.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Software Development & Engineering',
    isCompulsory: false,
    icon: '🛠️',
    topics: [
      { title: 'SDLC Models', description: 'Waterfall, Agile, Spiral, and DevOps methodologies', order: 1 },
      { title: 'Requirements Engineering', description: 'Gathering, analysis, and specification', order: 2 },
      { title: 'Software Design', description: 'Design patterns, UML, and architecture', order: 3 },
      { title: 'Testing & QA', description: 'Unit testing, integration testing, and test automation', order: 4 },
      { title: 'Maintenance & Evolution', description: 'Version control, refactoring, and legacy systems', order: 5 }
    ]
  },
  {
    name: 'Object-Oriented Programming',
    code: 'SE-202',
    description: 'OOP principles including encapsulation, inheritance, polymorphism, and abstraction using Java or C++.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Software Development & Engineering',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Classes & Objects', description: 'Class definition, object instantiation, and constructors', order: 1 },
      { title: 'Encapsulation', description: 'Access modifiers, getters, setters, and data hiding', order: 2 },
      { title: 'Inheritance', description: 'Class hierarchies, method overriding, and super keyword', order: 3 },
      { title: 'Polymorphism', description: 'Method overloading, interfaces, and abstract classes', order: 4 },
      { title: 'Design Patterns', description: 'Singleton, Factory, Observer, and MVC patterns', order: 5 }
    ]
  },
  {
    name: 'Web Development',
    code: 'SE-203',
    description: 'Full web development stack including HTML, CSS, JavaScript, responsive design, and modern frameworks.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Software Development & Engineering',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'HTML & Semantic Markup', description: 'HTML5, forms, and accessibility', order: 1 },
      { title: 'CSS & Styling', description: 'CSS3, Flexbox, Grid, and animations', order: 2 },
      { title: 'JavaScript Fundamentals', description: 'DOM manipulation, events, and ES6+ features', order: 3 },
      { title: 'Responsive Design', description: 'Mobile-first design and media queries', order: 4 },
      { title: 'Modern Frameworks', description: 'React, Vue, Angular, or Next.js', order: 5 }
    ]
  },
  {
    name: 'Mobile App Development',
    code: 'SE-204',
    description: 'Native and cross-platform mobile app development for Android and iOS using modern frameworks.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Software Development & Engineering',
    isCompulsory: false,
    icon: '📱',
    topics: [
      { title: 'Mobile Development Overview', description: 'Native vs. cross-platform development', order: 1 },
      { title: 'Android Development', description: 'Java/Kotlin, Android Studio, and UI components', order: 2 },
      { title: 'iOS Development', description: 'Swift, Xcode, and iOS frameworks', order: 3 },
      { title: 'Cross-Platform Frameworks', description: 'React Native, Flutter, or Xamarin', order: 4 },
      { title: 'App Deployment', description: 'Publishing to Google Play and App Store', order: 5 }
    ]
  },
  {
    name: 'Full-Stack Development',
    code: 'SE-301',
    description: 'Complete full-stack development including frontend, backend, databases, and deployment. Build production-ready web applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Software Development & Engineering',
    isCompulsory: false,
    icon: '🚀',
    topics: [
      { title: 'Frontend Development', description: 'React, Vue, or Angular with state management', order: 1 },
      { title: 'Backend Development', description: 'Node.js, Express, or Django REST APIs', order: 2 },
      { title: 'Database Integration', description: 'SQL and NoSQL database connections', order: 3 },
      { title: 'Authentication & Security', description: 'JWT, OAuth, and secure coding practices', order: 4 },
      { title: 'Deployment & Hosting', description: 'Docker, CI/CD, and cloud deployment', order: 5 }
    ]
  },
  {
    name: 'Agile & Scrum',
    code: 'SE-205',
    description: 'Agile methodologies and Scrum framework for iterative software development and team collaboration.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Software Development & Engineering',
    isCompulsory: false,
    icon: '🔄',
    topics: [
      { title: 'Agile Principles', description: 'Agile manifesto and values', order: 1 },
      { title: 'Scrum Framework', description: 'Roles, events, and artifacts', order: 2 },
      { title: 'Sprint Planning', description: 'User stories, estimation, and backlog management', order: 3 },
      { title: 'Daily Standups & Reviews', description: 'Team collaboration and retrospectives', order: 4 },
      { title: 'Agile Tools', description: 'Jira, Trello, and project tracking', order: 5 }
    ]
  },
  {
    name: 'Version Control (Git & GitHub)',
    code: 'SE-206',
    description: 'Version control systems, Git commands, branching strategies, and collaboration using GitHub.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Software Development & Engineering',
    isCompulsory: false,
    icon: '🔀',
    topics: [
      { title: 'Git Fundamentals', description: 'Init, add, commit, push, and pull', order: 1 },
      { title: 'Branching & Merging', description: 'Branch creation, merge conflicts, and resolution', order: 2 },
      { title: 'GitHub Collaboration', description: 'Pull requests, code reviews, and issues', order: 3 },
      { title: 'Git Workflows', description: 'Git Flow, GitHub Flow, and trunk-based development', order: 4 },
      { title: 'Advanced Git', description: 'Rebase, cherry-pick, and history manipulation', order: 5 }
    ]
  },

  // 3. Business Information Systems
  {
    name: 'Business Information Systems',
    code: 'BIS-201',
    description: 'Information systems in business contexts including ERP, CRM, SCM, and business intelligence.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Business Information Systems',
    isCompulsory: false,
    icon: '💼',
    topics: [
      { title: 'IS in Business', description: 'Role of information systems in organizations', order: 1 },
      { title: 'Enterprise Systems', description: 'ERP, CRM, and SCM systems', order: 2 },
      { title: 'Business Intelligence', description: 'Data warehousing and analytics', order: 3 },
      { title: 'E-Business Systems', description: 'E-commerce and digital business models', order: 4 },
      { title: 'IS Strategy', description: 'Aligning IS with business goals', order: 5 }
    ]
  },
  {
    name: 'Enterprise Resource Planning (ERP)',
    code: 'BIS-202',
    description: 'ERP systems for integrating business processes including SAP, Oracle, and Microsoft Dynamics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Business Information Systems',
    isCompulsory: false,
    icon: '🏢',
    topics: [
      { title: 'ERP Fundamentals', description: 'ERP architecture and modules', order: 1 },
      { title: 'ERP Implementation', description: 'Selection, customization, and deployment', order: 2 },
      { title: 'SAP Overview', description: 'SAP modules and navigation', order: 3 },
      { title: 'ERP for Finance', description: 'Financial accounting and controlling', order: 4 },
      { title: 'ERP for Operations', description: 'Supply chain and manufacturing modules', order: 5 }
    ]
  },
  {
    name: 'Database Management for Business',
    code: 'BIS-203',
    description: 'Database design and management for business applications including data modeling and SQL.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Business Information Systems',
    isCompulsory: false,
    icon: '🗄️',
    topics: [
      { title: 'Database Concepts', description: 'DBMS, data models, and database architecture', order: 1 },
      { title: 'Data Modeling', description: 'ER diagrams and normalization', order: 2 },
      { title: 'SQL for Business', description: 'Queries, joins, and aggregations', order: 3 },
      { title: 'Database Administration', description: 'Backup, recovery, and performance tuning', order: 4 },
      { title: 'Business Applications', description: 'Reporting and data-driven decision making', order: 5 }
    ]
  },
  {
    name: 'IT for Business Decision-Making',
    code: 'BIS-204',
    description: 'Using IT tools and systems for business analytics, reporting, and strategic decision-making.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Business Information Systems',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Decision Support Systems', description: 'DSS architecture and applications', order: 1 },
      { title: 'Business Analytics', description: 'Descriptive, predictive, and prescriptive analytics', order: 2 },
      { title: 'Data Visualization', description: 'Dashboards and visual reporting', order: 3 },
      { title: 'Big Data for Business', description: 'Big data technologies and applications', order: 4 },
      { title: 'AI in Business', description: 'Machine learning for business insights', order: 5 }
    ]
  },
  {
    name: 'Information Systems Security',
    code: 'BIS-205',
    description: 'Securing business information systems including risk management, access control, and compliance.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Business Information Systems',
    isCompulsory: false,
    icon: '🔐',
    topics: [
      { title: 'IS Security Fundamentals', description: 'CIA triad and security principles', order: 1 },
      { title: 'Risk Management', description: 'Risk assessment and mitigation strategies', order: 2 },
      { title: 'Access Control', description: 'Authentication, authorization, and identity management', order: 3 },
      { title: 'Data Protection', description: 'Encryption, backup, and disaster recovery', order: 4 },
      { title: 'Compliance', description: 'GDPR, HIPAA, and regulatory requirements', order: 5 }
    ]
  },
  {
    name: 'Business Data Analytics',
    code: 'BIS-206',
    description: 'Analyzing business data using statistical methods, Excel, SQL, and analytics tools.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Business Information Systems',
    isCompulsory: false,
    icon: '📈',
    topics: [
      { title: 'Data Analysis Fundamentals', description: 'Data types, cleaning, and preparation', order: 1 },
      { title: 'Excel for Analytics', description: 'Pivot tables, formulas, and data analysis tools', order: 2 },
      { title: 'SQL for Analytics', description: 'Complex queries and data extraction', order: 3 },
      { title: 'Statistical Analysis', description: 'Descriptive statistics and hypothesis testing', order: 4 },
      { title: 'Analytics Tools', description: 'Tableau, Power BI, and reporting', order: 5 }
    ]
  },

  // 4. Data & Database Courses
  {
    name: 'SQL & Relational Databases',
    code: 'DB-201',
    description: 'Comprehensive SQL programming and relational database management including MySQL, PostgreSQL, and SQL Server.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Data & Database',
    isCompulsory: false,
    icon: '🗃️',
    topics: [
      { title: 'SQL Basics', description: 'SELECT, INSERT, UPDATE, DELETE statements', order: 1 },
      { title: 'Joins & Subqueries', description: 'INNER, OUTER joins and nested queries', order: 2 },
      { title: 'Aggregations & Grouping', description: 'GROUP BY, HAVING, and aggregate functions', order: 3 },
      { title: 'Indexes & Optimization', description: 'Query optimization and performance tuning', order: 4 },
      { title: 'Transactions & Constraints', description: 'ACID properties and data integrity', order: 5 }
    ]
  },
  {
    name: 'NoSQL Databases',
    code: 'DB-202',
    description: 'Non-relational databases including MongoDB, Redis, Cassandra, and document/key-value stores.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Data & Database',
    isCompulsory: false,
    icon: '📦',
    topics: [
      { title: 'NoSQL Overview', description: 'Types of NoSQL databases and use cases', order: 1 },
      { title: 'MongoDB', description: 'Document databases and CRUD operations', order: 2 },
      { title: 'Redis', description: 'Key-value stores and caching', order: 3 },
      { title: 'Cassandra', description: 'Wide-column stores and distributed databases', order: 4 },
      { title: 'NoSQL vs. SQL', description: 'Choosing the right database', order: 5 }
    ]
  },
  {
    name: 'Data Analytics',
    code: 'DA-201',
    description: 'Data analysis techniques using Python, pandas, and statistical methods for extracting insights from data.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Data & Database',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Python for Data Analysis', description: 'NumPy, pandas, and data manipulation', order: 1 },
      { title: 'Exploratory Data Analysis', description: 'Data profiling and summary statistics', order: 2 },
      { title: 'Data Cleaning', description: 'Handling missing data and outliers', order: 3 },
      { title: 'Statistical Analysis', description: 'Correlation, regression, and hypothesis testing', order: 4 },
      { title: 'Data Storytelling', description: 'Communicating insights effectively', order: 5 }
    ]
  },
  {
    name: 'Data Visualization',
    code: 'DA-202',
    description: 'Creating effective data visualizations using Tableau, Power BI, matplotlib, and D3.js.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Data & Database',
    isCompulsory: false,
    icon: '📉',
    topics: [
      { title: 'Visualization Principles', description: 'Chart types and best practices', order: 1 },
      { title: 'Tableau', description: 'Creating dashboards and interactive visualizations', order: 2 },
      { title: 'Power BI', description: 'Business intelligence and reporting', order: 3 },
      { title: 'Python Visualization', description: 'Matplotlib, Seaborn, and Plotly', order: 4 },
      { title: 'Web Visualization', description: 'D3.js and interactive charts', order: 5 }
    ]
  },
  {
    name: 'Big Data Concepts',
    code: 'DA-301',
    description: 'Big data technologies including Hadoop, Spark, and distributed computing for large-scale data processing.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Data & Database',
    isCompulsory: false,
    icon: '🌊',
    topics: [
      { title: 'Big Data Fundamentals', description: 'Volume, velocity, variety, and big data challenges', order: 1 },
      { title: 'Hadoop Ecosystem', description: 'HDFS, MapReduce, and Hadoop tools', order: 2 },
      { title: 'Apache Spark', description: 'Spark architecture and RDDs', order: 3 },
      { title: 'Data Pipelines', description: 'ETL processes and data workflows', order: 4 },
      { title: 'Big Data Applications', description: 'Real-world use cases and architectures', order: 5 }
    ]
  },
  {
    name: 'Database Design & Administration',
    code: 'DB-301',
    description: 'Advanced database design, normalization, indexing, and database administration tasks.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Data & Database',
    isCompulsory: false,
    icon: '🔧',
    topics: [
      { title: 'Database Design', description: 'ER modeling and schema design', order: 1 },
      { title: 'Normalization', description: '1NF, 2NF, 3NF, and BCNF', order: 2 },
      { title: 'Indexing Strategies', description: 'B-trees, hash indexes, and performance', order: 3 },
      { title: 'Backup & Recovery', description: 'Backup strategies and disaster recovery', order: 4 },
      { title: 'Performance Tuning', description: 'Query optimization and monitoring', order: 5 }
    ]
  },

  // 5. Cybersecurity Courses
  {
    name: 'Introduction to Cybersecurity',
    code: 'SEC-101',
    description: 'Fundamentals of cybersecurity including threats, vulnerabilities, and security principles.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Cybersecurity',
    isCompulsory: false,
    icon: '🛡️',
    topics: [
      { title: 'Cybersecurity Fundamentals', description: 'CIA triad and security concepts', order: 1 },
      { title: 'Threat Landscape', description: 'Types of cyber threats and attackers', order: 2 },
      { title: 'Cryptography Basics', description: 'Encryption, hashing, and digital signatures', order: 3 },
      { title: 'Security Policies', description: 'Developing security policies and procedures', order: 4 },
      { title: 'Incident Response', description: 'Detecting and responding to security incidents', order: 5 }
    ]
  },
  {
    name: 'Network Security',
    code: 'SEC-201',
    description: 'Securing computer networks including firewalls, VPNs, intrusion detection, and wireless security.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Cybersecurity',
    isCompulsory: false,
    icon: '🔒',
    topics: [
      { title: 'Network Security Fundamentals', description: 'Network threats and security architecture', order: 1 },
      { title: 'Firewalls & IDS/IPS', description: 'Firewall configuration and intrusion detection', order: 2 },
      { title: 'VPNs & Secure Tunneling', description: 'Virtual private networks and encryption', order: 3 },
      { title: 'Wireless Security', description: 'Wi-Fi security protocols and best practices', order: 4 },
      { title: 'Network Monitoring', description: 'Traffic analysis and security monitoring', order: 5 }
    ]
  },
  {
    name: 'Ethical Hacking & Penetration Testing',
    code: 'SEC-301',
    description: 'Ethical hacking techniques, penetration testing methodologies, and vulnerability assessment.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Cybersecurity',
    isCompulsory: false,
    icon: '🎩',
    topics: [
      { title: 'Ethical Hacking Fundamentals', description: 'Hacking phases and legal considerations', order: 1 },
      { title: 'Reconnaissance & Scanning', description: 'Information gathering and network scanning', order: 2 },
      { title: 'Exploitation Techniques', description: 'Exploiting vulnerabilities and gaining access', order: 3 },
      { title: 'Web Application Testing', description: 'OWASP Top 10 and web vulnerabilities', order: 4 },
      { title: 'Reporting & Remediation', description: 'Documenting findings and recommendations', order: 5 }
    ]
  },
  {
    name: 'Cybersecurity Tools & Techniques',
    code: 'SEC-202',
    description: 'Hands-on training with cybersecurity tools including Wireshark, Metasploit, Nmap, and Kali Linux.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Cybersecurity',
    isCompulsory: false,
    icon: '🔨',
    topics: [
      { title: 'Kali Linux', description: 'Kali Linux distribution and tools', order: 1 },
      { title: 'Network Analysis', description: 'Wireshark and packet analysis', order: 2 },
      { title: 'Vulnerability Scanning', description: 'Nmap, Nessus, and OpenVAS', order: 3 },
      { title: 'Exploitation Frameworks', description: 'Metasploit and exploit development', order: 4 },
      { title: 'Password Cracking', description: 'John the Ripper and Hashcat', order: 5 }
    ]
  },
  {
    name: 'Risk Management & Digital Forensics',
    code: 'SEC-302',
    description: 'Cybersecurity risk management and digital forensics for incident investigation and evidence collection.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Cybersecurity',
    isCompulsory: false,
    icon: '🔍',
    topics: [
      { title: 'Risk Assessment', description: 'Identifying and evaluating security risks', order: 1 },
      { title: 'Risk Mitigation', description: 'Controls and countermeasures', order: 2 },
      { title: 'Digital Forensics Fundamentals', description: 'Evidence collection and chain of custody', order: 3 },
      { title: 'Forensic Tools', description: 'EnCase, FTK, and Autopsy', order: 4 },
      { title: 'Incident Investigation', description: 'Analyzing security incidents and breaches', order: 5 }
    ]
  },

  // 6. AI & Machine Learning
  {
    name: 'Artificial Intelligence Fundamentals',
    code: 'AI-201',
    description: 'Introduction to AI including search algorithms, knowledge representation, and AI applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Artificial Intelligence & Machine Learning',
    isCompulsory: false,
    icon: '🤖',
    topics: [
      { title: 'AI Overview', description: 'History, applications, and AI paradigms', order: 1 },
      { title: 'Search Algorithms', description: 'Uninformed and informed search strategies', order: 2 },
      { title: 'Knowledge Representation', description: 'Logic, semantic networks, and ontologies', order: 3 },
      { title: 'Expert Systems', description: 'Rule-based systems and inference engines', order: 4 },
      { title: 'AI Ethics', description: 'Ethical considerations and responsible AI', order: 5 }
    ]
  },
  {
    name: 'Machine Learning Basics',
    code: 'ML-201',
    description: 'Supervised and unsupervised learning algorithms including regression, classification, and clustering.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Artificial Intelligence & Machine Learning',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'ML Fundamentals', description: 'Types of learning and ML workflow', order: 1 },
      { title: 'Supervised Learning', description: 'Linear regression, logistic regression, decision trees', order: 2 },
      { title: 'Unsupervised Learning', description: 'K-means, hierarchical clustering, PCA', order: 3 },
      { title: 'Model Evaluation', description: 'Cross-validation, metrics, and overfitting', order: 4 },
      { title: 'Scikit-learn', description: 'Python ML library and practical applications', order: 5 }
    ]
  },
  {
    name: 'Deep Learning',
    code: 'ML-301',
    description: 'Neural networks and deep learning including CNNs, RNNs, and modern architectures using TensorFlow/PyTorch.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Artificial Intelligence & Machine Learning',
    isCompulsory: false,
    icon: '🧬',
    topics: [
      { title: 'Neural Networks', description: 'Perceptrons, activation functions, backpropagation', order: 1 },
      { title: 'Convolutional Neural Networks', description: 'CNNs for image recognition', order: 2 },
      { title: 'Recurrent Neural Networks', description: 'RNNs and LSTMs for sequence data', order: 3 },
      { title: 'Transfer Learning', description: 'Pre-trained models and fine-tuning', order: 4 },
      { title: 'Deep Learning Frameworks', description: 'TensorFlow, Keras, and PyTorch', order: 5 }
    ]
  },
  {
    name: 'Natural Language Processing',
    code: 'ML-302',
    description: 'NLP techniques for text processing, sentiment analysis, and language models.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Artificial Intelligence & Machine Learning',
    isCompulsory: false,
    icon: '💬',
    topics: [
      { title: 'Text Preprocessing', description: 'Tokenization, stemming, and lemmatization', order: 1 },
      { title: 'Text Representation', description: 'Bag-of-words, TF-IDF, and word embeddings', order: 2 },
      { title: 'Sentiment Analysis', description: 'Opinion mining and emotion detection', order: 3 },
      { title: 'Language Models', description: 'N-grams, RNNs, and transformers', order: 4 },
      { title: 'NLP Applications', description: 'Chatbots, translation, and text generation', order: 5 }
    ]
  },
  {
    name: 'Neural Networks',
    code: 'ML-303',
    description: 'In-depth study of neural network architectures, training techniques, and optimization methods.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Artificial Intelligence & Machine Learning',
    isCompulsory: false,
    icon: '🕸️',
    topics: [
      { title: 'Network Architectures', description: 'Feedforward, convolutional, and recurrent networks', order: 1 },
      { title: 'Training Techniques', description: 'Gradient descent, momentum, and Adam optimizer', order: 2 },
      { title: 'Regularization', description: 'Dropout, batch normalization, and weight decay', order: 3 },
      { title: 'Hyperparameter Tuning', description: 'Grid search, random search, and Bayesian optimization', order: 4 },
      { title: 'Advanced Architectures', description: 'ResNet, GAN, and attention mechanisms', order: 5 }
    ]
  },
  {
    name: 'AI for Business',
    code: 'AI-301',
    description: 'Applying AI and machine learning to business problems including predictive analytics and automation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Artificial Intelligence & Machine Learning',
    isCompulsory: false,
    icon: '💼',
    topics: [
      { title: 'AI Business Applications', description: 'Use cases across industries', order: 1 },
      { title: 'Predictive Analytics', description: 'Forecasting and demand prediction', order: 2 },
      { title: 'Customer Analytics', description: 'Segmentation, churn prediction, and recommendation', order: 3 },
      { title: 'Process Automation', description: 'RPA and intelligent automation', order: 4 },
      { title: 'AI Strategy', description: 'Implementing AI in organizations', order: 5 }
    ]
  },

  // 7. Networking & IT Infrastructure
  {
    name: 'Computer Networks',
    code: 'NET-201',
    description: 'Network fundamentals including protocols, topologies, OSI model, and TCP/IP.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Networking & IT Infrastructure',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'Network Fundamentals', description: 'Network types, topologies, and devices', order: 1 },
      { title: 'OSI Model', description: 'Seven layers and their functions', order: 2 },
      { title: 'TCP/IP Protocol Suite', description: 'IP addressing, routing, and transport protocols', order: 3 },
      { title: 'Network Services', description: 'DNS, DHCP, and network applications', order: 4 },
      { title: 'Network Troubleshooting', description: 'Diagnostic tools and problem-solving', order: 5 }
    ]
  },
  {
    name: 'Network Administration',
    code: 'NET-301',
    description: 'Managing and administering networks including configuration, monitoring, and maintenance.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Networking & IT Infrastructure',
    isCompulsory: false,
    icon: '🔧',
    topics: [
      { title: 'Network Design', description: 'Planning and designing network infrastructure', order: 1 },
      { title: 'Router & Switch Configuration', description: 'Cisco IOS and network device setup', order: 2 },
      { title: 'Network Monitoring', description: 'Monitoring tools and performance management', order: 3 },
      { title: 'Network Security', description: 'Securing network infrastructure', order: 4 },
      { title: 'Wireless Networks', description: 'Wi-Fi setup and management', order: 5 }
    ]
  },
  {
    name: 'Cloud Computing',
    code: 'CLOUD-201',
    description: 'Cloud computing concepts and services including AWS, Azure, and Google Cloud Platform.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Networking & IT Infrastructure',
    isCompulsory: false,
    icon: '☁️',
    topics: [
      { title: 'Cloud Fundamentals', description: 'IaaS, PaaS, SaaS, and cloud models', order: 1 },
      { title: 'AWS Services', description: 'EC2, S3, RDS, and core AWS services', order: 2 },
      { title: 'Azure Services', description: 'Virtual machines, storage, and Azure fundamentals', order: 3 },
      { title: 'Google Cloud Platform', description: 'Compute Engine, Cloud Storage, and GCP services', order: 4 },
      { title: 'Cloud Security', description: 'IAM, encryption, and cloud security best practices', order: 5 }
    ]
  },
  {
    name: 'IT Support & Troubleshooting',
    code: 'IT-101',
    description: 'Technical support skills including hardware troubleshooting, software installation, and customer service.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Networking & IT Infrastructure',
    isCompulsory: false,
    icon: '🛠️',
    topics: [
      { title: 'IT Support Fundamentals', description: 'Help desk operations and ticketing systems', order: 1 },
      { title: 'Hardware Troubleshooting', description: 'Diagnosing and fixing hardware issues', order: 2 },
      { title: 'Software Support', description: 'Installing, configuring, and troubleshooting software', order: 3 },
      { title: 'Operating Systems', description: 'Windows, macOS, and Linux support', order: 4 },
      { title: 'Customer Service', description: 'Communication skills and user support', order: 5 }
    ]
  },
  {
    name: 'Virtualization & Systems Deployment',
    code: 'IT-301',
    description: 'Virtualization technologies including VMware, Hyper-V, and containerization with Docker.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Networking & IT Infrastructure',
    isCompulsory: false,
    icon: '📦',
    topics: [
      { title: 'Virtualization Fundamentals', description: 'Virtual machines and hypervisors', order: 1 },
      { title: 'VMware', description: 'VMware Workstation and vSphere', order: 2 },
      { title: 'Hyper-V', description: 'Microsoft Hyper-V and virtual networking', order: 3 },
      { title: 'Containerization', description: 'Docker containers and Docker Compose', order: 4 },
      { title: 'Kubernetes', description: 'Container orchestration basics', order: 5 }
    ]
  },

  // 8. Web, Cloud & Internet Technologies
  {
    name: 'Cloud Architecture',
    code: 'CLOUD-301',
    description: 'Designing scalable and resilient cloud architectures including microservices and serverless computing.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Web, Cloud & Internet Technologies',
    isCompulsory: false,
    icon: '🏗️',
    topics: [
      { title: 'Cloud Architecture Patterns', description: 'Scalability, availability, and fault tolerance', order: 1 },
      { title: 'Microservices', description: 'Microservices architecture and design', order: 2 },
      { title: 'Serverless Computing', description: 'AWS Lambda, Azure Functions, and event-driven architecture', order: 3 },
      { title: 'Cloud Storage', description: 'Object storage, block storage, and databases', order: 4 },
      { title: 'Cost Optimization', description: 'Cloud cost management and optimization strategies', order: 5 }
    ]
  },
  {
    name: 'Web Programming',
    code: 'WEB-301',
    description: 'Advanced web programming including backend development, APIs, and server-side technologies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Web, Cloud & Internet Technologies',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'Backend Frameworks', description: 'Node.js/Express, Django, or Flask', order: 1 },
      { title: 'RESTful APIs', description: 'API design, HTTP methods, and REST principles', order: 2 },
      { title: 'Authentication', description: 'JWT, OAuth, and session management', order: 3 },
      { title: 'Database Integration', description: 'ORM, database connections, and queries', order: 4 },
      { title: 'Web Security', description: 'OWASP Top 10 and secure coding practices', order: 5 }
    ]
  },
  {
    name: 'Internet of Things (IoT)',
    code: 'IOT-201',
    description: 'IoT concepts, sensors, connectivity, and building IoT applications with Arduino and Raspberry Pi.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Web, Cloud & Internet Technologies',
    isCompulsory: false,
    icon: '📡',
    topics: [
      { title: 'IoT Fundamentals', description: 'IoT architecture and components', order: 1 },
      { title: 'Sensors & Actuators', description: 'Types of sensors and data collection', order: 2 },
      { title: 'Arduino Programming', description: 'Arduino boards and C programming', order: 3 },
      { title: 'Raspberry Pi', description: 'Raspberry Pi and Python programming', order: 4 },
      { title: 'IoT Connectivity', description: 'Wi-Fi, Bluetooth, MQTT, and cloud integration', order: 5 }
    ]
  },
  {
    name: 'DevOps Fundamentals',
    code: 'DEVOPS-201',
    description: 'DevOps practices including CI/CD, automation, infrastructure as code, and collaboration.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Web, Cloud & Internet Technologies',
    isCompulsory: false,
    icon: '🔄',
    topics: [
      { title: 'DevOps Principles', description: 'DevOps culture and practices', order: 1 },
      { title: 'CI/CD Pipelines', description: 'Jenkins, GitLab CI, and GitHub Actions', order: 2 },
      { title: 'Infrastructure as Code', description: 'Terraform, Ansible, and configuration management', order: 3 },
      { title: 'Containerization', description: 'Docker and container workflows', order: 4 },
      { title: 'Monitoring & Logging', description: 'Application monitoring and log management', order: 5 }
    ]
  },
  {
    name: 'API Development & Integration',
    code: 'API-201',
    description: 'Designing, building, and integrating APIs including REST, GraphQL, and API security.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Web, Cloud & Internet Technologies',
    isCompulsory: false,
    icon: '🔌',
    topics: [
      { title: 'API Design', description: 'REST principles and API best practices', order: 1 },
      { title: 'Building REST APIs', description: 'Creating APIs with Node.js, Python, or Java', order: 2 },
      { title: 'GraphQL', description: 'GraphQL queries, mutations, and schema design', order: 3 },
      { title: 'API Security', description: 'Authentication, rate limiting, and API keys', order: 4 },
      { title: 'API Documentation', description: 'Swagger, OpenAPI, and API testing', order: 5 }
    ]
  },

  // 9. Exam Prep & Certification Support
  {
    name: 'CompTIA A+ Certification Prep',
    code: 'CERT-101',
    description: 'Preparation for CompTIA A+ certification covering hardware, software, networking, and troubleshooting.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Exam Prep & Certification',
    isCompulsory: false,
    icon: '📜',
    topics: [
      { title: 'Hardware Fundamentals', description: 'PC components, peripherals, and mobile devices', order: 1 },
      { title: 'Operating Systems', description: 'Windows, macOS, Linux, and mobile OS', order: 2 },
      { title: 'Networking Basics', description: 'Network types, protocols, and troubleshooting', order: 3 },
      { title: 'Security Fundamentals', description: 'Security threats and best practices', order: 4 },
      { title: 'Troubleshooting', description: 'Problem-solving methodology and tools', order: 5 }
    ]
  },
  {
    name: 'CompTIA Network+ Certification Prep',
    code: 'CERT-201',
    description: 'Preparation for CompTIA Network+ certification covering networking concepts and infrastructure.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Exam Prep & Certification',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'Network Concepts', description: 'OSI model, TCP/IP, and network topologies', order: 1 },
      { title: 'Network Infrastructure', description: 'Switches, routers, and network devices', order: 2 },
      { title: 'Network Operations', description: 'Network management and monitoring', order: 3 },
      { title: 'Network Security', description: 'Firewalls, VPNs, and security protocols', order: 4 },
      { title: 'Network Troubleshooting', description: 'Diagnostic tools and problem resolution', order: 5 }
    ]
  },
  {
    name: 'CompTIA Security+ Certification Prep',
    code: 'CERT-301',
    description: 'Preparation for CompTIA Security+ certification covering cybersecurity fundamentals.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Exam Prep & Certification',
    isCompulsory: false,
    icon: '🔐',
    topics: [
      { title: 'Security Threats', description: 'Malware, social engineering, and attack types', order: 1 },
      { title: 'Security Technologies', description: 'Firewalls, IDS/IPS, and encryption', order: 2 },
      { title: 'Identity & Access Management', description: 'Authentication and authorization', order: 3 },
      { title: 'Risk Management', description: 'Risk assessment and mitigation', order: 4 },
      { title: 'Incident Response', description: 'Incident handling and forensics', order: 5 }
    ]
  },
  {
    name: 'Cisco CCNA Certification Prep',
    code: 'CERT-202',
    description: 'Preparation for Cisco CCNA certification covering routing, switching, and network fundamentals.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Exam Prep & Certification',
    isCompulsory: false,
    icon: '🔧',
    topics: [
      { title: 'Network Fundamentals', description: 'OSI model, TCP/IP, and IP addressing', order: 1 },
      { title: 'Routing Technologies', description: 'Static routing, dynamic routing protocols', order: 2 },
      { title: 'Switching Technologies', description: 'VLANs, STP, and switch configuration', order: 3 },
      { title: 'WAN Technologies', description: 'PPP, Frame Relay, and VPN', order: 4 },
      { title: 'Infrastructure Services', description: 'DHCP, DNS, NAT, and ACLs', order: 5 }
    ]
  },
  {
    name: 'AWS Cloud Practitioner Certification Prep',
    code: 'CERT-401',
    description: 'Preparation for AWS Certified Cloud Practitioner exam covering AWS cloud concepts and services.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Exam Prep & Certification',
    isCompulsory: false,
    icon: '☁️',
    topics: [
      { title: 'Cloud Concepts', description: 'Cloud computing models and benefits', order: 1 },
      { title: 'AWS Core Services', description: 'EC2, S3, RDS, and VPC', order: 2 },
      { title: 'Security & Compliance', description: 'IAM, security best practices, and compliance', order: 3 },
      { title: 'Billing & Pricing', description: 'AWS pricing models and cost management', order: 4 },
      { title: 'AWS Architecture', description: 'Well-architected framework and design principles', order: 5 }
    ]
  },
  {
    name: 'Microsoft Azure Fundamentals Certification Prep',
    code: 'CERT-402',
    description: 'Preparation for Microsoft Azure Fundamentals (AZ-900) certification.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Exam Prep & Certification',
    isCompulsory: false,
    icon: '🔷',
    topics: [
      { title: 'Cloud Concepts', description: 'Cloud models and Azure architecture', order: 1 },
      { title: 'Azure Core Services', description: 'Compute, storage, and networking', order: 2 },
      { title: 'Security & Compliance', description: 'Azure security tools and compliance', order: 3 },
      { title: 'Azure Pricing', description: 'Pricing models and cost management', order: 4 },
      { title: 'Azure Management', description: 'Azure Portal, CLI, and PowerShell', order: 5 }
    ]
  },
  {
    name: 'Google IT Support Certificate Prep',
    code: 'CERT-102',
    description: 'Preparation for Google IT Support Professional Certificate covering IT fundamentals.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Exam Prep & Certification',
    isCompulsory: false,
    icon: '🔍',
    topics: [
      { title: 'Technical Support Fundamentals', description: 'IT support basics and customer service', order: 1 },
      { title: 'Computer Networking', description: 'Network protocols and troubleshooting', order: 2 },
      { title: 'Operating Systems', description: 'Windows and Linux administration', order: 3 },
      { title: 'System Administration', description: 'IT infrastructure and services', order: 4 },
      { title: 'IT Security', description: 'Security best practices and threat mitigation', order: 5 }
    ]
  },

  // 10. Creative & Specialized CS Fields
  {
    name: 'Game Development',
    code: 'GAME-201',
    description: 'Game development using Unity or Unreal Engine including game design, programming, and 3D graphics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Creative & Specialized CS',
    isCompulsory: false,
    icon: '🎮',
    topics: [
      { title: 'Game Design Fundamentals', description: 'Game mechanics, level design, and storytelling', order: 1 },
      { title: 'Unity Game Engine', description: 'Unity interface, scripting with C#', order: 2 },
      { title: 'Unreal Engine', description: 'Unreal Engine and Blueprint visual scripting', order: 3 },
      { title: '2D & 3D Graphics', description: 'Sprites, models, textures, and animations', order: 4 },
      { title: 'Game Physics & AI', description: 'Physics engines and game AI programming', order: 5 }
    ]
  },
  {
    name: 'UX/UI Design',
    code: 'UX-201',
    description: 'User experience and user interface design including wireframing, prototyping, and usability testing.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Creative & Specialized CS',
    isCompulsory: false,
    icon: '🎨',
    topics: [
      { title: 'UX Fundamentals', description: 'User research, personas, and user journeys', order: 1 },
      { title: 'UI Design Principles', description: 'Visual hierarchy, typography, and color theory', order: 2 },
      { title: 'Wireframing & Prototyping', description: 'Figma, Sketch, and Adobe XD', order: 3 },
      { title: 'Usability Testing', description: 'Testing methods and feedback analysis', order: 4 },
      { title: 'Responsive Design', description: 'Mobile-first design and accessibility', order: 5 }
    ]
  },
  {
    name: 'Digital Graphics & Multimedia',
    code: 'DGM-201',
    description: 'Digital graphics, image editing, video editing, and multimedia production.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Creative & Specialized CS',
    isCompulsory: false,
    icon: '🖼️',
    topics: [
      { title: 'Image Editing', description: 'Photoshop, GIMP, and photo manipulation', order: 1 },
      { title: 'Vector Graphics', description: 'Illustrator, Inkscape, and logo design', order: 2 },
      { title: 'Video Editing', description: 'Premiere Pro, Final Cut Pro, and video production', order: 3 },
      { title: '3D Modeling', description: 'Blender, Maya, and 3D graphics', order: 4 },
      { title: 'Motion Graphics', description: 'After Effects and animation', order: 5 }
    ]
  },
  {
    name: 'Computer Vision',
    code: 'CV-301',
    description: 'Computer vision techniques for image processing, object detection, and facial recognition.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Creative & Specialized CS',
    isCompulsory: false,
    icon: '👁️',
    topics: [
      { title: 'Image Processing', description: 'Filtering, edge detection, and transformations', order: 1 },
      { title: 'Feature Detection', description: 'Corners, edges, and keypoint detection', order: 2 },
      { title: 'Object Detection', description: 'YOLO, R-CNN, and detection algorithms', order: 3 },
      { title: 'Facial Recognition', description: 'Face detection and recognition systems', order: 4 },
      { title: 'OpenCV', description: 'Computer vision library and applications', order: 5 }
    ]
  },
  {
    name: 'Robotics Programming',
    code: 'ROB-301',
    description: 'Programming robots including kinematics, sensors, actuators, and autonomous navigation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Creative & Specialized CS',
    isCompulsory: false,
    icon: '🤖',
    topics: [
      { title: 'Robotics Fundamentals', description: 'Robot components and architecture', order: 1 },
      { title: 'Sensors & Actuators', description: 'Types of sensors and motor control', order: 2 },
      { title: 'Robot Kinematics', description: 'Forward and inverse kinematics', order: 3 },
      { title: 'Path Planning', description: 'Navigation algorithms and obstacle avoidance', order: 4 },
      { title: 'ROS (Robot Operating System)', description: 'ROS framework and robot programming', order: 5 }
    ]
  }
];

async function seedComputerScienceCourses() {
  console.log('💻 Starting Computer Science Courses seeding...\n');

  for (const course of computerScienceCourses) {
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

  console.log('✅ Computer Science Courses seeding complete!\n');
  
  // Print summary
  const courseCount = computerScienceCourses.length;
  const topicCount = computerScienceCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`   Categories: 10`);
  console.log(`   - Core Computer Science (7 courses)`);
  console.log(`   - Software Development & Engineering (7 courses)`);
  console.log(`   - Business Information Systems (6 courses)`);
  console.log(`   - Data & Database (6 courses)`);
  console.log(`   - Cybersecurity (5 courses)`);
  console.log(`   - AI & Machine Learning (6 courses)`);
  console.log(`   - Networking & IT Infrastructure (5 courses)`);
  console.log(`   - Web, Cloud & Internet Technologies (5 courses)`);
  console.log(`   - Exam Prep & Certification (7 courses)`);
  console.log(`   - Creative & Specialized CS (5 courses)`);
}

seedComputerScienceCourses()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
