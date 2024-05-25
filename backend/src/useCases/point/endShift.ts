import { IPoint } from "../../models/Point";
import { IPointRepository } from "../../repositories/IPointRepository";

export class EndShiftUseCase {
    constructor(private pointRepository: IPointRepository) {}

    public async execute(userId: string): Promise<IPoint | null> {
        const point = await this.pointRepository.endShift(userId);
        return point;
    }
}