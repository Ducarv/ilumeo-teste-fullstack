import { IPoint } from '../../../models/Point';
import { IPointRepository } from '../../IPointRepository';
import { prisma } from '../../db/prisma';

export class PointRepository implements IPointRepository {
  async startShift(userId: string): Promise<IPoint> {
    const point = await prisma.point.create({
      data: {
        userId,
        startTime: new Date(),
      },
    });

    return point as IPoint
  }

  async endShift(userId: string): Promise<IPoint | null> {
    const activePoint = await prisma.point.findFirst({
      where: {
        userId,
        endTime: null,
      },
    });

    if (!activePoint) {
      throw new Error('No active shift found');
    }

    const endedPoint = await prisma.point.update({
      where: {
        id: activePoint.id,
      },
      data: {
        endTime: new Date(),
      },
    });

    return endedPoint as IPoint | null
  }

  async getTodayHours(userId: string): Promise<number> {
    const todayPoints = await this.getTodayPoints(userId);

    let totalMinutes = 0;

    todayPoints.forEach(point => {
      if (point.endTime) {
        totalMinutes += (point.endTime.getTime() - point.startTime.getTime()) / 60000;
      } else {
        totalMinutes += (new Date().getTime() - point.startTime.getTime()) / 60000;
      }
    });

    return totalMinutes / 60;
  }

  async getTodayPoints(userId: string): Promise<IPoint[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const points = await prisma.point.findMany({
      where: {
        userId,
        startTime: {
          gte: today,
          lt: tomorrow,
        },
      },
    });

    return points as IPoint[]
  }

  async getPreviousPoints(userId: string): Promise<IPoint[]> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const points = await prisma.point.findMany({
      where: {
        userId,
        startTime: {
          lt: today,
        },
      },
    });

    return points as IPoint[]
  }
}
