import { MockPointRepository } from "../../../mocks/pointRepo";
import { IPoint } from "../../../models/Point";
import { IPointRepository } from "../../../repositories/IPointRepository";
import { GetTodayPointsUseCase } from "../getTodayPoints";

describe('GetTodayPointsUseCase', () => {
    let pointRepository: IPointRepository;
    let getTodayPointsUseCase: GetTodayPointsUseCase;

    beforeEach(() => {
        pointRepository = new MockPointRepository();
        getTodayPointsUseCase = new GetTodayPointsUseCase(pointRepository);
    });

    it('should return the points for today for the user', async () => {
        const userId = '123';
        const today = new Date();
        const userPoints = [
            { userId, startTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0, 0) },
            { userId, startTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0) },
            { userId, startTime: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0, 0) },
        ];

        (pointRepository as MockPointRepository).addPoints(userPoints as IPoint[]);

        const todayPoints = await getTodayPointsUseCase.execute(userId);

        expect(todayPoints).toHaveLength(3);
        expect(todayPoints).toEqual(userPoints);
    });

    it('should return an empty array if no points are found for today for the user', async () => {
        const userId = '123';

        const todayPoints = await getTodayPointsUseCase.execute(userId);

        expect(todayPoints).toEqual([]);
    });
});