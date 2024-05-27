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
    const now = new Date();
    const todayString = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

    const hours1 = '09:00:00';
    const hours2 = '18:00:00';
    const hours3 = '12:00:00';
    const hours4 = '15:00:00';

    const userPoints: IPoint[] = [
      {
        userId,
        startTime: new Date(`${todayString}T${hours1}`),
        endTime: new Date(`${todayString}T${hours2}`),
        createdAt: now,
        updatedAt: now,
      },
      {
        userId,
        startTime: new Date(`${todayString}T${hours3}`),
        endTime: new Date(`${todayString}T${hours4}`),
        createdAt: now,
        updatedAt: now,
      },
    ];

    (pointRepository as MockPointRepository).addPoints(userPoints);

    const todayHours = await getTodayHoursUseCase.execute(userId);

    expect(todayHours).toBeCloseTo(12);
  });

  it('should return 0 if no points are found for today for the user', async () => {
    const userId = '123';

    const todayHours = await getTodayHoursUseCase.execute(userId);

    expect(todayHours).toEqual(0);
  });
});
