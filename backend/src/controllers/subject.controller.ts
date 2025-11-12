import { Response } from 'express';
import { prisma } from '../server';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

export const getAllSubjects = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { level, isActive } = req.query;

    const where: any = {};
    if (level) where.level = level;
    if (isActive !== undefined) where.isActive = isActive === 'true';

    const subjects = await prisma.subject.findMany({
      where,
      orderBy: { order: 'asc' },
      include: {
        _count: {
          select: { topics: true, enrollments: true }
        }
      }
    });

    res.json({
      status: 'success',
      data: { subjects }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch subjects' });
  }
};

export const getSubjectById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const subject = await prisma.subject.findUnique({
      where: { id },
      include: {
        topics: {
          where: { isActive: true },
          orderBy: { order: 'asc' },
          include: {
            _count: {
              select: { contents: true }
            }
          }
        },
        _count: {
          select: { enrollments: true }
        }
      }
    });

    if (!subject) {
      throw new AppError(404, 'Subject not found');
    }

    res.json({
      status: 'success',
      data: { subject }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to fetch subject' });
    }
  }
};

export const getSubjectTopics = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    const topics = await prisma.topic.findMany({
      where: { subjectId: id, isActive: true },
      orderBy: { order: 'asc' },
      include: {
        contents: {
          where: { isActive: true },
          orderBy: { order: 'asc' }
        },
        progress: userId ? {
          where: { userId }
        } : false
      }
    });

    res.json({
      status: 'success',
      data: { topics }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch topics' });
  }
};

export const createSubject = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { name, code, description, level, icon, color, order } = req.body;

    const subject = await prisma.subject.create({
      data: {
        name,
        code,
        description,
        level,
        icon,
        color,
        order: order || 0
      }
    });

    res.status(201).json({
      status: 'success',
      data: { subject }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create subject' });
  }
};

export const updateSubject = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description, icon, color, order, isActive } = req.body;

    const subject = await prisma.subject.update({
      where: { id },
      data: {
        name,
        description,
        icon,
        color,
        order,
        isActive
      }
    });

    res.json({
      status: 'success',
      data: { subject }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update subject' });
  }
};

export const deleteSubject = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.subject.delete({ where: { id } });

    res.json({
      status: 'success',
      message: 'Subject deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete subject' });
  }
};

export const enrollSubject = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;

    // Check if already enrolled
    const existing = await prisma.enrollment.findUnique({
      where: {
        userId_subjectId: { userId, subjectId: id }
      }
    });

    if (existing) {
      throw new AppError(400, 'Already enrolled in this subject');
    }

    const enrollment = await prisma.enrollment.create({
      data: {
        userId,
        subjectId: id
      },
      include: {
        subject: true
      }
    });

    res.status(201).json({
      status: 'success',
      data: { enrollment }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to enroll' });
    }
  }
};

export const unenrollSubject = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;

    await prisma.enrollment.delete({
      where: {
        userId_subjectId: { userId, subjectId: id }
      }
    });

    res.json({
      status: 'success',
      message: 'Unenrolled successfully'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to unenroll' });
  }
};

export const getMyEnrolledSubjects = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;

    const enrollments = await prisma.enrollment.findMany({
      where: { userId },
      include: {
        subject: {
          include: {
            _count: {
              select: { topics: true }
            }
          }
        }
      },
      orderBy: { enrolledAt: 'desc' }
    });

    res.json({
      status: 'success',
      data: { enrollments }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch enrollments' });
  }
};
