import { Response } from 'express';
import { prisma } from '../server';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

export const getContentByTopic = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { topicId } = req.params;

    const contents = await prisma.content.findMany({
      where: { topicId, isActive: true },
      orderBy: { order: 'asc' }
    });

    res.json({
      status: 'success',
      data: { contents }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch content' });
  }
};

export const getContentById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const content = await prisma.content.findUnique({
      where: { id },
      include: {
        topic: {
          include: {
            subject: true
          }
        },
        quiz: {
          include: {
            questions: {
              orderBy: { order: 'asc' }
            }
          }
        }
      }
    });

    if (!content) {
      throw new AppError(404, 'Content not found');
    }

    res.json({
      status: 'success',
      data: { content }
    });
  } catch (error) {
    if (error instanceof AppError) {
      res.status(error.statusCode).json({ status: 'error', message: error.message });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to fetch content' });
    }
  }
};

export const createContent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { topicId, title, description, type, content, fileUrl, thumbnail, duration, order } = req.body;

    const newContent = await prisma.content.create({
      data: {
        topicId,
        title,
        description,
        type,
        content,
        fileUrl,
        thumbnail,
        duration,
        order: order || 0
      }
    });

    res.status(201).json({
      status: 'success',
      data: { content: newContent }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to create content' });
  }
};

export const updateContent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, content, fileUrl, thumbnail, duration, order, isActive } = req.body;

    const updatedContent = await prisma.content.update({
      where: { id },
      data: {
        title,
        description,
        content,
        fileUrl,
        thumbnail,
        duration,
        order,
        isActive
      }
    });

    res.json({
      status: 'success',
      data: { content: updatedContent }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to update content' });
  }
};

export const deleteContent = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.content.delete({ where: { id } });

    res.json({
      status: 'success',
      message: 'Content deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete content' });
  }
};

export const trackView = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;

    // Increment view count
    await prisma.content.update({
      where: { id },
      data: { views: { increment: 1 } }
    });

    // Update or create progress
    const content = await prisma.content.findUnique({
      where: { id },
      select: { topicId: true }
    });

    if (content) {
      await prisma.progress.upsert({
        where: {
          userId_topicId: {
            userId,
            topicId: content.topicId
          }
        },
        update: {
          lastViewedAt: new Date()
        },
        create: {
          userId,
          topicId: content.topicId,
          lastViewedAt: new Date()
        }
      });
    }

    res.json({
      status: 'success',
      message: 'View tracked'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to track view' });
  }
};
