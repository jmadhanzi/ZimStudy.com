import { Response } from 'express';
import { prisma } from '../server';
import { AuthRequest } from '../middleware/auth.middleware';

export const getMyProgress = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;

    const progress = await prisma.progress.findMany({
      where: { userId },
      include: {
        topic: {
          include: {
            subject: true
          }
        }
      },
      orderBy: { lastViewedAt: 'desc' }
    });

    res.json({
      status: 'success',
      data: { progress }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch progress' });
  }
};

export const getSubjectProgress = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { subjectId } = req.params;
    const userId = req.user!.id;

    const topics = await prisma.topic.findMany({
      where: { subjectId, isActive: true },
      include: {
        progress: {
          where: { userId }
        },
        _count: {
          select: { contents: true }
        }
      }
    });

    const totalTopics = topics.length;
    const completedTopics = topics.filter(t => t.progress[0]?.completed).length;
    const progressPercentage = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;

    res.json({
      status: 'success',
      data: {
        topics,
        stats: {
          totalTopics,
          completedTopics,
          progressPercentage: Math.round(progressPercentage)
        }
      }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch subject progress' });
  }
};

export const markTopicComplete = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { topicId } = req.params;
    const userId = req.user!.id;

    const progress = await prisma.progress.upsert({
      where: {
        userId_topicId: { userId, topicId }
      },
      update: {
        completed: true,
        completedAt: new Date()
      },
      create: {
        userId,
        topicId,
        completed: true,
        completedAt: new Date()
      }
    });

    // Award points for completion
    await prisma.studentProfile.update({
      where: { userId },
      data: {
        points: { increment: 5 }
      }
    });

    res.json({
      status: 'success',
      data: { progress }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to mark topic complete' });
  }
};
