import { IPoint } from "../../models/Point";
import { IPointRepository } from "../../repositories/IPointRepository";

export class StartShiftUseCase {
    constructor(private pointRepository: IPointRepository) {}

    public async execute(userId: string): Promise<IPoint> {
        const point = await this.pointRepository.startShift(userId);
        return point;
    }
}