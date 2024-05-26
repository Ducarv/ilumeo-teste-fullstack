import { MockPointRepository } from "../../../mocks/pointRepo";
import { IPointRepository } from "../../../repositories/IPointRepository";
import { EndShiftUseCase } from "../endShift";

describe('EndShiftUseCase', () => {
    let pointRepository: IPointRepository;
    let endShiftUseCase: EndShiftUseCase;

    beforeEach(() => {
        pointRepository = new MockPointRepository();
        endShiftUseCase = new EndShiftUseCase(pointRepository);
    });

    it('should end the active shift', async () => {
        const userId = '123';

        await pointRepository.startShift(userId);

        const endedPoint = await endShiftUseCase.execute(userId);

        expect(endedPoint).not.toBeNull();
        expect(endedPoint!.userId).toEqual(userId);
        expect(endedPoint!.endTime instanceof Date).toBeTruthy();
        expect(endedPoint!.updatedAt instanceof Date).toBeTruthy();
    });

    it('should return null if no active shift is found', async () => {
        const userId = '123';

        const endedPoint = await endShiftUseCase.execute(userId);

        expect(endedPoint).toBeNull();
    });
});