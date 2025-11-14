import { PrismaClient, EducationLevel } from '@prisma/client';

const prisma = new PrismaClient();

const psychologyCourses = [
  // INTRODUCTORY & FOUNDATIONAL PSYCHOLOGY
  
  {
    name: 'Introduction to Psychology',
    code: 'PSYC-101',
    description: 'Comprehensive overview of psychology covering major theories, research methods, biological bases of behavior, sensation and perception, learning, memory, cognition, motivation, emotion, personality, social psychology, and mental health.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Introductory Psychology',
    isCompulsory: false,
    icon: '🧠',
    topics: [
      { title: 'History and Approaches', description: 'Major perspectives in psychology', order: 1 },
      { title: 'Research Methods', description: 'Scientific method in psychology', order: 2 },
      { title: 'Biological Bases of Behavior', description: 'Brain, nervous system, and genetics', order: 3 },
      { title: 'Sensation and Perception', description: 'How we sense and interpret the world', order: 4 },
      { title: 'States of Consciousness', description: 'Sleep, dreams, and altered states', order: 5 }
    ]
  },
  {
    name: 'Educational Psychology',
    code: 'PSYC-102',
    description: 'Application of psychological principles to teaching and learning, including cognitive development, learning theories, motivation, classroom management, assessment, and individual differences in educational settings.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Applied Psychology',
    isCompulsory: false,
    icon: '📚',
    topics: [
      { title: 'Learning Theories', description: 'Behaviorism, cognitivism, constructivism', order: 1 },
      { title: 'Cognitive Development', description: 'Piaget, Vygotsky, and information processing', order: 2 },
      { title: 'Motivation in Education', description: 'Intrinsic and extrinsic motivation', order: 3 },
      { title: 'Classroom Management', description: 'Behavior management strategies', order: 4 },
      { title: 'Assessment and Evaluation', description: 'Testing and measuring learning', order: 5 }
    ]
  },
  {
    name: 'Psychology: High School Course',
    code: 'PSYC-HS',
    description: 'Introduction to psychology designed for high school students, covering fundamental concepts in behavior, mental processes, and psychological science in an accessible format.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Introductory Psychology',
    isCompulsory: false,
    icon: '🎓',
    topics: [
      { title: 'What is Psychology?', description: 'Introduction to the field', order: 1 },
      { title: 'The Brain and Behavior', description: 'Basic neuroscience', order: 2 },
      { title: 'Learning and Memory', description: 'How we learn and remember', order: 3 },
      { title: 'Personality', description: 'What makes us who we are', order: 4 },
      { title: 'Mental Health', description: 'Understanding psychological disorders', order: 5 }
    ]
  },

  // DEVELOPMENTAL PSYCHOLOGY
  
  {
    name: 'Human Growth & Development',
    code: 'PSYC-103',
    description: 'Study of physical, cognitive, and socioemotional development across the lifespan from conception through death, including major developmental theories and research.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Developmental Psychology',
    isCompulsory: false,
    icon: '👶',
    topics: [
      { title: 'Prenatal Development', description: 'Conception to birth', order: 1 },
      { title: 'Infancy and Toddlerhood', description: 'First two years of life', order: 2 },
      { title: 'Early and Middle Childhood', description: 'Ages 2-12', order: 3 },
      { title: 'Adolescence', description: 'Teenage years and identity', order: 4 },
      { title: 'Adulthood and Aging', description: 'Adult development', order: 5 }
    ]
  },
  {
    name: 'Life Span Developmental Psychology',
    code: 'PSYC-107',
    description: 'Comprehensive examination of human development from conception through death, emphasizing physical, cognitive, and psychosocial changes across all life stages.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Developmental Psychology',
    isCompulsory: false,
    icon: '🌱',
    topics: [
      { title: 'Theoretical Perspectives', description: 'Major developmental theories', order: 1 },
      { title: 'Biological Foundations', description: 'Genetics and prenatal development', order: 2 },
      { title: 'Cognitive Development', description: 'Thinking across the lifespan', order: 3 },
      { title: 'Social and Emotional Development', description: 'Relationships and emotions', order: 4 },
      { title: 'Death and Dying', description: 'End of life issues', order: 5 }
    ]
  },
  {
    name: 'Psychology of Adulthood and Aging',
    code: 'PSYC-108',
    description: 'Focused study of psychological, biological, and social changes during adulthood and later life, including aging processes, cognitive changes, and successful aging.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Developmental Psychology',
    isCompulsory: false,
    icon: '👴',
    topics: [
      { title: 'Physical Aging', description: 'Biological changes in adulthood', order: 1 },
      { title: 'Cognitive Aging', description: 'Memory and intelligence in later life', order: 2 },
      { title: 'Social and Emotional Aging', description: 'Relationships and well-being', order: 3 },
      { title: 'Work and Retirement', description: 'Career development and retirement', order: 4 },
      { title: 'Mental Health in Aging', description: 'Depression, dementia, and resilience', order: 5 }
    ]
  },

  // SOCIAL PSYCHOLOGY
  
  {
    name: 'Social Psychology',
    code: 'PSYC-104',
    description: 'Study of how individuals think about, influence, and relate to others, including topics such as social cognition, attitudes, conformity, group behavior, prejudice, and aggression.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Psychology',
    isCompulsory: false,
    icon: '👥',
    topics: [
      { title: 'Social Cognition', description: 'How we think about others', order: 1 },
      { title: 'Attitudes and Persuasion', description: 'Changing minds', order: 2 },
      { title: 'Conformity and Obedience', description: 'Social influence', order: 3 },
      { title: 'Group Behavior', description: 'Groups and teams', order: 4 },
      { title: 'Prejudice and Discrimination', description: 'Stereotypes and bias', order: 5 }
    ]
  },
  {
    name: 'Advanced Social Psychology',
    code: 'PSYC-316',
    description: 'In-depth examination of social psychological theories and research, including advanced topics in social cognition, interpersonal relationships, and applied social psychology.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Social Psychology',
    isCompulsory: false,
    icon: '👥',
    topics: [
      { title: 'Social Cognition Theories', description: 'Advanced cognitive perspectives', order: 1 },
      { title: 'Close Relationships', description: 'Attraction, love, and intimacy', order: 2 },
      { title: 'Prosocial Behavior', description: 'Helping and altruism', order: 3 },
      { title: 'Aggression and Violence', description: 'Causes and prevention', order: 4 },
      { title: 'Applied Social Psychology', description: 'Real-world applications', order: 5 }
    ]
  },

  // ABNORMAL PSYCHOLOGY
  
  {
    name: 'Abnormal Psychology',
    code: 'PSYC-106',
    description: 'Study of psychological disorders, including their symptoms, causes, and treatments. Covers anxiety, mood, personality, psychotic, and other mental health disorders.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Clinical Psychology',
    isCompulsory: false,
    icon: '🩺',
    topics: [
      { title: 'Defining Abnormality', description: 'What is mental illness?', order: 1 },
      { title: 'Anxiety Disorders', description: 'Phobias, panic, and OCD', order: 2 },
      { title: 'Mood Disorders', description: 'Depression and bipolar disorder', order: 3 },
      { title: 'Schizophrenia', description: 'Psychotic disorders', order: 4 },
      { title: 'Personality Disorders', description: 'Borderline, antisocial, and others', order: 5 }
    ]
  },
  {
    name: 'Advanced Abnormal Psychology',
    code: 'PSYC-306',
    description: 'Advanced study of psychopathology, including detailed examination of diagnostic criteria, etiology, and evidence-based treatments for psychological disorders.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Clinical Psychology',
    isCompulsory: false,
    icon: '🩺',
    topics: [
      { title: 'DSM-5 and Diagnosis', description: 'Classification systems', order: 1 },
      { title: 'Etiology of Disorders', description: 'Biological, psychological, and social causes', order: 2 },
      { title: 'Evidence-Based Treatments', description: 'Effective therapies', order: 3 },
      { title: 'Substance Use Disorders', description: 'Addiction and recovery', order: 4 },
      { title: 'Eating and Sleep Disorders', description: 'Specialized disorders', order: 5 }
    ]
  },

  // COGNITIVE PSYCHOLOGY
  
  {
    name: 'Cognitive Psychology',
    code: 'PSYC-302',
    description: 'Study of mental processes including perception, attention, memory, language, problem-solving, decision-making, and reasoning.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Cognitive Psychology',
    isCompulsory: false,
    icon: '🧩',
    topics: [
      { title: 'Perception and Attention', description: 'How we process information', order: 1 },
      { title: 'Memory Systems', description: 'Encoding, storage, and retrieval', order: 2 },
      { title: 'Language', description: 'Language acquisition and processing', order: 3 },
      { title: 'Problem-Solving', description: 'Thinking and reasoning', order: 4 },
      { title: 'Decision-Making', description: 'Judgment and choice', order: 5 }
    ]
  },

  // RESEARCH METHODS
  
  {
    name: 'Research Methods in Psychology',
    code: 'PSYC-105',
    description: 'Introduction to research design, data collection, statistical analysis, and ethical considerations in psychological research. Includes experimental, correlational, and qualitative methods.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Research Methods',
    isCompulsory: false,
    icon: '🔬',
    topics: [
      { title: 'Scientific Method', description: 'Research process in psychology', order: 1 },
      { title: 'Experimental Design', description: 'Controlled experiments', order: 2 },
      { title: 'Correlational Research', description: 'Relationships between variables', order: 3 },
      { title: 'Statistics', description: 'Descriptive and inferential statistics', order: 4 },
      { title: 'Ethics in Research', description: 'Protecting participants', order: 5 }
    ]
  },

  // SPECIALIZED PSYCHOLOGY
  
  {
    name: 'Industrial/Organizational Psychology',
    code: 'PSYC-301',
    description: 'Application of psychological principles to workplace settings, including employee selection, training, motivation, leadership, organizational culture, and work-life balance.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Applied Psychology',
    isCompulsory: false,
    icon: '💼',
    topics: [
      { title: 'Personnel Selection', description: 'Hiring and assessment', order: 1 },
      { title: 'Training and Development', description: 'Employee learning', order: 2 },
      { title: 'Motivation and Job Satisfaction', description: 'Workplace motivation', order: 3 },
      { title: 'Leadership', description: 'Leading teams and organizations', order: 4 },
      { title: 'Organizational Culture', description: 'Workplace environment', order: 5 }
    ]
  },
  {
    name: 'Psychology of Personality',
    code: 'PSYC-310',
    description: 'Study of personality theories, assessment methods, and research on individual differences in behavior, cognition, and emotion.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Personality Psychology',
    isCompulsory: false,
    icon: '🎭',
    topics: [
      { title: 'Psychoanalytic Theory', description: 'Freud and psychodynamic approaches', order: 1 },
      { title: 'Trait Theories', description: 'Big Five and other trait models', order: 2 },
      { title: 'Humanistic Theories', description: 'Rogers and Maslow', order: 3 },
      { title: 'Social-Cognitive Theory', description: 'Bandura and reciprocal determinism', order: 4 },
      { title: 'Personality Assessment', description: 'Tests and measures', order: 5 }
    ]
  },
  {
    name: 'Physiological Psychology',
    code: 'PSYC-311',
    description: 'Study of the biological bases of behavior, including brain structure and function, neurotransmitters, hormones, and the relationship between biology and psychology.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Biological Psychology',
    isCompulsory: false,
    icon: '🧬',
    topics: [
      { title: 'Nervous System', description: 'Brain and spinal cord', order: 1 },
      { title: 'Neurotransmitters', description: 'Chemical messengers', order: 2 },
      { title: 'Sensory Systems', description: 'Vision, hearing, and other senses', order: 3 },
      { title: 'Hormones and Behavior', description: 'Endocrine system', order: 4 },
      { title: 'Biological Basis of Disorders', description: 'Brain and mental illness', order: 5 }
    ]
  },
  {
    name: 'History and Systems of Psychology',
    code: 'PSYC-312',
    description: 'Examination of the historical development of psychology as a science, including major schools of thought, influential figures, and contemporary perspectives.',
    level: 'TERTIARY' as EducationLevel,
    category: 'History of Psychology',
    isCompulsory: false,
    icon: '📜',
    topics: [
      { title: 'Philosophical Roots', description: 'Pre-scientific psychology', order: 1 },
      { title: 'Structuralism and Functionalism', description: 'Early schools', order: 2 },
      { title: 'Behaviorism', description: 'Watson and Skinner', order: 3 },
      { title: 'Psychoanalysis', description: 'Freud and followers', order: 4 },
      { title: 'Contemporary Psychology', description: 'Modern approaches', order: 5 }
    ]
  },
  {
    name: 'Psychology of Motivation',
    code: 'PSYC-315',
    description: 'Study of factors that energize, direct, and sustain behavior, including biological drives, psychological needs, goals, and intrinsic and extrinsic motivation.',
    level: 'TERTIARY' as EducationLevel,
    category: 'Motivation Psychology',
    isCompulsory: false,
    icon: '🎯',
    topics: [
      { title: 'Theories of Motivation', description: 'Drive, incentive, and cognitive theories', order: 1 },
      { title: 'Biological Motivation', description: 'Hunger, thirst, and sex', order: 2 },
      { title: 'Achievement Motivation', description: 'Need for achievement', order: 3 },
      { title: 'Intrinsic vs. Extrinsic Motivation', description: 'Internal and external rewards', order: 4 },
      { title: 'Goal Setting', description: 'Setting and achieving goals', order: 5 }
    ]
  }
];

async function seedPsychology() {
  console.log('🧠 Starting Psychology seeding...\n');

  for (const course of psychologyCourses) {
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

  console.log('✅ Psychology seeding complete!\n');
  
  // Print summary
  const courseCount = psychologyCourses.length;
  const topicCount = psychologyCourses.reduce((sum, course) => sum + course.topics.length, 0);

  console.log('📊 Summary:');
  console.log(`   Total Courses: ${courseCount}`);
  console.log(`   Total Topics: ${topicCount}`);
  console.log(`\n   Categories:`);
  console.log(`   - Introductory Psychology (2 courses)`);
  console.log(`   - Developmental Psychology (3 courses)`);
  console.log(`   - Social Psychology (2 courses)`);
  console.log(`   - Clinical Psychology (2 courses)`);
  console.log(`   - Cognitive Psychology (1 course)`);
  console.log(`   - Research Methods (1 course)`);
  console.log(`   - Applied Psychology (2 courses)`);
  console.log(`   - Personality Psychology (1 course)`);
  console.log(`   - Biological Psychology (1 course)`);
  console.log(`   - History of Psychology (1 course)`);
  console.log(`   - Motivation Psychology (1 course)`);
}

seedPsychology()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
