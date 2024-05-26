import { MockPointRepository } from '../../../mocks/pointRepo';
import { IPoint } from '../../../models/Point';
import { IPointRepository } from '../../../repositories/IPointRepository';
import { GetTodayHoursUseCase } from '../getTodayHours';

describe('GetTodayHoursUseCase', () => {
    let pointRepository: IPointRepository;
    let getTodayHoursUseCase: GetTodayHoursUseCase;
  
    beforeEach(() => {
      pointRepository = new MockPointRepository();
      getTodayHoursUseCase = new GetTodayHoursUseCase(pointRepository);
    });
  
    it('should return the total hours worked today for the user when points are found', async () => {
        const userId = '123';
        const userPoints: IPoint[] = [
          {
            userId,
            startTime: new Date('2024-05-26T09:00:00'),
            endTime: new Date('2024-05-26T18:00:00'),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId,
            startTime: new Date('2024-05-26T12:00:00'),
            endTime: new Date('2024-05-26T15:00:00'),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ];
        (pointRepository as MockPointRepository).addPoints(userPoints);
      
        const todayHours = await getTodayHoursUseCase.execute(userId);
      
        expect(todayHours).toBeCloseTo(12);
      });
    
      it('should handle the case when the user has an ongoing shift', async () => {
        const userId = '123';
        const userPoints: IPoint[] = [
          {
            userId,
            startTime: new Date('2024-05-26T13:00:00'),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ];
        (pointRepository as MockPointRepository).addPoints(userPoints);
      
        const todayHours = await getTodayHoursUseCase.execute(userId);
      
        expect(todayHours).toBeCloseTo(6, 0);
    });     
  
    it('should return 0 if no points are found for today for the user', async () => {
      const userId = '123';
  
      const todayHours = await getTodayHoursUseCase.execute(userId);
  
      expect(todayHours).toEqual(0);
    });
});
