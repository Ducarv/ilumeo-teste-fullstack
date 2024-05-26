import { IPoint } from '../models/Point';
import { IPointRepository } from '../repositories/IPointRepository';

export class MockPointRepository implements IPointRepository {
  private points: IPoint[] = [];

  async startShift(userId: string): Promise<IPoint> {
    const startTime = new Date();
    const point: IPoint = {
      userId,
      startTime,
      createdAt: startTime,
      updatedAt: startTime,
    };
    this.points.push(point);
    return { ...point };
  }

  async endShift(userId: string): Promise<IPoint | null> {
    const activePointIndex = this.points.findIndex(
      (point) => point.userId === userId && !point.endTime,
    );

    if (activePointIndex !== -1) {
      const endTime = new Date();
      this.points[activePointIndex].endTime = endTime;
      this.points[activePointIndex].updatedAt = endTime;
      return { ...this.points[activePointIndex] };
    }

    return null;
  }

  async getTodayHours(userId: string): Promise<number> {
    const todayPoints = await this.getTodayPoints(userId);
  
    let totalMinutes = 0;
  
    todayPoints.forEach((point) => {
      const endTime = point.endTime || new Date();
      totalMinutes += (endTime.getTime() - point.startTime.getTime()) / 60000;
    });
  
    return totalMinutes / 60;
  }  

  async getTodayPoints(userId: string): Promise<IPoint[]> {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
  
    const filteredPoints = this.points.filter(
      (point) =>
        point.userId === userId &&
        point.startTime >= startOfDay &&
        point.startTime <= endOfDay,
    );
  
    return filteredPoints;
  }  

  async getPreviousPoints(userId: string): Promise<IPoint[]> {
    return this.points.filter((point) => point.userId === userId);
  }

  addPoints(points: IPoint[]): void {
    this.points.push(...points);
  }
}
