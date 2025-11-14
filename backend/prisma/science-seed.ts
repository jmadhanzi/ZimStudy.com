import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const scienceCourses = [
  // BIOLOGY COURSES
  
  {
    name: 'General Biology',
    code: 'BIO-101',
    description: 'Introduction to biological sciences covering cell structure, genetics, evolution, ecology, and the diversity of life. Foundational course for all biology students.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biology',
    isCompulsory: false,
    icon: '🧬',
    topics: [
      { title: 'Cell Structure and Function', description: 'Prokaryotic and eukaryotic cells', order: 1 },
      { title: 'Genetics and Heredity', description: 'DNA, genes, and inheritance', order: 2 },
      { title: 'Evolution and Natural Selection', description: 'Mechanisms of evolution', order: 3 },
      { title: 'Ecology and Ecosystems', description: 'Interactions in nature', order: 4 },
      { title: 'Diversity of Life', description: 'Classification and biodiversity', order: 5 }
    ]
  },
  {
    name: 'Cell Biology',
    code: 'BIO-201',
    description: 'In-depth study of cell structure, function, and processes including cell division, metabolism, and cellular communication.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biology',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Cell Membrane and Transport', description: 'Membrane structure and function', order: 1 },
      { title: 'Cell Organelles', description: 'Mitochondria, chloroplasts, and more', order: 2 },
      { title: 'Cell Division', description: 'Mitosis and meiosis', order: 3 },
      { title: 'Cellular Metabolism', description: 'Respiration and photosynthesis', order: 4 },
      { title: 'Cell Signaling', description: 'Communication between cells', order: 5 }
    ]
  },
  {
    name: 'Genetics',
    code: 'BIO-202',
    description: 'Study of heredity, genes, DNA, genetic variation, and molecular genetics including gene expression and regulation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biology',
    isCompulsory: false,
    icon: '🧬',
    topics: [
      { title: 'Mendelian Genetics', description: 'Laws of inheritance', order: 1 },
      { title: 'DNA Structure and Replication', description: 'Molecular basis of heredity', order: 2 },
      { title: 'Gene Expression', description: 'Transcription and translation', order: 3 },
      { title: 'Genetic Variation', description: 'Mutations and polymorphisms', order: 4 },
      { title: 'Genetic Engineering', description: 'Biotechnology applications', order: 5 }
    ]
  },
  {
    name: 'Human Anatomy',
    code: 'BIO-203',
    description: 'Comprehensive study of human body structure including skeletal, muscular, nervous, circulatory, and other organ systems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biology',
    isCompulsory: false,
    icon: '🫀',
    topics: [
      { title: 'Skeletal System', description: 'Bones and joints', order: 1 },
      { title: 'Muscular System', description: 'Muscles and movement', order: 2 },
      { title: 'Nervous System', description: 'Brain, spinal cord, and nerves', order: 3 },
      { title: 'Circulatory System', description: 'Heart and blood vessels', order: 4 },
      { title: 'Digestive and Respiratory Systems', description: 'Organs and functions', order: 5 }
    ]
  },
  {
    name: 'Ecology',
    code: 'BIO-204',
    description: 'Study of interactions between organisms and their environment, including populations, communities, ecosystems, and conservation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biology',
    isCompulsory: false,
    icon: '🌿',
    topics: [
      { title: 'Population Ecology', description: 'Population dynamics and growth', order: 1 },
      { title: 'Community Ecology', description: 'Species interactions', order: 2 },
      { title: 'Ecosystem Ecology', description: 'Energy flow and nutrient cycles', order: 3 },
      { title: 'Biodiversity', description: 'Species richness and conservation', order: 4 },
      { title: 'Conservation Biology', description: 'Protecting ecosystems', order: 5 }
    ]
  },
  {
    name: 'Microbiology',
    code: 'BIO-205',
    description: 'Study of microorganisms including bacteria, viruses, fungi, and protists, their structure, function, and applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biology',
    isCompulsory: false,
    icon: '🦠',
    topics: [
      { title: 'Bacterial Structure and Function', description: 'Prokaryotic cells', order: 1 },
      { title: 'Viral Biology', description: 'Virus structure and replication', order: 2 },
      { title: 'Fungi and Protists', description: 'Eukaryotic microbes', order: 3 },
      { title: 'Microbial Metabolism', description: 'Growth and nutrition', order: 4 },
      { title: 'Applied Microbiology', description: 'Industrial and medical applications', order: 5 }
    ]
  },

  // CHEMISTRY COURSES
  
  {
    name: 'General Chemistry',
    code: 'CHEM-101',
    description: 'Introduction to chemistry covering atomic structure, chemical bonding, stoichiometry, states of matter, and chemical reactions.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Chemistry',
    isCompulsory: false,
    icon: '⚗️',
    topics: [
      { title: 'Atomic Structure', description: 'Atoms, elements, and the periodic table', order: 1 },
      { title: 'Chemical Bonding', description: 'Ionic, covalent, and metallic bonds', order: 2 },
      { title: 'Stoichiometry', description: 'Chemical calculations', order: 3 },
      { title: 'States of Matter', description: 'Solids, liquids, and gases', order: 4 },
      { title: 'Chemical Reactions', description: 'Types and mechanisms', order: 5 }
    ]
  },
  {
    name: 'Organic Chemistry',
    code: 'CHEM-201',
    description: 'Study of carbon-containing compounds, their structure, properties, reactions, and synthesis.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Chemistry',
    isCompulsory: false,
    icon: '🧪',
    topics: [
      { title: 'Hydrocarbons', description: 'Alkanes, alkenes, and alkynes', order: 1 },
      { title: 'Functional Groups', description: 'Alcohols, aldehydes, ketones, and more', order: 2 },
      { title: 'Stereochemistry', description: 'Isomers and chirality', order: 3 },
      { title: 'Reaction Mechanisms', description: 'How reactions occur', order: 4 },
      { title: 'Synthesis', description: 'Building complex molecules', order: 5 }
    ]
  },
  {
    name: 'Inorganic Chemistry',
    code: 'CHEM-202',
    description: 'Study of inorganic compounds, coordination chemistry, metals, and non-metals.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Chemistry',
    isCompulsory: false,
    icon: '⚛️',
    topics: [
      { title: 'Periodic Trends', description: 'Properties across the periodic table', order: 1 },
      { title: 'Coordination Chemistry', description: 'Complex ions and ligands', order: 2 },
      { title: 'Transition Metals', description: 'Properties and reactions', order: 3 },
      { title: 'Main Group Elements', description: 'Groups 1-18 chemistry', order: 4 },
      { title: 'Solid State Chemistry', description: 'Crystals and materials', order: 5 }
    ]
  },
  {
    name: 'Physical Chemistry',
    code: 'CHEM-203',
    description: 'Study of the physical properties of molecules, chemical thermodynamics, kinetics, and quantum chemistry.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Chemistry',
    isCompulsory: false,
    icon: '🔥',
    topics: [
      { title: 'Thermodynamics', description: 'Energy and entropy', order: 1 },
      { title: 'Chemical Kinetics', description: 'Reaction rates', order: 2 },
      { title: 'Quantum Chemistry', description: 'Atomic and molecular orbitals', order: 3 },
      { title: 'Spectroscopy', description: 'Analyzing molecules with light', order: 4 },
      { title: 'Electrochemistry', description: 'Redox reactions and batteries', order: 5 }
    ]
  },
  {
    name: 'Analytical Chemistry',
    code: 'CHEM-204',
    description: 'Techniques for analyzing chemical composition including chromatography, spectroscopy, and electrochemical methods.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Chemistry',
    isCompulsory: false,
    icon: '📊',
    topics: [
      { title: 'Quantitative Analysis', description: 'Measuring concentrations', order: 1 },
      { title: 'Chromatography', description: 'Separation techniques', order: 2 },
      { title: 'Spectroscopy', description: 'UV-Vis, IR, and NMR', order: 3 },
      { title: 'Mass Spectrometry', description: 'Molecular weight determination', order: 4 },
      { title: 'Electroanalytical Methods', description: 'Potentiometry and voltammetry', order: 5 }
    ]
  },

  // PHYSICS COURSES
  
  {
    name: 'General Physics',
    code: 'PHYS-101',
    description: 'Introduction to physics covering mechanics, energy, waves, and basic concepts of electricity and magnetism.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Physics',
    isCompulsory: false,
    icon: '⚛️',
    topics: [
      { title: 'Kinematics', description: 'Motion and velocity', order: 1 },
      { title: 'Forces and Newton\'s Laws', description: 'Dynamics', order: 2 },
      { title: 'Energy and Work', description: 'Conservation of energy', order: 3 },
      { title: 'Waves and Sound', description: 'Wave properties', order: 4 },
      { title: 'Basic Electricity', description: 'Circuits and current', order: 5 }
    ]
  },
  {
    name: 'Classical Mechanics',
    code: 'PHYS-201',
    description: 'Advanced study of motion, forces, energy, momentum, and rotational dynamics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Physics',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Newton\'s Laws in Detail', description: 'Advanced dynamics', order: 1 },
      { title: 'Energy and Momentum', description: 'Conservation laws', order: 2 },
      { title: 'Rotational Motion', description: 'Torque and angular momentum', order: 3 },
      { title: 'Oscillations', description: 'Simple harmonic motion', order: 4 },
      { title: 'Gravitation', description: 'Universal gravitation', order: 5 }
    ]
  },
  {
    name: 'Electricity & Magnetism',
    code: 'PHYS-202',
    description: 'Study of electric fields, magnetic fields, circuits, and electromagnetic waves.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Physics',
    isCompulsory: false,
    icon: '⚡',
    topics: [
      { title: 'Electric Fields and Forces', description: 'Coulomb\'s law', order: 1 },
      { title: 'Electric Potential', description: 'Voltage and capacitance', order: 2 },
      { title: 'Electric Circuits', description: 'Ohm\'s law and circuit analysis', order: 3 },
      { title: 'Magnetic Fields', description: 'Magnetism and electromagnetism', order: 4 },
      { title: 'Electromagnetic Induction', description: 'Faraday\'s law', order: 5 }
    ]
  },
  {
    name: 'Thermodynamics',
    code: 'PHYS-203',
    description: 'Study of heat, temperature, energy transfer, and the laws of thermodynamics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Physics',
    isCompulsory: false,
    icon: '🌡️',
    topics: [
      { title: 'Temperature and Heat', description: 'Thermal energy', order: 1 },
      { title: 'First Law of Thermodynamics', description: 'Energy conservation', order: 2 },
      { title: 'Second Law of Thermodynamics', description: 'Entropy', order: 3 },
      { title: 'Heat Engines', description: 'Efficiency and cycles', order: 4 },
      { title: 'Kinetic Theory', description: 'Molecular motion', order: 5 }
    ]
  },
  {
    name: 'Modern Physics',
    code: 'PHYS-204',
    description: 'Introduction to quantum mechanics, relativity, atomic and nuclear physics.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Physics',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Special Relativity', description: 'Einstein\'s theory', order: 1 },
      { title: 'Quantum Mechanics Basics', description: 'Wave-particle duality', order: 2 },
      { title: 'Atomic Structure', description: 'Bohr model and beyond', order: 3 },
      { title: 'Nuclear Physics', description: 'Radioactivity and fission', order: 4 },
      { title: 'Particle Physics', description: 'Elementary particles', order: 5 }
    ]
  },

  // ENVIRONMENTAL SCIENCE
  
  {
    name: 'Environmental Science',
    code: 'ENV-101',
    description: 'Study of environmental systems, sustainability, conservation, pollution, climate change, and human impact on the environment.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Environmental Science',
    isCompulsory: false,
    icon: '🌍',
    topics: [
      { title: 'Ecosystems and Biodiversity', description: 'Natural systems', order: 1 },
      { title: 'Pollution and Waste', description: 'Air, water, and soil pollution', order: 2 },
      { title: 'Climate Change', description: 'Global warming and impacts', order: 3 },
      { title: 'Sustainability', description: 'Renewable resources', order: 4 },
      { title: 'Conservation', description: 'Protecting the environment', order: 5 }
    ]
  },
  {
    name: 'Conservation Biology',
    code: 'ENV-201',
    description: 'Study of biodiversity conservation, endangered species, habitat protection, and restoration ecology.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Environmental Science',
    isCompulsory: false,
    icon: '🦏',
    topics: [
      { title: 'Biodiversity Assessment', description: 'Measuring species richness', order: 1 },
      { title: 'Endangered Species', description: 'Threats and protection', order: 2 },
      { title: 'Habitat Conservation', description: 'Protected areas', order: 3 },
      { title: 'Restoration Ecology', description: 'Ecosystem recovery', order: 4 },
      { title: 'Wildlife Management', description: 'Conservation strategies', order: 5 }
    ]
  },

  // ASTRONOMY
  
  {
    name: 'Introduction to Astronomy',
    code: 'ASTR-101',
    description: 'Study of celestial objects, the solar system, stars, galaxies, and the universe.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Astronomy',
    isCompulsory: false,
    icon: '🌌',
    topics: [
      { title: 'The Solar System', description: 'Planets, moons, and asteroids', order: 1 },
      { title: 'Stars and Stellar Evolution', description: 'Life cycle of stars', order: 2 },
      { title: 'Galaxies', description: 'Milky Way and beyond', order: 3 },
      { title: 'Cosmology', description: 'The Big Bang and universe', order: 4 },
      { title: 'Observational Astronomy', description: 'Telescopes and techniques', order: 5 }
    ]
  },
  {
    name: 'Planetary Science',
    code: 'ASTR-201',
    description: 'Detailed study of planets, moons, and other solar system objects.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Astronomy',
    isCompulsory: false,
    icon: '🪐',
    topics: [
      { title: 'Terrestrial Planets', description: 'Mercury, Venus, Earth, Mars', order: 1 },
      { title: 'Gas Giants', description: 'Jupiter and Saturn', order: 2 },
      { title: 'Ice Giants', description: 'Uranus and Neptune', order: 3 },
      { title: 'Moons and Rings', description: 'Satellite systems', order: 4 },
      { title: 'Exoplanets', description: 'Planets beyond our solar system', order: 5 }
    ]
  },

  // EARTH SCIENCE
  
  {
    name: 'Earth Science',
    code: 'EARTH-101',
    description: 'Study of Earth\'s structure, processes, geology, meteorology, and oceanography.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Earth Science',
    isCompulsory: false,
    icon: '🌏',
    topics: [
      { title: 'Earth\'s Structure', description: 'Layers of the Earth', order: 1 },
      { title: 'Plate Tectonics', description: 'Continental drift', order: 2 },
      { title: 'Rocks and Minerals', description: 'Geology basics', order: 3 },
      { title: 'Weather and Climate', description: 'Atmospheric science', order: 4 },
      { title: 'Oceans', description: 'Marine science', order: 5 }
    ]
  },
  {
    name: 'Geology',
    code: 'EARTH-201',
    description: 'Study of Earth\'s materials, structure, processes, and history.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Earth Science',
    isCompulsory: false,
    icon: '⛰️',
    topics: [
      { title: 'Mineralogy', description: 'Mineral properties', order: 1 },
      { title: 'Petrology', description: 'Rock types and formation', order: 2 },
      { title: 'Structural Geology', description: 'Folds and faults', order: 3 },
      { title: 'Geologic Time', description: 'Earth\'s history', order: 4 },
      { title: 'Economic Geology', description: 'Natural resources', order: 5 }
    ]
  },
  {
    name: 'Meteorology',
    code: 'EARTH-202',
    description: 'Study of the atmosphere, weather patterns, and climate.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Earth Science',
    isCompulsory: false,
    icon: '⛈️',
    topics: [
      { title: 'Atmospheric Structure', description: 'Layers of the atmosphere', order: 1 },
      { title: 'Weather Systems', description: 'Highs, lows, and fronts', order: 2 },
      { title: 'Severe Weather', description: 'Hurricanes, tornadoes, and storms', order: 3 },
      { title: 'Climate Patterns', description: 'Global climate zones', order: 4 },
      { title: 'Weather Forecasting', description: 'Prediction methods', order: 5 }
    ]
  },
  {
    name: 'Oceanography',
    code: 'EARTH-203',
    description: 'Study of the oceans, marine life, ocean currents, and marine ecosystems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Earth Science',
    isCompulsory: false,
    icon: '🌊',
    topics: [
      { title: 'Ocean Basins', description: 'Seafloor features', order: 1 },
      { title: 'Ocean Currents', description: 'Circulation patterns', order: 2 },
      { title: 'Marine Life', description: 'Ocean biodiversity', order: 3 },
      { title: 'Coastal Processes', description: 'Beaches and erosion', order: 4 },
      { title: 'Ocean Chemistry', description: 'Salinity and pH', order: 5 }
    ]
  },

  // ANATOMY & PHYSIOLOGY
  
  {
    name: 'Anatomy & Physiology I',
    code: 'A&P-101',
    description: 'First part of comprehensive study of human body structure and function, covering cells, tissues, and major organ systems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Anatomy & Physiology',
    isCompulsory: false,
    icon: '🫀',
    topics: [
      { title: 'Introduction to Anatomy', description: 'Body organization', order: 1 },
      { title: 'Cells and Tissues', description: 'Basic building blocks', order: 2 },
      { title: 'Integumentary System', description: 'Skin and appendages', order: 3 },
      { title: 'Skeletal System', description: 'Bones and joints', order: 4 },
      { title: 'Muscular System', description: 'Muscles and movement', order: 5 }
    ]
  },
  {
    name: 'Anatomy & Physiology II',
    code: 'A&P-102',
    description: 'Second part covering nervous, endocrine, circulatory, respiratory, digestive, urinary, and reproductive systems.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Anatomy & Physiology',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'Nervous System', description: 'Brain, spinal cord, and nerves', order: 1 },
      { title: 'Endocrine System', description: 'Hormones and glands', order: 2 },
      { title: 'Cardiovascular System', description: 'Heart and circulation', order: 3 },
      { title: 'Respiratory System', description: 'Lungs and breathing', order: 4 },
      { title: 'Digestive and Urinary Systems', description: 'Nutrition and waste', order: 5 }
    ]
  },

  // BIOTECHNOLOGY
  
  {
    name: 'Introduction to Biotechnology',
    code: 'BIOTECH-101',
    description: 'Overview of biotechnology applications including genetic engineering, molecular biology techniques, and industrial applications.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biotechnology',
    isCompulsory: false,
    icon: '🧬',
    topics: [
      { title: 'DNA Technology', description: 'Recombinant DNA and cloning', order: 1 },
      { title: 'PCR and Sequencing', description: 'Molecular techniques', order: 2 },
      { title: 'Genetic Engineering', description: 'Modifying organisms', order: 3 },
      { title: 'Industrial Biotechnology', description: 'Commercial applications', order: 4 },
      { title: 'Medical Biotechnology', description: 'Healthcare applications', order: 5 }
    ]
  },
  {
    name: 'Laboratory Techniques in Biotechnology',
    code: 'BIOTECH-201',
    description: 'Hands-on training in biotechnology lab methods including cell culture, protein purification, and molecular analysis.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biotechnology',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Aseptic Technique', description: 'Sterile lab practices', order: 1 },
      { title: 'Cell Culture', description: 'Growing cells in the lab', order: 2 },
      { title: 'Protein Purification', description: 'Isolating proteins', order: 3 },
      { title: 'Gel Electrophoresis', description: 'Separating biomolecules', order: 4 },
      { title: 'Microscopy', description: 'Imaging techniques', order: 5 }
    ]
  }
];

async function seedScience() {
  console.log('🔬 Starting Science seeding...\n');

  for (const course of scienceCourses) {
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

  console.log('✅ Science seeding complete!\n');
  
  // Print summary
  const courseCount = scienceCourses.length;
  const topicCount = scienceCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`\n   Categories:`);
  console.log(`   - Biology (6 courses)`);
  console.log(`   - Chemistry (5 courses)`);
  console.log(`   - Physics (5 courses)`);
  console.log(`   - Environmental Science (2 courses)`);
  console.log(`   - Astronomy (2 courses)`);
  console.log(`   - Earth Science (4 courses)`);
  console.log(`   - Anatomy & Physiology (2 courses)`);
  console.log(`   - Biotechnology (2 courses)`);
}

seedScience()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
