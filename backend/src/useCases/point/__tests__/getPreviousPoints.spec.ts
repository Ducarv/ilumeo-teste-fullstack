import { MockPointRepository } from "../../../mocks/pointRepo";
import { IPoint } from "../../../models/Point";
import { IPointRepository } from "../../../repositories/IPointRepository";
import { GetPreviousPointsUseCase } from "../getPreviousPoints";

describe('GetPreviousPointsUseCase', () => {
    let pointRepository: IPointRepository;
    let getPreviousPointsUseCase: GetPreviousPointsUseCase;

    beforeEach(() => {
        pointRepository = new MockPointRepository();
        getPreviousPointsUseCase = new GetPreviousPointsUseCase(pointRepository);
    });

    it('should return previous points for the user', async () => {
        const userId = '123';
        const userPoints: IPoint[] = [
            { userId, startTime: new Date('2022-01-01T09:00:00'), createdAt: new Date(), updatedAt: new Date() },
            { userId, startTime: new Date('2022-01-01T12:00:00'), createdAt: new Date(), updatedAt: new Date() },
            { userId, startTime: new Date('2022-01-02T08:00:00'), createdAt: new Date(), updatedAt: new Date() },
        ];

        (pointRepository as MockPointRepository).addPoints(userPoints);

        const previousPoints = await getPreviousPointsUseCase.execute(userId);

        expect(previousPoints).toHaveLength(3);
        expect(previousPoints).toEqual(userPoints);
    });

    it('should return an empty array if no previous points are found for the user', async () => {
        const userId = '123';

        const previousPoints = await getPreviousPointsUseCase.execute(userId);

        expect(previousPoints).toEqual([]);
    });
});