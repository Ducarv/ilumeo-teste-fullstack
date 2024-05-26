import { MockPointRepository } from "../../../mocks/pointRepo";
import { IPointRepository } from "../../../repositories/IPointRepository";
import { StartShiftUseCase } from "../startShift";

describe('StartShiftUseCase', () => {
    let pointRepository: IPointRepository;
    let startShiftUseCase: StartShiftUseCase;

    beforeEach(() => {
        pointRepository = new MockPointRepository();
        startShiftUseCase = new StartShiftUseCase(pointRepository);
    });

    it('should start a new shift', async () => {
        const userId = '123';

        const point = await startShiftUseCase.execute(userId);

        expect(point.userId).toEqual(userId);
        expect(point.startTime instanceof Date).toBeTruthy();
        expect(point.createdAt instanceof Date).toBeTruthy();
        expect(point.updatedAt instanceof Date).toBeTruthy();
    });
});