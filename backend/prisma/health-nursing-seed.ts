import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const healthNursingCourses = [
  // CORE HEALTH SCIENCE COURSES
  
  {
    name: 'Anatomy & Physiology',
    code: 'HLTH-101',
    description: 'Comprehensive study of human body structure and function, covering all major organ systems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '🫀',
    topics: [
      { title: 'Introduction to Anatomy', description: 'Body organization and anatomical terminology', order: 1 },
      { title: 'Skeletal System', description: 'Bones, joints, and skeletal function', order: 2 },
      { title: 'Muscular System', description: 'Muscle types and movement', order: 3 },
      { title: 'Cardiovascular System', description: 'Heart, blood vessels, and circulation', order: 4 },
      { title: 'Nervous System', description: 'Brain, spinal cord, and neural pathways', order: 5 }
    ]
  },
  {
    name: 'Medical Terminology',
    code: 'HLTH-102',
    description: 'Essential medical vocabulary including prefixes, suffixes, root words, and abbreviations used in healthcare.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '📋',
    topics: [
      { title: 'Word Building Basics', description: 'Prefixes, suffixes, and root words', order: 1 },
      { title: 'Body Systems Terminology', description: 'Terms for each organ system', order: 2 },
      { title: 'Diagnostic Terms', description: 'Medical tests and procedures', order: 3 },
      { title: 'Pharmacological Terms', description: 'Drug names and classifications', order: 4 },
      { title: 'Medical Abbreviations', description: 'Common healthcare abbreviations', order: 5 }
    ]
  },
  {
    name: 'Pathophysiology',
    code: 'HLTH-201',
    description: 'Study of disease processes and how they affect normal body function.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '🦠',
    topics: [
      { title: 'Introduction to Disease', description: 'Etiology, pathogenesis, and clinical manifestations', order: 1 },
      { title: 'Cellular Injury', description: 'Causes and mechanisms of cell damage', order: 2 },
      { title: 'Inflammation & Healing', description: 'Immune response and tissue repair', order: 3 },
      { title: 'Cardiovascular Disorders', description: 'Heart disease and vascular conditions', order: 4 },
      { title: 'Respiratory Disorders', description: 'Lung diseases and breathing problems', order: 5 }
    ]
  },
  {
    name: 'Human Biology',
    code: 'HLTH-103',
    description: 'Fundamental biological principles applied to human health and disease.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '🧬',
    topics: [
      { title: 'Cell Biology', description: 'Cell structure and function', order: 1 },
      { title: 'Genetics', description: 'DNA, inheritance, and genetic disorders', order: 2 },
      { title: 'Metabolism', description: 'Energy production and utilization', order: 3 },
      { title: 'Homeostasis', description: 'Body regulation and balance', order: 4 },
      { title: 'Human Development', description: 'Growth and aging processes', order: 5 }
    ]
  },
  {
    name: 'Biochemistry for Health Sciences',
    code: 'HLTH-104',
    description: 'Chemical processes and substances in living organisms relevant to healthcare.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '⚗️',
    topics: [
      { title: 'Biomolecules', description: 'Proteins, carbohydrates, lipids, and nucleic acids', order: 1 },
      { title: 'Enzymes', description: 'Enzyme structure and function', order: 2 },
      { title: 'Metabolism Pathways', description: 'Glycolysis, Krebs cycle, and ATP production', order: 3 },
      { title: 'Hormones', description: 'Endocrine system and hormone action', order: 4 },
      { title: 'Clinical Biochemistry', description: 'Lab tests and diagnostic markers', order: 5 }
    ]
  },
  {
    name: 'Microbiology',
    code: 'HLTH-105',
    description: 'Study of microorganisms including bacteria, viruses, fungi, and parasites in health and disease.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Introduction to Microorganisms', description: 'Types and characteristics of microbes', order: 1 },
      { title: 'Bacterial Infections', description: 'Common bacterial pathogens', order: 2 },
      { title: 'Viral Infections', description: 'Virology and viral diseases', order: 3 },
      { title: 'Infection Control', description: 'Sterilization and disinfection', order: 4 },
      { title: 'Antimicrobial Therapy', description: 'Antibiotics and resistance', order: 5 }
    ]
  },
  {
    name: 'Pharmacology',
    code: 'HLTH-202',
    description: 'Study of drugs, their actions, uses, and effects on the body.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '💊',
    topics: [
      { title: 'Pharmacokinetics', description: 'Drug absorption, distribution, metabolism, and excretion', order: 1 },
      { title: 'Pharmacodynamics', description: 'Drug mechanisms and effects', order: 2 },
      { title: 'Drug Classifications', description: 'Major drug categories and uses', order: 3 },
      { title: 'Medication Safety', description: 'Adverse effects and drug interactions', order: 4 },
      { title: 'Clinical Pharmacology', description: 'Drug therapy in practice', order: 5 }
    ]
  },
  {
    name: 'Nutrition & Dietetics',
    code: 'HLTH-106',
    description: 'Science of nutrition and its application to health, disease prevention, and treatment.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '🥗',
    topics: [
      { title: 'Macronutrients', description: 'Carbohydrates, proteins, and fats', order: 1 },
      { title: 'Micronutrients', description: 'Vitamins and minerals', order: 2 },
      { title: 'Nutritional Assessment', description: 'Evaluating nutritional status', order: 3 },
      { title: 'Therapeutic Nutrition', description: 'Diet in disease management', order: 4 },
      { title: 'Public Health Nutrition', description: 'Community nutrition programs', order: 5 }
    ]
  },
  {
    name: 'Public Health Foundations',
    code: 'HLTH-107',
    description: 'Introduction to public health principles, disease prevention, and health promotion.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '🏥',
    topics: [
      { title: 'Introduction to Public Health', description: 'History and core functions', order: 1 },
      { title: 'Disease Prevention', description: 'Primary, secondary, and tertiary prevention', order: 2 },
      { title: 'Health Promotion', description: 'Strategies for improving population health', order: 3 },
      { title: 'Social Determinants', description: 'Factors affecting community health', order: 4 },
      { title: 'Health Equity', description: 'Addressing health disparities', order: 5 }
    ]
  },
  {
    name: 'Epidemiology',
    code: 'HLTH-203',
    description: 'Study of disease distribution and determinants in populations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Core Health Sciences',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Epidemiological Methods', description: 'Study designs and data collection', order: 1 },
      { title: 'Disease Surveillance', description: 'Monitoring and tracking diseases', order: 2 },
      { title: 'Outbreak Investigation', description: 'Identifying and controlling epidemics', order: 3 },
      { title: 'Risk Factors', description: 'Identifying causes of disease', order: 4 },
      { title: 'Screening Programs', description: 'Early detection strategies', order: 5 }
    ]
  },

  // FOUNDATIONAL NURSING
  
  {
    name: 'Introduction to Nursing',
    code: 'NURS-101',
    description: 'Overview of nursing profession, roles, responsibilities, and healthcare systems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundational Nursing',
    isCompulsory: false,
    icon: '👩‍⚕️',
    topics: [
      { title: 'History of Nursing', description: 'Evolution of the nursing profession', order: 1 },
      { title: 'Nursing Roles', description: 'Functions and responsibilities of nurses', order: 2 },
      { title: 'Healthcare Systems', description: 'Structure of healthcare delivery', order: 3 },
      { title: 'Professional Standards', description: 'Nursing regulations and scope of practice', order: 4 },
      { title: 'Nursing Process', description: 'Assessment, diagnosis, planning, implementation, evaluation', order: 5 }
    ]
  },
  {
    name: 'Fundamentals of Nursing Practice',
    code: 'NURS-102',
    description: 'Basic nursing skills and procedures essential for patient care.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundational Nursing',
    isCompulsory: false,
    icon: '🩺',
    topics: [
      { title: 'Vital Signs', description: 'Measuring temperature, pulse, respiration, blood pressure', order: 1 },
      { title: 'Infection Control', description: 'Hand hygiene and standard precautions', order: 2 },
      { title: 'Patient Safety', description: 'Fall prevention and error reduction', order: 3 },
      { title: 'Basic Care Skills', description: 'Hygiene, mobility, and comfort measures', order: 4 },
      { title: 'Documentation', description: 'Medical record keeping and reporting', order: 5 }
    ]
  },
  {
    name: 'Nursing Ethics & Professionalism',
    code: 'NURS-103',
    description: 'Ethical principles, professional conduct, and legal issues in nursing practice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundational Nursing',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Ethical Principles', description: 'Autonomy, beneficence, non-maleficence, justice', order: 1 },
      { title: 'Patient Rights', description: 'Informed consent and confidentiality', order: 2 },
      { title: 'Legal Issues', description: 'Malpractice and liability', order: 3 },
      { title: 'Professional Conduct', description: 'Code of ethics and professional behavior', order: 4 },
      { title: 'Ethical Dilemmas', description: 'Decision-making in complex situations', order: 5 }
    ]
  },
  {
    name: 'Health Assessment',
    code: 'NURS-104',
    description: 'Comprehensive patient assessment including history taking and physical examination.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundational Nursing',
    isCompulsory: false,
    icon: '🔍',
    topics: [
      { title: 'Health History', description: 'Interviewing and data collection', order: 1 },
      { title: 'Physical Examination', description: 'Inspection, palpation, percussion, auscultation', order: 2 },
      { title: 'System Assessment', description: 'Head-to-toe examination', order: 3 },
      { title: 'Diagnostic Reasoning', description: 'Analyzing assessment findings', order: 4 },
      { title: 'Documentation', description: 'Recording assessment data', order: 5 }
    ]
  },
  {
    name: 'Clinical Skills Lab',
    code: 'NURS-105',
    description: 'Hands-on practice of essential nursing procedures in a simulated environment.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Foundational Nursing',
    isCompulsory: false,
    icon: '🏥',
    topics: [
      { title: 'Medication Administration', description: 'Safe drug administration techniques', order: 1 },
      { title: 'Wound Care', description: 'Dressing changes and wound management', order: 2 },
      { title: 'IV Therapy', description: 'Intravenous catheter insertion and maintenance', order: 3 },
      { title: 'Catheterization', description: 'Urinary catheter insertion', order: 4 },
      { title: 'Emergency Skills', description: 'CPR and basic life support', order: 5 }
    ]
  },

  // SPECIALIZED NURSING AREAS
  
  {
    name: 'Medical-Surgical Nursing',
    code: 'NURS-201',
    description: 'Nursing care for adult patients with medical and surgical conditions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Specialized Nursing',
    isCompulsory: false,
    icon: '🏥',
    topics: [
      { title: 'Perioperative Nursing', description: 'Pre-op, intra-op, and post-op care', order: 1 },
      { title: 'Cardiovascular Nursing', description: 'Caring for heart disease patients', order: 2 },
      { title: 'Respiratory Nursing', description: 'Managing respiratory conditions', order: 3 },
      { title: 'Gastrointestinal Nursing', description: 'Digestive system disorders', order: 4 },
      { title: 'Pain Management', description: 'Assessing and managing patient pain', order: 5 }
    ]
  },
  {
    name: 'Pediatric Nursing',
    code: 'NURS-202',
    description: 'Specialized nursing care for infants, children, and adolescents.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Specialized Nursing',
    isCompulsory: false,
    icon: '👶',
    topics: [
      { title: 'Growth & Development', description: 'Normal child development milestones', order: 1 },
      { title: 'Pediatric Assessment', description: 'Assessing children of different ages', order: 2 },
      { title: 'Common Childhood Illnesses', description: 'Respiratory infections, gastroenteritis, etc.', order: 3 },
      { title: 'Immunizations', description: 'Vaccination schedules and administration', order: 4 },
      { title: 'Family-Centered Care', description: 'Involving families in child care', order: 5 }
    ]
  },
  {
    name: 'Maternity & Reproductive Health Nursing',
    code: 'NURS-203',
    description: 'Nursing care during pregnancy, childbirth, and postpartum period.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Specialized Nursing',
    isCompulsory: false,
    icon: '🤰',
    topics: [
      { title: 'Prenatal Care', description: 'Antenatal assessment and education', order: 1 },
      { title: 'Labor & Delivery', description: 'Stages of labor and delivery care', order: 2 },
      { title: 'Postpartum Care', description: 'Maternal recovery and newborn care', order: 3 },
      { title: 'Breastfeeding Support', description: 'Lactation education and assistance', order: 4 },
      { title: 'High-Risk Pregnancy', description: 'Complications and interventions', order: 5 }
    ]
  },
  {
    name: 'Community Health Nursing',
    code: 'NURS-204',
    description: 'Nursing practice focused on promoting health in community settings.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Specialized Nursing',
    isCompulsory: false,
    icon: '🏘️',
    topics: [
      { title: 'Community Assessment', description: 'Evaluating community health needs', order: 1 },
      { title: 'Health Education', description: 'Teaching health promotion in communities', order: 2 },
      { title: 'Disease Prevention', description: 'Screening and immunization programs', order: 3 },
      { title: 'Home Health Nursing', description: 'Providing care in patients\' homes', order: 4 },
      { title: 'Vulnerable Populations', description: 'Serving underserved communities', order: 5 }
    ]
  },
  {
    name: 'Psychiatric & Mental Health Nursing',
    code: 'NURS-205',
    description: 'Nursing care for patients with mental health disorders.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Specialized Nursing',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'Mental Health Assessment', description: 'Evaluating psychological status', order: 1 },
      { title: 'Therapeutic Communication', description: 'Building therapeutic relationships', order: 2 },
      { title: 'Common Mental Disorders', description: 'Depression, anxiety, schizophrenia', order: 3 },
      { title: 'Psychotropic Medications', description: 'Psychiatric drug therapy', order: 4 },
      { title: 'Crisis Intervention', description: 'Managing psychiatric emergencies', order: 5 }
    ]
  },
  {
    name: 'Geriatric / Elderly Care Nursing',
    code: 'NURS-206',
    description: 'Specialized nursing care for older adults and aging-related issues.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Specialized Nursing',
    isCompulsory: false,
    icon: '👴',
    topics: [
      { title: 'Aging Process', description: 'Normal physiological changes with aging', order: 1 },
      { title: 'Geriatric Assessment', description: 'Comprehensive assessment of elderly patients', order: 2 },
      { title: 'Common Geriatric Conditions', description: 'Dementia, falls, incontinence', order: 3 },
      { title: 'Medication Management', description: 'Polypharmacy and drug interactions', order: 4 },
      { title: 'End-of-Life Care', description: 'Palliative and hospice care', order: 5 }
    ]
  },
  {
    name: 'Critical Care Nursing',
    code: 'NURS-301',
    description: 'Advanced nursing care for critically ill patients in intensive care settings.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Specialized Nursing',
    isCompulsory: false,
    icon: '🚨',
    topics: [
      { title: 'ICU Environment', description: 'Critical care unit organization and equipment', order: 1 },
      { title: 'Hemodynamic Monitoring', description: 'Cardiac output and blood pressure monitoring', order: 2 },
      { title: 'Mechanical Ventilation', description: 'Ventilator management and weaning', order: 3 },
      { title: 'Shock Management', description: 'Types of shock and interventions', order: 4 },
      { title: 'Multiple Organ Dysfunction', description: 'Caring for complex critical patients', order: 5 }
    ]
  },

  // ADVANCED NURSING
  
  {
    name: 'Advanced Pharmacology',
    code: 'NURS-302',
    description: 'In-depth study of pharmacological principles for advanced nursing practice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Advanced Nursing',
    isCompulsory: false,
    icon: '💊',
    topics: [
      { title: 'Advanced Pharmacokinetics', description: 'Drug metabolism in special populations', order: 1 },
      { title: 'Prescribing Principles', description: 'Rational drug selection', order: 2 },
      { title: 'Drug Interactions', description: 'Complex medication interactions', order: 3 },
      { title: 'Pharmacogenomics', description: 'Genetic factors in drug response', order: 4 },
      { title: 'Evidence-Based Prescribing', description: 'Using research to guide therapy', order: 5 }
    ]
  },
  {
    name: 'Advanced Health Assessment',
    code: 'NURS-303',
    description: 'Comprehensive advanced physical assessment and diagnostic reasoning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Advanced Nursing',
    isCompulsory: false,
    icon: '🔍',
    topics: [
      { title: 'Advanced History Taking', description: 'Detailed patient interviews', order: 1 },
      { title: 'Advanced Physical Exam', description: 'Comprehensive system examination', order: 2 },
      { title: 'Diagnostic Reasoning', description: 'Differential diagnosis development', order: 3 },
      { title: 'Interpreting Lab Results', description: 'Understanding diagnostic tests', order: 4 },
      { title: 'Clinical Decision Making', description: 'Evidence-based assessment', order: 5 }
    ]
  },
  {
    name: 'Nursing Research Methods',
    code: 'NURS-304',
    description: 'Research design, methodology, and application in nursing practice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Advanced Nursing',
    isCompulsory: false,
    icon: '📚',
    topics: [
      { title: 'Research Process', description: 'Steps in conducting research', order: 1 },
      { title: 'Quantitative Methods', description: 'Experimental and survey research', order: 2 },
      { title: 'Qualitative Methods', description: 'Phenomenology and grounded theory', order: 3 },
      { title: 'Data Analysis', description: 'Statistical and thematic analysis', order: 4 },
      { title: 'Research Ethics', description: 'Ethical conduct in nursing research', order: 5 }
    ]
  },
  {
    name: 'Leadership & Management in Nursing',
    code: 'NURS-305',
    description: 'Leadership principles and management skills for nursing professionals.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Advanced Nursing',
    isCompulsory: false,
    icon: '👔',
    topics: [
      { title: 'Leadership Theories', description: 'Leadership styles and approaches', order: 1 },
      { title: 'Team Management', description: 'Building and leading nursing teams', order: 2 },
      { title: 'Quality Improvement', description: 'Enhancing patient care quality', order: 3 },
      { title: 'Conflict Resolution', description: 'Managing workplace conflicts', order: 4 },
      { title: 'Change Management', description: 'Leading organizational change', order: 5 }
    ]
  },
  {
    name: 'Evidence-Based Practice',
    code: 'NURS-306',
    description: 'Integrating research evidence into clinical nursing practice.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Advanced Nursing',
    isCompulsory: false,
    icon: '📖',
    topics: [
      { title: 'EBP Process', description: 'Steps in evidence-based practice', order: 1 },
      { title: 'Literature Review', description: 'Searching and evaluating research', order: 2 },
      { title: 'Critical Appraisal', description: 'Assessing research quality', order: 3 },
      { title: 'Implementing Evidence', description: 'Translating research to practice', order: 4 },
      { title: 'Evaluating Outcomes', description: 'Measuring practice changes', order: 5 }
    ]
  },

  // PUBLIC & COMMUNITY HEALTH
  
  {
    name: 'Public Health Studies',
    code: 'PUBH-101',
    description: 'Comprehensive study of public health principles and population health management.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Public & Community Health',
    isCompulsory: false,
    icon: '🏛️',
    topics: [
      { title: 'Public Health History', description: 'Evolution of public health practice', order: 1 },
      { title: 'Core Functions', description: 'Assessment, policy development, assurance', order: 2 },
      { title: 'Health Systems', description: 'Organization of public health services', order: 3 },
      { title: 'Population Health', description: 'Managing health of communities', order: 4 },
      { title: 'Public Health Law', description: 'Legal framework for public health', order: 5 }
    ]
  },
  {
    name: 'Global Health',
    code: 'PUBH-201',
    description: 'International health issues, global disease burden, and health equity.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Public & Community Health',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'Global Health Challenges', description: 'Major international health issues', order: 1 },
      { title: 'Infectious Diseases', description: 'HIV/AIDS, malaria, tuberculosis', order: 2 },
      { title: 'Non-Communicable Diseases', description: 'Global burden of chronic diseases', order: 3 },
      { title: 'Health Systems Strengthening', description: 'Improving healthcare in low-resource settings', order: 4 },
      { title: 'Global Health Organizations', description: 'WHO, UNICEF, and other agencies', order: 5 }
    ]
  },
  {
    name: 'Health Promotion',
    code: 'PUBH-102',
    description: 'Strategies and programs to promote health and prevent disease in populations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Public & Community Health',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Health Promotion Models', description: 'Theoretical frameworks for health promotion', order: 1 },
      { title: 'Behavior Change', description: 'Strategies for changing health behaviors', order: 2 },
      { title: 'Program Planning', description: 'Designing health promotion interventions', order: 3 },
      { title: 'Health Communication', description: 'Effective messaging and campaigns', order: 4 },
      { title: 'Program Evaluation', description: 'Assessing health promotion effectiveness', order: 5 }
    ]
  },
  {
    name: 'Environmental Health',
    code: 'PUBH-103',
    description: 'Environmental factors affecting human health and disease prevention.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Public & Community Health',
    isCompulsory: false,
    icon: '🌱',
    topics: [
      { title: 'Environmental Hazards', description: 'Air, water, and soil pollution', order: 1 },
      { title: 'Occupational Health', description: 'Workplace safety and health', order: 2 },
      { title: 'Food Safety', description: 'Foodborne illness prevention', order: 3 },
      { title: 'Climate Change', description: 'Health impacts of climate change', order: 4 },
      { title: 'Environmental Policy', description: 'Regulations protecting public health', order: 5 }
    ]
  },
  {
    name: 'Health Policy & Systems',
    code: 'PUBH-202',
    description: 'Healthcare policy development, health systems organization, and reform.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Public & Community Health',
    isCompulsory: false,
    icon: '📜',
    topics: [
      { title: 'Health Policy Process', description: 'How health policies are made', order: 1 },
      { title: 'Healthcare Financing', description: 'Funding models and insurance systems', order: 2 },
      { title: 'Health Systems Comparison', description: 'International healthcare systems', order: 3 },
      { title: 'Access to Care', description: 'Barriers and facilitators to healthcare', order: 4 },
      { title: 'Health Reform', description: 'Improving healthcare delivery', order: 5 }
    ]
  },

  // EMERGENCY & CLINICAL SUPPORT
  
  {
    name: 'First Aid & CPR',
    code: 'EMRG-101',
    description: 'Basic emergency response skills including first aid and cardiopulmonary resuscitation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Emergency & Clinical Support',
    isCompulsory: false,
    icon: '🚑',
    topics: [
      { title: 'Scene Safety', description: 'Assessing and ensuring safety', order: 1 },
      { title: 'Basic Life Support', description: 'CPR for adults, children, and infants', order: 2 },
      { title: 'Choking', description: 'Abdominal thrusts and back blows', order: 3 },
      { title: 'Bleeding Control', description: 'Direct pressure and tourniquets', order: 4 },
      { title: 'Common Emergencies', description: 'Burns, fractures, and shock', order: 5 }
    ]
  },
  {
    name: 'Emergency Medical Technician (EMT) Basics',
    code: 'EMRG-201',
    description: 'Foundational training for emergency medical technicians in pre-hospital care.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Emergency & Clinical Support',
    isCompulsory: false,
    icon: '🚑',
    topics: [
      { title: 'EMT Role', description: 'Responsibilities and scope of practice', order: 1 },
      { title: 'Patient Assessment', description: 'Primary and secondary surveys', order: 2 },
      { title: 'Airway Management', description: 'Maintaining airway patency', order: 3 },
      { title: 'Medical Emergencies', description: 'Cardiac, respiratory, and diabetic emergencies', order: 4 },
      { title: 'Trauma Care', description: 'Managing traumatic injuries', order: 5 }
    ]
  },
  {
    name: 'Paramedic Science',
    code: 'EMRG-301',
    description: 'Advanced pre-hospital emergency medical care and advanced life support.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Emergency & Clinical Support',
    isCompulsory: false,
    icon: '🚁',
    topics: [
      { title: 'Advanced Assessment', description: 'Comprehensive patient evaluation', order: 1 },
      { title: 'Advanced Airway', description: 'Intubation and advanced techniques', order: 2 },
      { title: 'Cardiac Emergencies', description: 'ECG interpretation and ACLS', order: 3 },
      { title: 'Pharmacology', description: 'Emergency medications and administration', order: 4 },
      { title: 'Special Populations', description: 'Pediatric and geriatric emergencies', order: 5 }
    ]
  },
  {
    name: 'Trauma Care',
    code: 'EMRG-202',
    description: 'Specialized care for traumatic injuries and multi-system trauma.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Emergency & Clinical Support',
    isCompulsory: false,
    icon: '🩹',
    topics: [
      { title: 'Trauma Assessment', description: 'ATLS and trauma surveys', order: 1 },
      { title: 'Head & Spinal Injuries', description: 'Neurological trauma management', order: 2 },
      { title: 'Chest & Abdominal Trauma', description: 'Thoracic and abdominal injuries', order: 3 },
      { title: 'Musculoskeletal Trauma', description: 'Fractures and dislocations', order: 4 },
      { title: 'Burn Management', description: 'Burn assessment and treatment', order: 5 }
    ]
  },
  {
    name: 'Disaster & Emergency Management',
    code: 'EMRG-203',
    description: 'Planning and response to mass casualty incidents and disasters.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Emergency & Clinical Support',
    isCompulsory: false,
    icon: '⚠️',
    topics: [
      { title: 'Disaster Preparedness', description: 'Planning for emergencies', order: 1 },
      { title: 'Incident Command System', description: 'ICS structure and roles', order: 2 },
      { title: 'Triage', description: 'Prioritizing patients in mass casualties', order: 3 },
      { title: 'Disaster Response', description: 'Coordinating emergency response', order: 4 },
      { title: 'Recovery', description: 'Post-disaster health services', order: 5 }
    ]
  },

  // LABORATORY & DIAGNOSTIC SCIENCES
  
  {
    name: 'Medical Laboratory Science',
    code: 'LAB-101',
    description: 'Introduction to clinical laboratory testing and diagnostic procedures.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Laboratory & Diagnostic Sciences',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Lab Safety', description: 'Biosafety and infection control', order: 1 },
      { title: 'Specimen Collection', description: 'Blood draw and sample handling', order: 2 },
      { title: 'Lab Equipment', description: 'Microscopes and analyzers', order: 3 },
      { title: 'Quality Control', description: 'Ensuring accurate results', order: 4 },
      { title: 'Lab Information Systems', description: 'Managing lab data', order: 5 }
    ]
  },
  {
    name: 'Hematology',
    code: 'LAB-201',
    description: 'Study of blood cells, blood disorders, and hematological testing.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Laboratory & Diagnostic Sciences',
    isCompulsory: false,
    icon: '🩸',
    topics: [
      { title: 'Blood Cell Morphology', description: 'Identifying blood cells', order: 1 },
      { title: 'Anemia', description: 'Types and laboratory diagnosis', order: 2 },
      { title: 'Leukemia & Lymphoma', description: 'Blood cancers', order: 3 },
      { title: 'Coagulation', description: 'Blood clotting tests', order: 4 },
      { title: 'Transfusion Medicine', description: 'Blood banking and compatibility', order: 5 }
    ]
  },
  {
    name: 'Clinical Chemistry',
    code: 'LAB-202',
    description: 'Chemical analysis of body fluids for disease diagnosis.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Laboratory & Diagnostic Sciences',
    isCompulsory: false,
    icon: '⚗️',
    topics: [
      { title: 'Glucose Testing', description: 'Diabetes diagnosis and monitoring', order: 1 },
      { title: 'Lipid Profile', description: 'Cholesterol and triglycerides', order: 2 },
      { title: 'Liver Function Tests', description: 'Assessing liver health', order: 3 },
      { title: 'Kidney Function Tests', description: 'Creatinine and BUN', order: 4 },
      { title: 'Electrolytes', description: 'Sodium, potassium, and acid-base balance', order: 5 }
    ]
  },
  {
    name: 'Immunology',
    code: 'LAB-203',
    description: 'Study of immune system and immunological testing.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Laboratory & Diagnostic Sciences',
    isCompulsory: false,
    icon: '🛡️',
    topics: [
      { title: 'Immune System', description: 'Innate and adaptive immunity', order: 1 },
      { title: 'Antibody Testing', description: 'Serological tests', order: 2 },
      { title: 'Autoimmune Diseases', description: 'Laboratory diagnosis', order: 3 },
      { title: 'Immunodeficiency', description: 'HIV and other immune disorders', order: 4 },
      { title: 'Transplant Immunology', description: 'Tissue typing and rejection', order: 5 }
    ]
  },
  {
    name: 'Diagnostic Imaging (Radiography)',
    code: 'RAD-101',
    description: 'Introduction to medical imaging techniques and radiographic procedures.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Laboratory & Diagnostic Sciences',
    isCompulsory: false,
    icon: '📷',
    topics: [
      { title: 'X-ray Physics', description: 'Principles of radiation', order: 1 },
      { title: 'Radiographic Techniques', description: 'Positioning and exposure', order: 2 },
      { title: 'Image Quality', description: 'Factors affecting image quality', order: 3 },
      { title: 'Radiation Safety', description: 'Protecting patients and staff', order: 4 },
      { title: 'Advanced Imaging', description: 'CT, MRI, and ultrasound', order: 5 }
    ]
  },

  // REHABILITATION & THERAPY
  
  {
    name: 'Physiotherapy Foundations',
    code: 'PHYS-101',
    description: 'Introduction to physical therapy principles and therapeutic exercises.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Rehabilitation & Therapy',
    isCompulsory: false,
    icon: '🏃',
    topics: [
      { title: 'Physical Assessment', description: 'Evaluating movement and function', order: 1 },
      { title: 'Therapeutic Exercise', description: 'Strengthening and stretching', order: 2 },
      { title: 'Manual Therapy', description: 'Hands-on treatment techniques', order: 3 },
      { title: 'Modalities', description: 'Heat, cold, and electrical stimulation', order: 4 },
      { title: 'Rehabilitation', description: 'Restoring function after injury', order: 5 }
    ]
  },
  {
    name: 'Occupational Therapy Basics',
    code: 'OT-101',
    description: 'Introduction to occupational therapy and activities of daily living.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Rehabilitation & Therapy',
    isCompulsory: false,
    icon: '🖐️',
    topics: [
      { title: 'OT Principles', description: 'Occupation-based practice', order: 1 },
      { title: 'Activity Analysis', description: 'Breaking down daily tasks', order: 2 },
      { title: 'Adaptive Equipment', description: 'Assistive devices and modifications', order: 3 },
      { title: 'Pediatric OT', description: 'Helping children develop skills', order: 4 },
      { title: 'Geriatric OT', description: 'Maintaining independence in elderly', order: 5 }
    ]
  },
  {
    name: 'Speech Therapy Essentials',
    code: 'SLP-101',
    description: 'Introduction to speech-language pathology and communication disorders.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Rehabilitation & Therapy',
    isCompulsory: false,
    icon: '🗣️',
    topics: [
      { title: 'Speech Development', description: 'Normal speech and language milestones', order: 1 },
      { title: 'Articulation Disorders', description: 'Speech sound problems', order: 2 },
      { title: 'Language Disorders', description: 'Receptive and expressive language', order: 3 },
      { title: 'Fluency Disorders', description: 'Stuttering and cluttering', order: 4 },
      { title: 'Swallowing Disorders', description: 'Dysphagia assessment and treatment', order: 5 }
    ]
  },
  {
    name: 'Exercise Science',
    code: 'EXSC-101',
    description: 'Scientific study of human movement, exercise, and physical fitness.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Rehabilitation & Therapy',
    isCompulsory: false,
    icon: '💪',
    topics: [
      { title: 'Exercise Physiology', description: 'Body responses to exercise', order: 1 },
      { title: 'Biomechanics', description: 'Mechanics of human movement', order: 2 },
      { title: 'Fitness Assessment', description: 'Testing strength, endurance, flexibility', order: 3 },
      { title: 'Exercise Prescription', description: 'Designing exercise programs', order: 4 },
      { title: 'Nutrition for Athletes', description: 'Sports nutrition principles', order: 5 }
    ]
  },
  {
    name: 'Sports Medicine',
    code: 'SPRT-101',
    description: 'Prevention, diagnosis, and treatment of sports-related injuries.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Rehabilitation & Therapy',
    isCompulsory: false,
    icon: '⚽',
    topics: [
      { title: 'Sports Injuries', description: 'Common athletic injuries', order: 1 },
      { title: 'Injury Prevention', description: 'Warm-up, stretching, and conditioning', order: 2 },
      { title: 'Acute Injury Management', description: 'RICE protocol', order: 3 },
      { title: 'Rehabilitation', description: 'Return to sport protocols', order: 4 },
      { title: 'Performance Enhancement', description: 'Optimizing athletic performance', order: 5 }
    ]
  },

  // MENTAL HEALTH & SOCIAL CARE
  
  {
    name: 'Introduction to Psychology',
    code: 'PSY-101',
    description: 'Foundational concepts in psychology and human behavior.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'History of Psychology', description: 'Evolution of psychological science', order: 1 },
      { title: 'Research Methods', description: 'Scientific study of behavior', order: 2 },
      { title: 'Biological Basis', description: 'Brain and nervous system', order: 3 },
      { title: 'Learning & Memory', description: 'How we learn and remember', order: 4 },
      { title: 'Personality', description: 'Individual differences', order: 5 }
    ]
  },
  {
    name: 'Mental Health Studies',
    code: 'MH-101',
    description: 'Understanding mental health, mental illness, and psychological well-being.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '🧘',
    topics: [
      { title: 'Mental Health Concepts', description: 'Defining mental health and illness', order: 1 },
      { title: 'Common Mental Disorders', description: 'Depression, anxiety, and psychosis', order: 2 },
      { title: 'Mental Health Assessment', description: 'Screening and evaluation', order: 3 },
      { title: 'Treatment Approaches', description: 'Therapy and medication', order: 4 },
      { title: 'Recovery', description: 'Promoting mental wellness', order: 5 }
    ]
  },
  {
    name: 'Counseling Skills',
    code: 'COUN-101',
    description: 'Basic counseling techniques and therapeutic communication skills.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '💬',
    topics: [
      { title: 'Counseling Theories', description: 'Approaches to counseling', order: 1 },
      { title: 'Active Listening', description: 'Empathetic listening skills', order: 2 },
      { title: 'Therapeutic Relationship', description: 'Building rapport and trust', order: 3 },
      { title: 'Counseling Techniques', description: 'Interventions and strategies', order: 4 },
      { title: 'Ethical Practice', description: 'Confidentiality and boundaries', order: 5 }
    ]
  },
  {
    name: 'Behavioral Science',
    code: 'BEHV-101',
    description: 'Study of human behavior and factors influencing actions and decisions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '👥',
    topics: [
      { title: 'Behavior Analysis', description: 'Understanding why people behave', order: 1 },
      { title: 'Social Influences', description: 'Group dynamics and conformity', order: 2 },
      { title: 'Motivation', description: 'Drives and incentives', order: 3 },
      { title: 'Behavior Change', description: 'Modifying habits and behaviors', order: 4 },
      { title: 'Applied Behavior Analysis', description: 'Practical applications', order: 5 }
    ]
  },
  {
    name: 'Addiction Studies',
    code: 'ADD-101',
    description: 'Understanding substance abuse, addiction, and recovery processes.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '🚭',
    topics: [
      { title: 'Addiction Basics', description: 'What is addiction?', order: 1 },
      { title: 'Substances of Abuse', description: 'Alcohol, drugs, and other substances', order: 2 },
      { title: 'Assessment', description: 'Screening for substance use disorders', order: 3 },
      { title: 'Treatment Approaches', description: 'Detox, counseling, and medication', order: 4 },
      { title: 'Recovery Support', description: 'Relapse prevention and support groups', order: 5 }
    ]
  },
  {
    name: 'Social Work Foundations',
    code: 'SW-101',
    description: 'Introduction to social work practice and helping vulnerable populations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '🤝',
    topics: [
      { title: 'Social Work Values', description: 'Ethics and professional standards', order: 1 },
      { title: 'Assessment', description: 'Evaluating client needs', order: 2 },
      { title: 'Intervention', description: 'Helping individuals and families', order: 3 },
      { title: 'Case Management', description: 'Coordinating services', order: 4 },
      { title: 'Advocacy', description: 'Fighting for client rights', order: 5 }
    ]
  },
  {
    name: 'Child & Adolescent Health',
    code: 'CAH-101',
    description: 'Health issues specific to children and adolescents.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '👶',
    topics: [
      { title: 'Child Development', description: 'Physical, cognitive, and social development', order: 1 },
      { title: 'Common Childhood Illnesses', description: 'Pediatric health conditions', order: 2 },
      { title: 'Adolescent Health', description: 'Teen health issues', order: 3 },
      { title: 'Mental Health', description: 'Childhood and adolescent mental disorders', order: 4 },
      { title: 'Child Protection', description: 'Abuse and neglect prevention', order: 5 }
    ]
  },
  {
    name: 'Disability Studies',
    code: 'DS-101',
    description: 'Understanding disabilities and promoting inclusion and accessibility.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '♿',
    topics: [
      { title: 'Disability Models', description: 'Medical vs. social models', order: 1 },
      { title: 'Types of Disabilities', description: 'Physical, sensory, intellectual, and mental', order: 2 },
      { title: 'Accessibility', description: 'Universal design and accommodations', order: 3 },
      { title: 'Disability Rights', description: 'Legal protections and advocacy', order: 4 },
      { title: 'Support Services', description: 'Resources for people with disabilities', order: 5 }
    ]
  },
  {
    name: 'Community Care Support',
    code: 'CCS-101',
    description: 'Providing care and support services in community settings.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Mental Health & Social Care',
    isCompulsory: false,
    icon: '🏘️',
    topics: [
      { title: 'Community Care Principles', description: 'Person-centered care', order: 1 },
      { title: 'Home Care', description: 'Providing services at home', order: 2 },
      { title: 'Day Programs', description: 'Community-based activities', order: 3 },
      { title: 'Respite Care', description: 'Supporting family caregivers', order: 4 },
      { title: 'Care Coordination', description: 'Linking clients to services', order: 5 }
    ]
  },

  // HEALTH ADMINISTRATION & MANAGEMENT
  
  {
    name: 'Health Care Administration',
    code: 'HCA-101',
    description: 'Management principles applied to healthcare organizations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Administration & Management',
    isCompulsory: false,
    icon: '💼',
    topics: [
      { title: 'Healthcare Management', description: 'Leadership in healthcare settings', order: 1 },
      { title: 'Organizational Structure', description: 'Healthcare facility organization', order: 2 },
      { title: 'Human Resources', description: 'Staffing and workforce management', order: 3 },
      { title: 'Financial Management', description: 'Budgeting and revenue cycle', order: 4 },
      { title: 'Strategic Planning', description: 'Long-term organizational planning', order: 5 }
    ]
  },
  {
    name: 'Hospital Management',
    code: 'HCA-201',
    description: 'Specialized management of hospital operations and services.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Administration & Management',
    isCompulsory: false,
    icon: '🏥',
    topics: [
      { title: 'Hospital Operations', description: 'Day-to-day management', order: 1 },
      { title: 'Clinical Services', description: 'Managing medical departments', order: 2 },
      { title: 'Patient Flow', description: 'Admissions, transfers, and discharges', order: 3 },
      { title: 'Quality & Safety', description: 'Patient safety initiatives', order: 4 },
      { title: 'Accreditation', description: 'Meeting regulatory standards', order: 5 }
    ]
  },
  {
    name: 'Medical Records & Health Information Systems',
    code: 'HIM-101',
    description: 'Management of patient health information and medical records.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Administration & Management',
    isCompulsory: false,
    icon: '📁',
    topics: [
      { title: 'Medical Record Content', description: 'Components of patient records', order: 1 },
      { title: 'Documentation Standards', description: 'Legal and regulatory requirements', order: 2 },
      { title: 'Coding & Classification', description: 'ICD and CPT coding', order: 3 },
      { title: 'Privacy & Security', description: 'HIPAA and confidentiality', order: 4 },
      { title: 'Health Information Systems', description: 'Electronic health records', order: 5 }
    ]
  },
  {
    name: 'Health Economics',
    code: 'HCA-202',
    description: 'Economic principles applied to healthcare delivery and policy.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Administration & Management',
    isCompulsory: false,
    icon: '💰',
    topics: [
      { title: 'Healthcare Markets', description: 'Supply and demand in healthcare', order: 1 },
      { title: 'Cost Analysis', description: 'Healthcare spending and efficiency', order: 2 },
      { title: 'Insurance', description: 'Health insurance models', order: 3 },
      { title: 'Economic Evaluation', description: 'Cost-effectiveness analysis', order: 4 },
      { title: 'Healthcare Financing', description: 'Funding healthcare systems', order: 5 }
    ]
  },
  {
    name: 'Quality Assurance in Health Care',
    code: 'HCA-203',
    description: 'Methods for ensuring and improving quality of healthcare services.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Administration & Management',
    isCompulsory: false,
    icon: '✅',
    topics: [
      { title: 'Quality Concepts', description: 'Defining healthcare quality', order: 1 },
      { title: 'Quality Measurement', description: 'Indicators and metrics', order: 2 },
      { title: 'Quality Improvement', description: 'Continuous improvement methods', order: 3 },
      { title: 'Patient Safety', description: 'Error prevention and reduction', order: 4 },
      { title: 'Accreditation', description: 'Quality standards and certification', order: 5 }
    ]
  },

  // HEALTH TECHNOLOGY & INFORMATICS
  
  {
    name: 'Health Information Management',
    code: 'HIT-101',
    description: 'Managing health data and information systems in healthcare organizations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Technology & Informatics',
    isCompulsory: false,
    icon: '💻',
    topics: [
      { title: 'Health Informatics', description: 'Information technology in healthcare', order: 1 },
      { title: 'Data Management', description: 'Collecting and storing health data', order: 2 },
      { title: 'Information Systems', description: 'Types of healthcare IT systems', order: 3 },
      { title: 'Data Quality', description: 'Ensuring accurate health information', order: 4 },
      { title: 'Information Governance', description: 'Policies for managing health data', order: 5 }
    ]
  },
  {
    name: 'Electronic Health Records (EHR)',
    code: 'HIT-201',
    description: 'Implementation and use of electronic health record systems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Technology & Informatics',
    isCompulsory: false,
    icon: '📱',
    topics: [
      { title: 'EHR Basics', description: 'What are electronic health records?', order: 1 },
      { title: 'EHR Implementation', description: 'Selecting and deploying EHR systems', order: 2 },
      { title: 'Clinical Documentation', description: 'Documenting care in EHRs', order: 3 },
      { title: 'Interoperability', description: 'Sharing data between systems', order: 4 },
      { title: 'EHR Optimization', description: 'Improving EHR usability', order: 5 }
    ]
  },
  {
    name: 'Data Analytics for Health',
    code: 'HIT-202',
    description: 'Using data analysis to improve healthcare outcomes and operations.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Technology & Informatics',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Healthcare Data', description: 'Types and sources of health data', order: 1 },
      { title: 'Descriptive Analytics', description: 'Summarizing and visualizing data', order: 2 },
      { title: 'Predictive Analytics', description: 'Forecasting health outcomes', order: 3 },
      { title: 'Clinical Decision Support', description: 'Using data to guide care', order: 4 },
      { title: 'Population Health Analytics', description: 'Analyzing community health data', order: 5 }
    ]
  },
  {
    name: 'Telehealth & Digital Health',
    code: 'HIT-203',
    description: 'Remote healthcare delivery using technology and digital tools.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Technology & Informatics',
    isCompulsory: false,
    icon: '📞',
    topics: [
      { title: 'Telehealth Basics', description: 'What is telehealth?', order: 1 },
      { title: 'Telemedicine', description: 'Remote clinical consultations', order: 2 },
      { title: 'Remote Monitoring', description: 'Tracking patient health remotely', order: 3 },
      { title: 'Mobile Health', description: 'Health apps and wearables', order: 4 },
      { title: 'Digital Health Tools', description: 'Emerging technologies in healthcare', order: 5 }
    ]
  },
  {
    name: 'Healthcare Technology Systems',
    code: 'HIT-204',
    description: 'Overview of technology infrastructure in healthcare settings.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Health Technology & Informatics',
    isCompulsory: false,
    icon: '🖥️',
    topics: [
      { title: 'Healthcare IT Infrastructure', description: 'Networks and servers', order: 1 },
      { title: 'Clinical Systems', description: 'Laboratory, pharmacy, and radiology systems', order: 2 },
      { title: 'Administrative Systems', description: 'Billing and scheduling systems', order: 3 },
      { title: 'Cybersecurity', description: 'Protecting health information', order: 4 },
      { title: 'System Integration', description: 'Connecting healthcare systems', order: 5 }
    ]
  },

  // RESEARCH & ACADEMIC COURSES
  
  {
    name: 'Research Methods in Health Sciences',
    code: 'RES-101',
    description: 'Introduction to research design and methodology in health sciences.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Research & Academic',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Research Process', description: 'Steps in conducting research', order: 1 },
      { title: 'Study Designs', description: 'Experimental, observational, and qualitative', order: 2 },
      { title: 'Sampling', description: 'Selecting study participants', order: 3 },
      { title: 'Data Collection', description: 'Surveys, interviews, and observations', order: 4 },
      { title: 'Research Proposal', description: 'Writing a research proposal', order: 5 }
    ]
  },
  {
    name: 'Biostatistics',
    code: 'RES-201',
    description: 'Statistical methods for analyzing health and biological data.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Research & Academic',
    isCompulsory: false,
    icon: '📈',
    topics: [
      { title: 'Descriptive Statistics', description: 'Summarizing data', order: 1 },
      { title: 'Probability', description: 'Likelihood and distributions', order: 2 },
      { title: 'Hypothesis Testing', description: 'Statistical significance', order: 3 },
      { title: 'Regression Analysis', description: 'Relationships between variables', order: 4 },
      { title: 'Survival Analysis', description: 'Time-to-event data', order: 5 }
    ]
  },
  {
    name: 'Ethical Conduct in Health Research',
    code: 'RES-102',
    description: 'Ethical principles and regulations governing health research.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Research & Academic',
    isCompulsory: false,
    icon: '⚖️',
    topics: [
      { title: 'Research Ethics Principles', description: 'Respect, beneficence, justice', order: 1 },
      { title: 'Informed Consent', description: 'Obtaining voluntary participation', order: 2 },
      { title: 'Vulnerable Populations', description: 'Protecting special groups', order: 3 },
      { title: 'Institutional Review Boards', description: 'Ethics committee approval', order: 4 },
      { title: 'Research Misconduct', description: 'Plagiarism, fabrication, and falsification', order: 5 }
    ]
  },
  {
    name: 'Academic Writing for Health Students',
    code: 'RES-103',
    description: 'Developing academic writing skills for health sciences.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Research & Academic',
    isCompulsory: false,
    icon: '✍️',
    topics: [
      { title: 'Academic Writing Style', description: 'Formal and objective writing', order: 1 },
      { title: 'Literature Review', description: 'Synthesizing research', order: 2 },
      { title: 'Research Papers', description: 'Structure and components', order: 3 },
      { title: 'Citations', description: 'APA, Vancouver, and other styles', order: 4 },
      { title: 'Critical Analysis', description: 'Evaluating and critiquing research', order: 5 }
    ]
  }
];

async function seedHealthNursing() {
  console.log('🏥 Starting Health & Nursing seeding...\n');

  for (const course of healthNursingCourses) {
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

  console.log('✅ Health & Nursing seeding complete!\n');
  
  // Print summary
  const courseCount = healthNursingCourses.length;
  const topicCount = healthNursingCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`\n   Categories:`);
  console.log(`   - Core Health Sciences (10 courses)`);
  console.log(`   - Foundational Nursing (5 courses)`);
  console.log(`   - Specialized Nursing (7 courses)`);
  console.log(`   - Advanced Nursing (5 courses)`);
  console.log(`   - Public & Community Health (5 courses)`);
  console.log(`   - Emergency & Clinical Support (5 courses)`);
  console.log(`   - Laboratory & Diagnostic Sciences (5 courses)`);
  console.log(`   - Rehabilitation & Therapy (5 courses)`);
  console.log(`   - Mental Health & Social Care (9 courses)`);
  console.log(`   - Health Administration & Management (5 courses)`);
  console.log(`   - Health Technology & Informatics (5 courses)`);
  console.log(`   - Research & Academic (4 courses)`);
}

seedHealthNursing()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
