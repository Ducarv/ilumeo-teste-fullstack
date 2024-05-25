import { Request, Response } from "express";
import { GetTodayPointsUseCase } from "../../useCases/point/getTodayPoints";

export class GetTodayPointsController {
    constructor(private getTodayPointsUseCase: GetTodayPointsUseCase) {};

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.body;

            if (!userId) {
                return response.status(400).json({ error: 'User ID is required' });
            }

            const todayPoints = await this.getTodayPointsUseCase.execute(userId);

            return response.status(200).json(todayPoints);
        } catch (error) {
            return response.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}