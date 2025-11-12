import { Response } from 'express';
import { prisma } from '../server';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

export const updateProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { firstName, lastName, phoneNumber, whatsappOptIn, school, grade, bio } = req.body;

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        phoneNumber,
        whatsappOptIn,
        profile: {
          update: {
            school,
            grade,
            bio
          }
        }
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        whatsappOptIn: true,
        role: true,
        level: true,
        profile: true
      }
    });

    res.json({
      status: 'success',
      data: { user }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update profile' });
  }
};

export const getStats = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;

    const [enrollments, completedTopics, quizAttempts, profile] = await Promise.all([
      prisma.enrollment.count({ where: { userId } }),
      prisma.progress.count({ where: { userId, completed: true } }),
      prisma.quizAttempt.count({ where: { userId, completed: true } }),
      prisma.studentProfile.findUnique({ where: { userId } })
    ]);

    const stats = {
      enrolledSubjects: enrollments,
      completedTopics,
      quizzesTaken: quizAttempts,
      points: profile?.points || 0,
      streak: profile?.streak || 0
    };

    res.json({
      status: 'success',
      data: { stats }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch stats' });
  }
};

export const getAllUsers = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { role, level, page = 1, limit = 20 } = req.query;

    const where: any = {};
    if (role) where.role = role;
    if (level) where.level = level;

    const skip = (Number(page) - 1) * Number(limit);

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          level: true,
          createdAt: true,
          profile: true
        },
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' }
      }),
      prisma.user.count({ where })
    ]);

    res.json({
      status: 'success',
      data: {
        users,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit))
        }
      }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch users' });
  }
};

export const getUserById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phoneNumber: true,
        role: true,
        level: true,
        createdAt: true,
        profile: true,
        enrollments: {
          include: { subject: true }
        }
      }
    });

    if (!user) {
      throw new AppError(404, 'User not found');
    }

    res.json({
      status: 'success',
      data: { user }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to fetch user' });
    }
  }
};
