import { IPoint } from "../../models/Point";
import { IPointRepository } from "../../repositories/IPointRepository";

export class GetTodayPointsUseCase {
    constructor(private pointRepository: IPointRepository) {}

    public async execute(userId: string): Promise<IPoint[]> {
        const points = await this.pointRepository.getTodayPoints(userId);
        return points;
    }
}