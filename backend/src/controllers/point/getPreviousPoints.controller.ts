import { Request, Response } from "express";
import { GetPreviousPointsUseCase } from "../../useCases/point/getPreviousPoints";

export class GetPreviousPointsController {
    constructor(private getPreviousPointsUseCase: GetPreviousPointsUseCase) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;

            if (!userId) {
                return response.status(400).json({ error: 'User ID is required' });
            }

            const points = await this.getPreviousPointsUseCase.execute(userId);

            return response.status(200).json(points);
        } catch (error) {
            return response.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}