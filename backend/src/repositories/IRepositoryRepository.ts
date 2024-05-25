import { IPoint } from '../models/Point';

export interface IPointRepository {
  startShift(userId: string): Promise<IPoint>;
  endShift(userId: string): Promise<IPoint | null>;
  getTodayHours(userId: string): Promise<number>;
  getTodayPoints(userId: string): Promise<IPoint[]>;
  getPreviousPoints(userId: string): Promise<IPoint[]>;
}
