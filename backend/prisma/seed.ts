import { PrismaClient, EducationLevel } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@zimstudy.com' },
    update: {},
    create: {
      email: 'admin@zimstudy.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      role: 'ADMIN',
      phoneNumber: '+263771234567',
      whatsappOptIn: true
    }
  });

  console.log('✅ Admin user created:', admin.email);

  // Create sample student
  const studentPassword = await bcrypt.hash('student123', 12);

  const student = await prisma.user.upsert({
    where: { email: 'student@example.com' },
    update: {},
    create: {
      email: 'student@example.com',
      password: studentPassword,
      firstName: 'Tanaka',
      lastName: 'Moyo',
      role: 'STUDENT',
      level: 'ORDINARY_LEVEL',
      phoneNumber: '+263771234568',
      whatsappOptIn: true,
      profile: {
        create: {
          school: 'Churchill Boys High School',
          grade: 'Form 4',
          bio: 'Aspiring engineer',
          points: 50,
          streak: 5
        }
      }
    }
  });

  console.log('✅ Student user created:', student.email);

  // Create subjects
  const subjects = [
    {
      name: 'Mathematics',
      code: 'MATH-O',
      description: 'O-Level Mathematics covering algebra, geometry, trigonometry, and statistics',
      level: 'ORDINARY_LEVEL' as EducationLevel,
      icon: '📐',
      color: '#3B82F6',
      order: 1
    },
    {
      name: 'English',
      code: 'ENG-O',
      description: 'O-Level English Language focusing on comprehension, composition, and grammar',
      level: 'ORDINARY_LEVEL' as EducationLevel,
      icon: '📚',
      color: '#10B981',
      order: 2
    },
    {
      name: 'Science',
      code: 'SCI-O',
      description: 'O-Level Integrated Science covering Biology, Chemistry, and Physics',
      level: 'ORDINARY_LEVEL' as EducationLevel,
      icon: '🔬',
      color: '#8B5CF6',
      order: 3
    }
  ];

  for (const subjectData of subjects) {
    const subject = await prisma.subject.upsert({
      where: { code: subjectData.code },
      update: {},
      create: subjectData
    });

    console.log(`✅ Subject created: ${subject.name}`);

    // Create topics for Mathematics
    if (subject.code === 'MATH-O') {
      const topic1 = await prisma.topic.create({
        data: {
          subjectId: subject.id,
          title: 'Algebra - Basic Operations',
          description: 'Learn fundamental algebraic operations and equations',
          order: 1
        }
      });

      // Create content for the topic
      await prisma.content.create({
        data: {
          topicId: topic1.id,
          title: 'Introduction to Algebra',
          description: 'Understanding variables, constants, and basic operations',
          type: 'NOTE',
          content: `# Introduction to Algebra

## What is Algebra?

Algebra is a branch of mathematics that uses letters and symbols to represent numbers and quantities in formulas and equations.

## Key Concepts

### Variables
- A variable is a letter (like x, y, or z) that represents an unknown number
- Example: x + 5 = 10 (x is the variable)

### Constants
- A constant is a fixed number that doesn't change
- Example: In x + 5 = 10, both 5 and 10 are constants

### Basic Operations
1. **Addition**: x + 3
2. **Subtraction**: x - 5
3. **Multiplication**: 3x or 3 × x
4. **Division**: x/2 or x ÷ 2

## Practice Problems

1. Solve: x + 7 = 15
2. Solve: 2x = 18
3. Solve: x - 4 = 11

Remember: Whatever you do to one side of the equation, you must do to the other side!`,
          order: 1
        }
      });

      const topic2 = await prisma.topic.create({
        data: {
          subjectId: subject.id,
          title: 'Geometry - Angles and Shapes',
          description: 'Exploring angles, triangles, and polygons',
          order: 2
        }
      });

      // Create a quiz
      const quizContent = await prisma.content.create({
        data: {
          topicId: topic2.id,
          title: 'Angles Quiz',
          description: 'Test your knowledge of angles',
          type: 'QUIZ',
          content: 'quiz',
          order: 1
        }
      });

      await prisma.quiz.create({
        data: {
          contentId: quizContent.id,
          title: 'Angles Quiz',
          description: 'Test your understanding of angles',
          difficulty: 'EASY',
          timeLimit: 10,
          passingScore: 70,
          questions: {
            create: [
              {
                question: 'What is the sum of angles in a triangle?',
                options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
                correctAnswer: 1,
                explanation: 'The sum of all angles in any triangle is always 180 degrees.',
                points: 1,
                order: 0
              },
              {
                question: 'What type of angle is 90 degrees?',
                options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
                correctAnswer: 1,
                explanation: 'A 90-degree angle is called a right angle.',
                points: 1,
                order: 1
              },
              {
                question: 'How many sides does a pentagon have?',
                options: ['4', '5', '6', '7'],
                correctAnswer: 1,
                explanation: 'A pentagon has 5 sides.',
                points: 1,
                order: 2
              }
            ]
          }
        }
      });

      console.log(`✅ Topics and content created for ${subject.name}`);
    }

    // Create topics for English
    if (subject.code === 'ENG-O') {
      const topic = await prisma.topic.create({
        data: {
          subjectId: subject.id,
          title: 'Grammar - Parts of Speech',
          description: 'Understanding nouns, verbs, adjectives, and more',
          order: 1
        }
      });

      await prisma.content.create({
        data: {
          topicId: topic.id,
          title: 'Parts of Speech Overview',
          description: 'Learn about the eight parts of speech',
          type: 'NOTE',
          content: `# Parts of Speech

## The Eight Parts of Speech

1. **Noun** - A person, place, thing, or idea
   - Example: teacher, school, book, happiness

2. **Pronoun** - Replaces a noun
   - Example: he, she, it, they

3. **Verb** - An action or state of being
   - Example: run, study, is, are

4. **Adjective** - Describes a noun
   - Example: beautiful, smart, blue

5. **Adverb** - Describes a verb, adjective, or another adverb
   - Example: quickly, very, well

6. **Preposition** - Shows relationship between words
   - Example: in, on, at, under

7. **Conjunction** - Connects words or phrases
   - Example: and, but, or, because

8. **Interjection** - Expresses emotion
   - Example: Wow! Oh! Ouch!`,
          order: 1
        }
      });

      console.log(`✅ Topics and content created for ${subject.name}`);
    }
  }

  // Enroll student in subjects
  await prisma.enrollment.createMany({
    data: [
      { userId: student.id, subjectId: (await prisma.subject.findUnique({ where: { code: 'MATH-O' } }))!.id },
      { userId: student.id, subjectId: (await prisma.subject.findUnique({ where: { code: 'ENG-O' } }))!.id }
    ],
    skipDuplicates: true
  });

  console.log('✅ Student enrolled in subjects');

  // Create sample notification
  await prisma.notification.create({
    data: {
      userId: student.id,
      title: 'Welcome to ZimStudy!',
      message: 'Start your learning journey today. Check out our Mathematics course!',
      type: 'info',
      sentVia: 'web'
    }
  });

  console.log('✅ Sample notification created');

  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
