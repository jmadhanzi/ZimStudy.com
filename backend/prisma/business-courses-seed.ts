import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const businessCourses = [
  // 1. Management Courses
  {
    name: 'Principles of Management',
    code: 'MGMT-101',
    description: 'Foundational course covering the four functions of management: planning, organizing, leading, and controlling. Explores management theories, organizational structures, and decision-making processes.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Management',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Introduction to Management', description: 'Evolution of management thought and modern management practices', order: 1 },
      { title: 'Planning & Goal Setting', description: 'Strategic planning, objectives, and performance metrics', order: 2 },
      { title: 'Organizing & Structure', description: 'Organizational design, departmentalization, and authority', order: 3 },
      { title: 'Leading & Motivation', description: 'Leadership styles, motivation theories, and team dynamics', order: 4 },
      { title: 'Controlling & Performance', description: 'Control systems, quality management, and continuous improvement', order: 5 }
    ]
  },
  {
    name: 'Strategic Management',
    code: 'MGMT-201',
    description: 'Advanced course on formulating and implementing business strategies. Covers competitive analysis, strategic planning, and organizational change management.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Management',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Strategic Analysis', description: 'SWOT, PESTEL, and Porter\'s Five Forces analysis', order: 1 },
      { title: 'Competitive Strategy', description: 'Cost leadership, differentiation, and focus strategies', order: 2 },
      { title: 'Corporate Strategy', description: 'Diversification, mergers, acquisitions, and alliances', order: 3 },
      { title: 'Strategy Implementation', description: 'Organizational structure, culture, and change management', order: 4 },
      { title: 'Strategy Evaluation', description: 'Performance measurement and strategic control', order: 5 }
    ]
  },
  {
    name: 'Operations Management',
    code: 'MGMT-202',
    description: 'Management of production and service operations. Covers process design, quality control, inventory management, and supply chain optimization.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Management',
    isCompulsory: false,
    icon: '⚙️',
    topics: [
      { title: 'Operations Strategy', description: 'Aligning operations with business strategy', order: 1 },
      { title: 'Process Design & Analysis', description: 'Process mapping, capacity planning, and bottleneck management', order: 2 },
      { title: 'Quality Management', description: 'TQM, Six Sigma, and quality control techniques', order: 3 },
      { title: 'Inventory Management', description: 'EOQ, JIT, and inventory optimization', order: 4 },
      { title: 'Lean Operations', description: 'Waste reduction and continuous improvement', order: 5 }
    ]
  },
  {
    name: 'Project Management',
    code: 'MGMT-203',
    description: 'Comprehensive project management methodology covering initiation, planning, execution, monitoring, and closure. Includes risk management and stakeholder engagement.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Management',
    isCompulsory: false,
    icon: '📋',
    topics: [
      { title: 'Project Initiation', description: 'Project charter, stakeholder identification, and feasibility', order: 1 },
      { title: 'Project Planning', description: 'WBS, scheduling, budgeting, and resource allocation', order: 2 },
      { title: 'Project Execution', description: 'Team management, communication, and quality assurance', order: 3 },
      { title: 'Risk Management', description: 'Risk identification, assessment, and mitigation strategies', order: 4 },
      { title: 'Project Closure', description: 'Evaluation, lessons learned, and knowledge transfer', order: 5 }
    ]
  },
  {
    name: 'Supply Chain Management',
    code: 'MGMT-204',
    description: 'End-to-end supply chain management including procurement, logistics, distribution, and supplier relationships. Focus on efficiency and cost optimization.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Management',
    isCompulsory: false,
    icon: '🚚',
    topics: [
      { title: 'Supply Chain Strategy', description: 'Supply chain design and network optimization', order: 1 },
      { title: 'Procurement & Sourcing', description: 'Supplier selection, negotiation, and contracts', order: 2 },
      { title: 'Logistics & Distribution', description: 'Transportation, warehousing, and distribution management', order: 3 },
      { title: 'Demand Forecasting', description: 'Forecasting techniques and demand planning', order: 4 },
      { title: 'Supply Chain Technology', description: 'ERP, WMS, and supply chain analytics', order: 5 }
    ]
  },
  {
    name: 'Human Resource Management',
    code: 'MGMT-205',
    description: 'Managing people in organizations including recruitment, training, performance management, compensation, and employee relations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Management',
    isCompulsory: false,
    icon: '👥',
    topics: [
      { title: 'HR Planning & Recruitment', description: 'Workforce planning, job analysis, and talent acquisition', order: 1 },
      { title: 'Training & Development', description: 'Employee training, career development, and succession planning', order: 2 },
      { title: 'Performance Management', description: 'Performance appraisal, feedback, and improvement plans', order: 3 },
      { title: 'Compensation & Benefits', description: 'Salary structures, incentives, and benefits administration', order: 4 },
      { title: 'Employee Relations', description: 'Labor relations, conflict resolution, and workplace culture', order: 5 }
    ]
  },
  {
    name: 'Organizational Behavior',
    code: 'MGMT-206',
    description: 'Study of human behavior in organizational settings. Covers individual behavior, group dynamics, organizational culture, and change management.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Management',
    isCompulsory: false,
    icon: '🧑‍💼',
    topics: [
      { title: 'Individual Behavior', description: 'Personality, perception, attitudes, and motivation', order: 1 },
      { title: 'Group Dynamics', description: 'Team formation, cohesion, and decision-making', order: 2 },
      { title: 'Leadership & Power', description: 'Leadership theories, influence, and organizational politics', order: 3 },
      { title: 'Organizational Culture', description: 'Culture formation, types, and cultural change', order: 4 },
      { title: 'Change Management', description: 'Managing organizational change and resistance', order: 5 }
    ]
  },
  {
    name: 'Business Leadership & Ethics',
    code: 'MGMT-207',
    description: 'Development of leadership skills and ethical decision-making. Covers leadership theories, corporate social responsibility, and ethical frameworks.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Management',
    isCompulsory: false,
    icon: '🌟',
    topics: [
      { title: 'Leadership Theories', description: 'Trait, behavioral, and situational leadership approaches', order: 1 },
      { title: 'Ethical Decision-Making', description: 'Ethical frameworks and moral reasoning in business', order: 2 },
      { title: 'Corporate Social Responsibility', description: 'Stakeholder theory and sustainable business practices', order: 3 },
      { title: 'Business Ethics Cases', description: 'Analysis of ethical dilemmas in business', order: 4 },
      { title: 'Leading with Integrity', description: 'Building trust and ethical organizational culture', order: 5 }
    ]
  },

  // 2. Marketing Courses
  {
    name: 'Introduction to Marketing',
    code: 'MKTG-101',
    description: 'Fundamentals of marketing including the marketing mix (4Ps), consumer behavior, market segmentation, and marketing strategy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Marketing',
    isCompulsory: false,
    icon: '📢',
    topics: [
      { title: 'Marketing Concepts', description: 'Marketing philosophy, value creation, and customer orientation', order: 1 },
      { title: 'Marketing Mix (4Ps)', description: 'Product, price, place, and promotion strategies', order: 2 },
      { title: 'Market Segmentation', description: 'Segmentation, targeting, and positioning (STP)', order: 3 },
      { title: 'Consumer Behavior Basics', description: 'Understanding customer needs and decision-making', order: 4 },
      { title: 'Marketing Research', description: 'Market analysis and data collection methods', order: 5 }
    ]
  },
  {
    name: 'Digital Marketing',
    code: 'MKTG-201',
    description: 'Online marketing strategies including SEO, SEM, content marketing, email marketing, and digital analytics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Marketing',
    isCompulsory: false,
    icon: '💻',
    topics: [
      { title: 'Digital Marketing Strategy', description: 'Planning and executing digital campaigns', order: 1 },
      { title: 'Search Engine Optimization (SEO)', description: 'On-page and off-page SEO techniques', order: 2 },
      { title: 'Pay-Per-Click Advertising (PPC)', description: 'Google Ads, Facebook Ads, and campaign management', order: 3 },
      { title: 'Content Marketing', description: 'Content strategy, creation, and distribution', order: 4 },
      { title: 'Digital Analytics', description: 'Google Analytics, metrics, and performance tracking', order: 5 }
    ]
  },
  {
    name: 'Social Media Marketing',
    code: 'MKTG-202',
    description: 'Marketing through social media platforms including strategy development, content creation, community management, and influencer marketing.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Marketing',
    isCompulsory: false,
    icon: '📱',
    topics: [
      { title: 'Social Media Strategy', description: 'Platform selection and strategic planning', order: 1 },
      { title: 'Content Creation', description: 'Visual content, copywriting, and storytelling', order: 2 },
      { title: 'Community Management', description: 'Engagement, customer service, and reputation management', order: 3 },
      { title: 'Social Media Advertising', description: 'Paid campaigns on Facebook, Instagram, LinkedIn, Twitter', order: 4 },
      { title: 'Influencer Marketing', description: 'Partnering with influencers and measuring ROI', order: 5 }
    ]
  },
  {
    name: 'Market Research',
    code: 'MKTG-203',
    description: 'Research methodologies for understanding markets, customers, and competitors. Covers qualitative and quantitative research techniques.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Marketing',
    isCompulsory: false,
    icon: '🔍',
    topics: [
      { title: 'Research Design', description: 'Research objectives, questions, and methodology', order: 1 },
      { title: 'Qualitative Research', description: 'Focus groups, interviews, and ethnography', order: 2 },
      { title: 'Quantitative Research', description: 'Surveys, experiments, and statistical analysis', order: 3 },
      { title: 'Data Analysis', description: 'Statistical techniques and interpretation', order: 4 },
      { title: 'Research Reporting', description: 'Presenting findings and recommendations', order: 5 }
    ]
  },
  {
    name: 'Advertising & Branding',
    code: 'MKTG-204',
    description: 'Creating and managing brand identity and advertising campaigns. Covers brand strategy, creative development, and media planning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Marketing',
    isCompulsory: false,
    icon: '🎨',
    topics: [
      { title: 'Brand Strategy', description: 'Brand positioning, identity, and architecture', order: 1 },
      { title: 'Creative Development', description: 'Advertising concepts, copywriting, and design', order: 2 },
      { title: 'Media Planning', description: 'Media selection, scheduling, and budget allocation', order: 3 },
      { title: 'Integrated Marketing Communications', description: 'Coordinating marketing messages across channels', order: 4 },
      { title: 'Brand Management', description: 'Brand equity, extensions, and revitalization', order: 5 }
    ]
  },
  {
    name: 'Consumer Behavior',
    code: 'MKTG-205',
    description: 'In-depth study of consumer psychology, decision-making processes, and factors influencing purchase behavior.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Marketing',
    isCompulsory: false,
    icon: '🛒',
    topics: [
      { title: 'Consumer Psychology', description: 'Perception, learning, memory, and attitudes', order: 1 },
      { title: 'Decision-Making Process', description: 'Problem recognition, information search, and evaluation', order: 2 },
      { title: 'Cultural Influences', description: 'Culture, subculture, and social class effects', order: 3 },
      { title: 'Social Influences', description: 'Reference groups, family, and opinion leaders', order: 4 },
      { title: 'Situational Factors', description: 'Purchase context and environmental influences', order: 5 }
    ]
  },
  {
    name: 'Sales Management',
    code: 'MKTG-206',
    description: 'Managing sales teams and processes. Covers sales strategy, territory management, compensation, and performance evaluation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Marketing',
    isCompulsory: false,
    icon: '💼',
    topics: [
      { title: 'Sales Strategy', description: 'Sales objectives, forecasting, and planning', order: 1 },
      { title: 'Sales Force Organization', description: 'Structure, territories, and quotas', order: 2 },
      { title: 'Recruitment & Training', description: 'Hiring salespeople and sales training programs', order: 3 },
      { title: 'Motivation & Compensation', description: 'Incentive systems and sales contests', order: 4 },
      { title: 'Sales Performance', description: 'Metrics, evaluation, and improvement', order: 5 }
    ]
  },
  {
    name: 'E-Commerce Marketing',
    code: 'MKTG-207',
    description: 'Marketing strategies for online businesses including website optimization, conversion rate optimization, and online customer experience.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Marketing',
    isCompulsory: false,
    icon: '🛍️',
    topics: [
      { title: 'E-Commerce Strategy', description: 'Business models and competitive positioning', order: 1 },
      { title: 'Website Optimization', description: 'UX/UI design and conversion optimization', order: 2 },
      { title: 'Online Customer Acquisition', description: 'Traffic generation and customer acquisition strategies', order: 3 },
      { title: 'Customer Retention', description: 'Email marketing, loyalty programs, and remarketing', order: 4 },
      { title: 'E-Commerce Analytics', description: 'Tracking, measuring, and optimizing performance', order: 5 }
    ]
  },

  // 3. Accounting & Finance Courses
  {
    name: 'Financial Accounting',
    code: 'ACCT-101',
    description: 'Fundamentals of financial accounting including the accounting cycle, financial statements, and GAAP principles.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Accounting & Finance',
    isCompulsory: false,
    icon: '📚',
    topics: [
      { title: 'Accounting Fundamentals', description: 'Accounting equation, double-entry bookkeeping', order: 1 },
      { title: 'Recording Transactions', description: 'Journals, ledgers, and trial balance', order: 2 },
      { title: 'Financial Statements', description: 'Income statement, balance sheet, cash flow statement', order: 3 },
      { title: 'Adjusting Entries', description: 'Accruals, deferrals, and depreciation', order: 4 },
      { title: 'Financial Statement Analysis', description: 'Ratio analysis and interpretation', order: 5 }
    ]
  },
  {
    name: 'Managerial Accounting',
    code: 'ACCT-201',
    description: 'Accounting for internal decision-making including cost accounting, budgeting, and performance measurement.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Accounting & Finance',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Cost Behavior & Analysis', description: 'Fixed, variable, and mixed costs', order: 1 },
      { title: 'Cost-Volume-Profit Analysis', description: 'Break-even analysis and profit planning', order: 2 },
      { title: 'Budgeting', description: 'Master budget, flexible budgets, and variance analysis', order: 3 },
      { title: 'Performance Measurement', description: 'Responsibility accounting and balanced scorecard', order: 4 },
      { title: 'Decision-Making', description: 'Relevant costs, make-or-buy, and pricing decisions', order: 5 }
    ]
  },
  {
    name: 'Corporate Finance',
    code: 'FIN-201',
    description: 'Financial management of corporations including capital budgeting, capital structure, and dividend policy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Accounting & Finance',
    isCompulsory: false,
    icon: '💰',
    topics: [
      { title: 'Time Value of Money', description: 'Present value, future value, and annuities', order: 1 },
      { title: 'Capital Budgeting', description: 'NPV, IRR, and investment decision-making', order: 2 },
      { title: 'Risk & Return', description: 'Portfolio theory and CAPM', order: 3 },
      { title: 'Capital Structure', description: 'Debt vs. equity financing and optimal capital structure', order: 4 },
      { title: 'Dividend Policy', description: 'Dividend theories and payout decisions', order: 5 }
    ]
  },
  {
    name: 'Financial Markets & Institutions',
    code: 'FIN-202',
    description: 'Overview of financial markets, instruments, and institutions including banks, stock markets, and regulatory frameworks.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Accounting & Finance',
    isCompulsory: false,
    icon: '🏦',
    topics: [
      { title: 'Financial System Overview', description: 'Role of financial markets and intermediaries', order: 1 },
      { title: 'Money Markets', description: 'Short-term instruments and interest rates', order: 2 },
      { title: 'Capital Markets', description: 'Stocks, bonds, and equity markets', order: 3 },
      { title: 'Financial Institutions', description: 'Banks, insurance companies, and investment funds', order: 4 },
      { title: 'Regulation & Policy', description: 'Central banks, monetary policy, and financial regulation', order: 5 }
    ]
  },
  {
    name: 'Investment Analysis',
    code: 'FIN-203',
    description: 'Analysis and valuation of investment securities including stocks, bonds, and derivatives. Portfolio management strategies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Accounting & Finance',
    isCompulsory: false,
    icon: '📈',
    topics: [
      { title: 'Investment Environment', description: 'Securities markets and trading mechanisms', order: 1 },
      { title: 'Stock Valuation', description: 'Fundamental analysis and valuation models', order: 2 },
      { title: 'Bond Valuation', description: 'Bond pricing, yields, and interest rate risk', order: 3 },
      { title: 'Portfolio Management', description: 'Asset allocation and portfolio optimization', order: 4 },
      { title: 'Derivatives', description: 'Options, futures, and hedging strategies', order: 5 }
    ]
  },
  {
    name: 'Entrepreneurship Finance',
    code: 'FIN-204',
    description: 'Financial management for startups and small businesses including funding sources, financial planning, and valuation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Accounting & Finance',
    isCompulsory: false,
    icon: '🚀',
    topics: [
      { title: 'Startup Financing', description: 'Bootstrapping, angel investors, and venture capital', order: 1 },
      { title: 'Financial Projections', description: 'Revenue forecasting and financial modeling', order: 2 },
      { title: 'Valuation Methods', description: 'Valuing early-stage companies', order: 3 },
      { title: 'Cash Flow Management', description: 'Working capital and cash flow optimization', order: 4 },
      { title: 'Exit Strategies', description: 'IPO, acquisition, and investor returns', order: 5 }
    ]
  },
  {
    name: 'Budgeting & Forecasting',
    code: 'FIN-205',
    description: 'Techniques for preparing budgets and financial forecasts. Covers operational budgets, capital budgets, and variance analysis.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Accounting & Finance',
    isCompulsory: false,
    icon: '📋',
    topics: [
      { title: 'Budget Preparation', description: 'Operating, capital, and cash budgets', order: 1 },
      { title: 'Forecasting Techniques', description: 'Time series, regression, and scenario analysis', order: 2 },
      { title: 'Variance Analysis', description: 'Budget vs. actual analysis and corrective actions', order: 3 },
      { title: 'Rolling Forecasts', description: 'Continuous planning and adaptive budgeting', order: 4 },
      { title: 'Performance Metrics', description: 'KPIs and financial performance measurement', order: 5 }
    ]
  },
  {
    name: 'Auditing & Assurance',
    code: 'ACCT-301',
    description: 'Principles and practices of auditing including audit planning, evidence gathering, and reporting. Internal and external auditing.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Accounting & Finance',
    isCompulsory: false,
    icon: '🔍',
    topics: [
      { title: 'Audit Framework', description: 'Auditing standards and professional ethics', order: 1 },
      { title: 'Audit Planning', description: 'Risk assessment and audit strategy', order: 2 },
      { title: 'Audit Evidence', description: 'Testing procedures and documentation', order: 3 },
      { title: 'Internal Controls', description: 'Evaluating and testing control systems', order: 4 },
      { title: 'Audit Reporting', description: 'Audit opinions and communication', order: 5 }
    ]
  },

  // 4. Entrepreneurship & Innovation
  {
    name: 'Entrepreneurship Fundamentals',
    code: 'ENT-101',
    description: 'Introduction to entrepreneurship including opportunity recognition, business models, and entrepreneurial mindset.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Entrepreneurship & Innovation',
    isCompulsory: false,
    icon: '💡',
    topics: [
      { title: 'Entrepreneurial Mindset', description: 'Characteristics and skills of successful entrepreneurs', order: 1 },
      { title: 'Opportunity Recognition', description: 'Identifying and evaluating business opportunities', order: 2 },
      { title: 'Business Models', description: 'Business model canvas and revenue models', order: 3 },
      { title: 'Feasibility Analysis', description: 'Market, technical, and financial feasibility', order: 4 },
      { title: 'Entrepreneurial Ecosystem', description: 'Support systems and resources for entrepreneurs', order: 5 }
    ]
  },
  {
    name: 'Business Startup Strategies',
    code: 'ENT-201',
    description: 'Practical strategies for launching a new business including market entry, competitive positioning, and growth strategies.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Entrepreneurship & Innovation',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Market Entry Strategies', description: 'Timing, positioning, and go-to-market plans', order: 1 },
      { title: 'Competitive Analysis', description: 'Understanding competitors and differentiation', order: 2 },
      { title: 'Minimum Viable Product (MVP)', description: 'Lean startup and product validation', order: 3 },
      { title: 'Customer Acquisition', description: 'Marketing and sales strategies for startups', order: 4 },
      { title: 'Scaling Strategies', description: 'Growth planning and operational scaling', order: 5 }
    ]
  },
  {
    name: 'Innovation & Product Development',
    code: 'ENT-202',
    description: 'Process of developing innovative products and services. Covers design thinking, prototyping, and product launch.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Entrepreneurship & Innovation',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Design Thinking', description: 'Human-centered design and creative problem-solving', order: 1 },
      { title: 'Ideation Techniques', description: 'Brainstorming, mind mapping, and idea generation', order: 2 },
      { title: 'Prototyping', description: 'Rapid prototyping and iterative development', order: 3 },
      { title: 'Product Testing', description: 'User testing and feedback incorporation', order: 4 },
      { title: 'Product Launch', description: 'Launch planning and market introduction', order: 5 }
    ]
  },
  {
    name: 'Small Business Management',
    code: 'ENT-203',
    description: 'Managing and growing small businesses including operations, finance, marketing, and human resources.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Entrepreneurship & Innovation',
    isCompulsory: false,
    icon: '🏪',
    topics: [
      { title: 'Small Business Operations', description: 'Day-to-day management and efficiency', order: 1 },
      { title: 'Financial Management', description: 'Cash flow, pricing, and profitability', order: 2 },
      { title: 'Marketing for Small Business', description: 'Low-cost marketing and customer retention', order: 3 },
      { title: 'Human Resources', description: 'Hiring, training, and managing employees', order: 4 },
      { title: 'Growth & Sustainability', description: 'Expansion strategies and long-term planning', order: 5 }
    ]
  },
  {
    name: 'Business Plan Writing',
    code: 'ENT-204',
    description: 'Comprehensive guide to writing effective business plans for startups, funding, and strategic planning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Entrepreneurship & Innovation',
    isCompulsory: false,
    icon: '📝',
    topics: [
      { title: 'Executive Summary', description: 'Crafting compelling business summaries', order: 1 },
      { title: 'Market Analysis', description: 'Industry research and target market identification', order: 2 },
      { title: 'Marketing & Sales Plan', description: 'Marketing strategy and sales projections', order: 3 },
      { title: 'Operations Plan', description: 'Production, facilities, and organizational structure', order: 4 },
      { title: 'Financial Projections', description: 'Pro forma statements and funding requirements', order: 5 }
    ]
  },
  {
    name: 'Venture Capital & Funding',
    code: 'ENT-205',
    description: 'Understanding venture capital, angel investing, crowdfunding, and other funding sources for startups.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Entrepreneurship & Innovation',
    isCompulsory: false,
    icon: '💸',
    topics: [
      { title: 'Funding Landscape', description: 'Types of investors and funding stages', order: 1 },
      { title: 'Angel Investors', description: 'Finding and pitching to angel investors', order: 2 },
      { title: 'Venture Capital', description: 'VC process, term sheets, and negotiations', order: 3 },
      { title: 'Crowdfunding', description: 'Equity and rewards-based crowdfunding platforms', order: 4 },
      { title: 'Pitching & Presentations', description: 'Creating effective pitch decks and presentations', order: 5 }
    ]
  },

  // 5. Communication & Professional Skills
  {
    name: 'Business Communication',
    code: 'COMM-101',
    description: 'Effective communication in business contexts including writing, presentations, and interpersonal communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Communication & Professional Skills',
    isCompulsory: false,
    icon: '💬',
    topics: [
      { title: 'Business Writing', description: 'Emails, memos, reports, and proposals', order: 1 },
      { title: 'Professional Presentations', description: 'Presentation design and delivery techniques', order: 2 },
      { title: 'Interpersonal Communication', description: 'Active listening and effective dialogue', order: 3 },
      { title: 'Business Meetings', description: 'Meeting facilitation and participation', order: 4 },
      { title: 'Cross-Cultural Communication', description: 'Communicating in diverse environments', order: 5 }
    ]
  },
  {
    name: 'Public Speaking & Presentation Skills',
    code: 'COMM-201',
    description: 'Developing confidence and skills in public speaking, presentations, and persuasive communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Communication & Professional Skills',
    isCompulsory: false,
    icon: '🎤',
    topics: [
      { title: 'Speech Preparation', description: 'Research, organization, and outlining', order: 1 },
      { title: 'Delivery Techniques', description: 'Voice, body language, and stage presence', order: 2 },
      { title: 'Visual Aids', description: 'Effective use of slides and multimedia', order: 3 },
      { title: 'Persuasive Speaking', description: 'Argumentation and influence techniques', order: 4 },
      { title: 'Handling Q&A', description: 'Responding to questions and objections', order: 5 }
    ]
  },
  {
    name: 'Workplace Communication',
    code: 'COMM-202',
    description: 'Communication skills for professional environments including teamwork, conflict resolution, and organizational communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Communication & Professional Skills',
    isCompulsory: false,
    icon: '🏢',
    topics: [
      { title: 'Team Communication', description: 'Collaboration and team dynamics', order: 1 },
      { title: 'Upward Communication', description: 'Communicating with supervisors and executives', order: 2 },
      { title: 'Downward Communication', description: 'Delegating and providing feedback', order: 3 },
      { title: 'Lateral Communication', description: 'Peer-to-peer coordination', order: 4 },
      { title: 'Digital Communication', description: 'Email etiquette and virtual collaboration', order: 5 }
    ]
  },
  {
    name: 'Negotiation & Conflict Resolution',
    code: 'COMM-203',
    description: 'Strategies for effective negotiation and resolving conflicts in business and personal contexts.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Communication & Professional Skills',
    isCompulsory: false,
    icon: '🤝',
    topics: [
      { title: 'Negotiation Fundamentals', description: 'BATNA, ZOPA, and negotiation styles', order: 1 },
      { title: 'Preparation & Planning', description: 'Research, objectives, and strategy', order: 2 },
      { title: 'Negotiation Tactics', description: 'Persuasion, concessions, and closing deals', order: 3 },
      { title: 'Conflict Resolution', description: 'Identifying sources and resolution strategies', order: 4 },
      { title: 'Mediation & Facilitation', description: 'Third-party intervention techniques', order: 5 }
    ]
  },
  {
    name: 'Critical Thinking & Problem Solving',
    code: 'COMM-204',
    description: 'Developing analytical and critical thinking skills for effective problem-solving and decision-making.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Communication & Professional Skills',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'Critical Thinking Foundations', description: 'Logic, reasoning, and cognitive biases', order: 1 },
      { title: 'Problem Identification', description: 'Root cause analysis and problem framing', order: 2 },
      { title: 'Solution Generation', description: 'Creative thinking and brainstorming techniques', order: 3 },
      { title: 'Decision-Making', description: 'Decision models and evaluation criteria', order: 4 },
      { title: 'Implementation & Evaluation', description: 'Action planning and results assessment', order: 5 }
    ]
  },

  // 6. Computer Science for Business
  {
    name: 'Management Information Systems (MIS)',
    code: 'IS-101',
    description: 'Role of information systems in business including databases, enterprise systems, and IT strategy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Computer Science for Business',
    isCompulsory: false,
    icon: '💻',
    topics: [
      { title: 'Information Systems Fundamentals', description: 'Types of IS and their business applications', order: 1 },
      { title: 'Database Management', description: 'Database design and SQL basics', order: 2 },
      { title: 'Enterprise Systems', description: 'ERP, CRM, and SCM systems', order: 3 },
      { title: 'IT Strategy', description: 'Aligning IT with business strategy', order: 4 },
      { title: 'Systems Development', description: 'SDLC and project management', order: 5 }
    ]
  },
  {
    name: 'Business Analytics',
    code: 'IS-201',
    description: 'Using data analytics for business decision-making including descriptive, predictive, and prescriptive analytics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Computer Science for Business',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Analytics Fundamentals', description: 'Types of analytics and business applications', order: 1 },
      { title: 'Descriptive Analytics', description: 'Data visualization and reporting', order: 2 },
      { title: 'Predictive Analytics', description: 'Regression, forecasting, and machine learning basics', order: 3 },
      { title: 'Prescriptive Analytics', description: 'Optimization and decision models', order: 4 },
      { title: 'Analytics Tools', description: 'Excel, Tableau, Power BI, and Python', order: 5 }
    ]
  },
  {
    name: 'Data Science for Business',
    code: 'IS-202',
    description: 'Introduction to data science concepts and tools for business applications including Python, machine learning, and big data.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Computer Science for Business',
    isCompulsory: false,
    icon: '📈',
    topics: [
      { title: 'Data Science Fundamentals', description: 'Data science process and tools', order: 1 },
      { title: 'Python for Data Science', description: 'Pandas, NumPy, and data manipulation', order: 2 },
      { title: 'Data Visualization', description: 'Matplotlib, Seaborn, and storytelling with data', order: 3 },
      { title: 'Machine Learning Basics', description: 'Supervised and unsupervised learning', order: 4 },
      { title: 'Big Data Concepts', description: 'Hadoop, Spark, and data pipelines', order: 5 }
    ]
  },
  {
    name: 'IT Project Management',
    code: 'IS-203',
    description: 'Managing technology projects including software development, system implementation, and IT infrastructure projects.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Computer Science for Business',
    isCompulsory: false,
    icon: '🖥️',
    topics: [
      { title: 'IT Project Planning', description: 'Scope, schedule, and resource planning', order: 1 },
      { title: 'Agile & Scrum', description: 'Agile methodologies and sprint planning', order: 2 },
      { title: 'Software Development Lifecycle', description: 'Waterfall, iterative, and DevOps approaches', order: 3 },
      { title: 'Risk Management', description: 'IT-specific risks and mitigation strategies', order: 4 },
      { title: 'Change Management', description: 'Managing organizational change in IT projects', order: 5 }
    ]
  },
  {
    name: 'Cybersecurity Basics for Business',
    code: 'IS-204',
    description: 'Understanding cybersecurity threats and protecting business information assets. Covers security policies and best practices.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Computer Science for Business',
    isCompulsory: false,
    icon: '🔒',
    topics: [
      { title: 'Cybersecurity Fundamentals', description: 'Threats, vulnerabilities, and risk assessment', order: 1 },
      { title: 'Network Security', description: 'Firewalls, VPNs, and network protection', order: 2 },
      { title: 'Data Protection', description: 'Encryption, backup, and data privacy', order: 3 },
      { title: 'Security Policies', description: 'Developing and implementing security policies', order: 4 },
      { title: 'Incident Response', description: 'Detecting, responding to, and recovering from breaches', order: 5 }
    ]
  },
  {
    name: 'Software Tools for Business',
    code: 'IS-205',
    description: 'Mastering business software tools including Excel, Power BI, project management software, and collaboration tools.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Computer Science for Business',
    isCompulsory: false,
    icon: '🛠️',
    topics: [
      { title: 'Advanced Excel', description: 'Formulas, pivot tables, and data analysis', order: 1 },
      { title: 'Power BI', description: 'Creating dashboards and interactive reports', order: 2 },
      { title: 'Project Management Tools', description: 'MS Project, Asana, Trello, and Jira', order: 3 },
      { title: 'Collaboration Tools', description: 'Slack, Teams, and Google Workspace', order: 4 },
      { title: 'Automation Tools', description: 'Zapier, Power Automate, and workflow automation', order: 5 }
    ]
  },

  // 7. Leadership & Personal Development
  {
    name: 'Leadership Principles',
    code: 'LEAD-101',
    description: 'Foundational leadership concepts including leadership styles, influence, and developing leadership capabilities.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Leadership & Personal Development',
    isCompulsory: false,
    icon: '👑',
    topics: [
      { title: 'Leadership Theories', description: 'Trait, behavioral, and situational leadership', order: 1 },
      { title: 'Leadership Styles', description: 'Autocratic, democratic, transformational, and servant leadership', order: 2 },
      { title: 'Power & Influence', description: 'Sources of power and influence tactics', order: 3 },
      { title: 'Vision & Strategy', description: 'Creating and communicating vision', order: 4 },
      { title: 'Leadership Development', description: 'Self-assessment and growth planning', order: 5 }
    ]
  },
  {
    name: 'Team Building',
    code: 'LEAD-201',
    description: 'Building and leading effective teams including team dynamics, collaboration, and performance management.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Leadership & Personal Development',
    isCompulsory: false,
    icon: '🤝',
    topics: [
      { title: 'Team Formation', description: 'Stages of team development and team roles', order: 1 },
      { title: 'Team Dynamics', description: 'Communication, trust, and cohesion', order: 2 },
      { title: 'Collaboration Techniques', description: 'Facilitating teamwork and cooperation', order: 3 },
      { title: 'Conflict Management', description: 'Resolving team conflicts constructively', order: 4 },
      { title: 'Team Performance', description: 'Setting goals and measuring team success', order: 5 }
    ]
  },
  {
    name: 'Decision-Making & Problem-Solving',
    code: 'LEAD-202',
    description: 'Frameworks and techniques for effective decision-making and problem-solving in leadership roles.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Leadership & Personal Development',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Decision-Making Models', description: 'Rational, intuitive, and group decision-making', order: 1 },
      { title: 'Problem Analysis', description: 'Root cause analysis and problem definition', order: 2 },
      { title: 'Creative Problem-Solving', description: 'Lateral thinking and innovation techniques', order: 3 },
      { title: 'Risk Assessment', description: 'Evaluating alternatives and managing uncertainty', order: 4 },
      { title: 'Implementation', description: 'Action planning and follow-through', order: 5 }
    ]
  },
  {
    name: 'Time Management',
    code: 'LEAD-203',
    description: 'Strategies for effective time management, prioritization, and productivity in professional and personal life.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Leadership & Personal Development',
    isCompulsory: false,
    icon: '⏰',
    topics: [
      { title: 'Time Management Principles', description: 'Understanding time and productivity', order: 1 },
      { title: 'Prioritization Techniques', description: 'Eisenhower Matrix and ABC method', order: 2 },
      { title: 'Planning & Scheduling', description: 'Daily, weekly, and long-term planning', order: 3 },
      { title: 'Overcoming Procrastination', description: 'Identifying and addressing time wasters', order: 4 },
      { title: 'Work-Life Balance', description: 'Managing professional and personal commitments', order: 5 }
    ]
  },
  {
    name: 'Emotional Intelligence (EQ)',
    code: 'LEAD-204',
    description: 'Developing emotional intelligence for better self-awareness, self-management, social awareness, and relationship management.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Leadership & Personal Development',
    isCompulsory: false,
    icon: '❤️',
    topics: [
      { title: 'Self-Awareness', description: 'Understanding emotions and self-perception', order: 1 },
      { title: 'Self-Management', description: 'Emotional regulation and adaptability', order: 2 },
      { title: 'Social Awareness', description: 'Empathy and organizational awareness', order: 3 },
      { title: 'Relationship Management', description: 'Influence, conflict management, and teamwork', order: 4 },
      { title: 'EQ Development', description: 'Practices for improving emotional intelligence', order: 5 }
    ]
  },
  {
    name: 'Professional Development Skills',
    code: 'LEAD-205',
    description: 'Essential skills for career advancement including networking, personal branding, and continuous learning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Leadership & Personal Development',
    isCompulsory: false,
    icon: '🌱',
    topics: [
      { title: 'Career Planning', description: 'Setting career goals and development paths', order: 1 },
      { title: 'Personal Branding', description: 'Building professional reputation and online presence', order: 2 },
      { title: 'Networking', description: 'Building and maintaining professional relationships', order: 3 },
      { title: 'Continuous Learning', description: 'Lifelong learning strategies and resources', order: 4 },
      { title: 'Mentorship', description: 'Finding mentors and being mentored', order: 5 }
    ]
  },

  // 8. Economics & Business Environment
  {
    name: 'Microeconomics',
    code: 'ECON-101',
    description: 'Study of individual economic behavior including supply and demand, market structures, and consumer theory.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics & Business Environment',
    isCompulsory: false,
    icon: '📉',
    topics: [
      { title: 'Supply & Demand', description: 'Market equilibrium and price determination', order: 1 },
      { title: 'Consumer Theory', description: 'Utility, preferences, and consumer choice', order: 2 },
      { title: 'Production & Costs', description: 'Production functions and cost structures', order: 3 },
      { title: 'Market Structures', description: 'Perfect competition, monopoly, and oligopoly', order: 4 },
      { title: 'Market Failures', description: 'Externalities, public goods, and government intervention', order: 5 }
    ]
  },
  {
    name: 'Macroeconomics',
    code: 'ECON-201',
    description: 'Study of aggregate economic phenomena including GDP, inflation, unemployment, and economic policy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics & Business Environment',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'National Income Accounting', description: 'GDP, GNP, and economic indicators', order: 1 },
      { title: 'Economic Growth', description: 'Sources of growth and development theories', order: 2 },
      { title: 'Inflation & Unemployment', description: 'Phillips curve and policy trade-offs', order: 3 },
      { title: 'Monetary Policy', description: 'Central banks and money supply management', order: 4 },
      { title: 'Fiscal Policy', description: 'Government spending and taxation', order: 5 }
    ]
  },
  {
    name: 'International Business',
    code: 'IB-201',
    description: 'Conducting business across borders including international trade, foreign investment, and global strategy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics & Business Environment',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'Globalization', description: 'Drivers and impacts of globalization', order: 1 },
      { title: 'International Trade Theory', description: 'Comparative advantage and trade patterns', order: 2 },
      { title: 'Foreign Direct Investment', description: 'FDI theories and multinational corporations', order: 3 },
      { title: 'Global Strategy', description: 'International market entry and expansion', order: 4 },
      { title: 'Cross-Cultural Management', description: 'Managing cultural differences in business', order: 5 }
    ]
  },
  {
    name: 'Business Law',
    code: 'LAW-201',
    description: 'Legal framework for business including contracts, business organizations, employment law, and intellectual property.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics & Business Environment',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Legal System & Courts', description: 'Legal framework and dispute resolution', order: 1 },
      { title: 'Contract Law', description: 'Formation, performance, and breach of contracts', order: 2 },
      { title: 'Business Organizations', description: 'Sole proprietorships, partnerships, and corporations', order: 3 },
      { title: 'Employment Law', description: 'Hiring, termination, and workplace regulations', order: 4 },
      { title: 'Intellectual Property', description: 'Patents, trademarks, and copyrights', order: 5 }
    ]
  },
  {
    name: 'Corporate Governance',
    code: 'GOV-201',
    description: 'Governance structures and practices in corporations including boards, stakeholders, and ethical responsibilities.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics & Business Environment',
    isCompulsory: false,
    icon: '🏛️',
    topics: [
      { title: 'Governance Fundamentals', description: 'Principles and theories of corporate governance', order: 1 },
      { title: 'Board of Directors', description: 'Board composition, roles, and responsibilities', order: 2 },
      { title: 'Stakeholder Management', description: 'Balancing interests of shareholders and stakeholders', order: 3 },
      { title: 'Corporate Ethics', description: 'Ethical decision-making and corporate responsibility', order: 4 },
      { title: 'Governance Reforms', description: 'Regulatory frameworks and best practices', order: 5 }
    ]
  },
  {
    name: 'Global Trade & Economics',
    code: 'ECON-301',
    description: 'International trade policies, trade agreements, and the global economic system including WTO and regional trade blocs.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Economics & Business Environment',
    isCompulsory: false,
    icon: '🌐',
    topics: [
      { title: 'Trade Theory', description: 'Absolute and comparative advantage', order: 1 },
      { title: 'Trade Policy', description: 'Tariffs, quotas, and trade barriers', order: 2 },
      { title: 'Trade Agreements', description: 'WTO, NAFTA, EU, and regional blocs', order: 3 },
      { title: 'Exchange Rates', description: 'Currency markets and exchange rate systems', order: 4 },
      { title: 'Global Economic Issues', description: 'Trade imbalances, protectionism, and development', order: 5 }
    ]
  }
];

async function seedBusinessCourses() {
  console.log('💼 Starting Business Courses seeding...\n');

  for (const course of businessCourses) {
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

  console.log('✅ Business Courses seeding complete!\n');
  
  // Print summary
  const courseCount = businessCourses.length;
  const topicCount = businessCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`   Categories: 8`);
  console.log(`   - Management (8 courses)`);
  console.log(`   - Marketing (8 courses)`);
  console.log(`   - Accounting & Finance (8 courses)`);
  console.log(`   - Entrepreneurship & Innovation (6 courses)`);
  console.log(`   - Communication & Professional Skills (5 courses)`);
  console.log(`   - Computer Science for Business (6 courses)`);
  console.log(`   - Leadership & Personal Development (6 courses)`);
  console.log(`   - Economics & Business Environment (6 courses)`);
}

seedBusinessCourses()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
