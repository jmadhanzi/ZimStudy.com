import { Response } from 'express';
import { prisma } from '../server';
import { AuthRequest } from '../middleware/auth.middleware';

export const getMyNotifications = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { isRead, limit = 20 } = req.query;

    const where: any = { userId };
    if (isRead !== undefined) where.isRead = isRead === 'true';

    const notifications = await prisma.notification.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: Number(limit)
    });

    const unreadCount = await prisma.notification.count({
      where: { userId, isRead: false }
    });

    res.json({
      status: 'success',
      data: {
        notifications,
        unreadCount
      }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to fetch notifications' });
  }
};

export const markAsRead = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;

    const notification = await prisma.notification.updateMany({
      where: { id, userId },
      data: { isRead: true }
    });

    res.json({
      status: 'success',
      data: { notification }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to mark notification as read' });
  }
};

export const markAllAsRead = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;

    await prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true }
    });

    res.json({
      status: 'success',
      message: 'All notifications marked as read'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to mark all as read' });
  }
};

export const deleteNotification = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.id;

    await prisma.notification.deleteMany({
      where: { id, userId }
    });

    res.json({
      status: 'success',
      message: 'Notification deleted'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to delete notification' });
  }
};
