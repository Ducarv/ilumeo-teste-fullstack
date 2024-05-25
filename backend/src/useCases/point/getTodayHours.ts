import { IPointRepository } from "../../repositories/IPointRepository";

export class GetTodayHoursUseCase {
    constructor(private pointRepository: IPointRepository) {}

    public async execute(userId: string): Promise<number>{
        const todayHours = await this.pointRepository.getTodayHours(userId);
        return todayHours;
    }
}