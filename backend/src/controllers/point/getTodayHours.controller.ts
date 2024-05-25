import { Request, Response } from "express";
import { GetTodayHoursUseCase } from "../../useCases/point/getTodayHours";

export class GetTodayHoursController {
    constructor(private getTodayHoursUseCase: GetTodayHoursUseCase) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.body;

            if (!userId) {
                return response.status(400).json({ error: 'User ID is required' });
            }

            const todayHours = await this.getTodayHoursUseCase.execute(userId);

            return response.status(200).json({ userId, todayHours });
        } catch (error) {
            return response.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}