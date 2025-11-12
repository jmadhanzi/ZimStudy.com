import { Response } from 'express';
import { prisma } from '../server';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

export const getQuizById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: {
          orderBy: { order: 'asc' },
          select: {
            id: true,
            question: true,
            options: true,
            points: true,
            order: true
            // Don't send correctAnswer to client
          }
        },
        content: {
          include: {
            topic: {
              include: {
                subject: true
              }
            }
          }
        }
      }
    });

    if (!quiz) {
      throw new AppError(404, 'Quiz not found');
    }

    res.json({
      status: 'success',
      data: { quiz }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to fetch quiz' });
    }
  }
};

export const createQuiz = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { contentId, title, description, difficulty, timeLimit, passingScore, questions } = req.body;

    const quiz = await prisma.quiz.create({
      data: {
        contentId,
        title,
        description,
        difficulty,
        timeLimit,
        passingScore,
        questions: {
          create: questions.map((q: any, index: number) => ({
            question: q.question,
            options: q.options,
            correctAnswer: q.correctAnswer,
            explanation: q.explanation,
            points: q.points || 1,
            order: index
          }))
        }
      },
      include: {
        questions: true
      }
    });

    res.status(201).json({
      status: 'success',
      data: { quiz }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create quiz' });
  }
};

export const updateQuiz = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, difficulty, timeLimit, passingScore, isActive } = req.body;

    const quiz = await prisma.quiz.update({
      where: { id },
      data: {
        title,
        description,
        difficulty,
        timeLimit,
        passingScore,
        isActive
      }
    });

    res.json({
      status: 'success',
      data: { quiz }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update quiz' });
  }
};

export const deleteQuiz = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.quiz.delete({ where: { id } });

    res.json({
      status: 'success',
      message: 'Quiz deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete quiz' });
  }
};

export const startQuizAttempt = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;

    const quiz = await prisma.quiz.findUnique({
      where: { id },
      include: {
        questions: true
      }
    });

    if (!quiz) {
      throw new AppError(404, 'Quiz not found');
    }

    const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);

    const attempt = await prisma.quizAttempt.create({
      data: {
        userId,
        quizId: id,
        score: 0,
        totalPoints,
        answers: [],
        timeSpent: 0,
        completed: false
      }
    });

    res.status(201).json({
      status: 'success',
      data: { attempt }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to start quiz attempt' });
    }
  }
};

export const submitQuizAttempt = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { attemptId } = req.params;
    const { answers, timeSpent } = req.body;
    const userId = req.user!.id;

    const attempt = await prisma.quizAttempt.findUnique({
      where: { id: attemptId },
      include: {
        quiz: {
          include: {
            questions: true
          }
        }
      }
    });

    if (!attempt) {
      throw new AppError(404, 'Quiz attempt not found');
    }

    if (attempt.userId !== userId) {
      throw new AppError(403, 'Unauthorized');
    }

    if (attempt.completed) {
      throw new AppError(400, 'Quiz already submitted');
    }

    // Calculate score
    let score = 0;
    const questions = attempt.quiz.questions;

    answers.forEach((answer: any, index: number) => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question && question.correctAnswer === answer.selectedOption) {
        score += question.points;
      }
    });

    // Update attempt
    const updatedAttempt = await prisma.quizAttempt.update({
      where: { id: attemptId },
      data: {
        answers,
        score,
        timeSpent,
        completed: true
      }
    });

    // Award points to student profile
    const pointsEarned = Math.round((score / attempt.totalPoints) * 10);
    await prisma.studentProfile.update({
      where: { userId },
      data: {
        points: { increment: pointsEarned }
      }
    });

    res.json({
      status: 'success',
      data: {
        attempt: updatedAttempt,
        score,
        totalPoints: attempt.totalPoints,
        percentage: (score / attempt.totalPoints) * 100,
        passed: (score / attempt.totalPoints) * 100 >= attempt.quiz.passingScore,
        pointsEarned
      }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to submit quiz' });
    }
  }
};

export const getQuizAttempt = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { attemptId } = req.params;
    const userId = req.user!.id;

    const attempt = await prisma.quizAttempt.findUnique({
      where: { id: attemptId },
      include: {
        quiz: {
          include: {
            questions: true
          }
        }
      }
    });

    if (!attempt) {
      throw new AppError(404, 'Quiz attempt not found');
    }

    if (attempt.userId !== userId && req.user!.role !== 'ADMIN') {
      throw new AppError(403, 'Unauthorized');
    }

    res.json({
      status: 'success',
      data: { attempt }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to fetch quiz attempt' });
    }
  }
};

export const getUserAttempts = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { quizId, completed } = req.query;

    const where: any = { userId };
    if (quizId) where.quizId = quizId;
    if (completed !== undefined) where.completed = completed === 'true';

    const attempts = await prisma.quizAttempt.findMany({
      where,
      include: {
        quiz: {
          include: {
            content: {
              include: {
                topic: {
                  include: {
                    subject: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      status: 'success',
      data: { attempts }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch attempts' });
  }
};
