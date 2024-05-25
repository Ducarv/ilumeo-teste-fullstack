import { IPoint } from "../../models/Point";
import { IPointRepository } from "../../repositories/IPointRepository";

export class GetPreviousPointsUseCase {
    constructor(private pointRepository: IPointRepository) {}

    public async execute(userId: string): Promise<IPoint[]> {
        const points = await this.pointRepository.getPreviousPoints(userId);
        return points;
    }
}