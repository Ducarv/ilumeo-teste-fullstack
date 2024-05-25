import { Request, Response } from "express";
import { StartShiftUseCase } from "../../useCases/point/startShift";

export class StartShiftController {
    constructor(private startShiftUseCase: StartShiftUseCase) {};

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.body;

            if (!userId) {
                return response.status(400).json({ error: 'User ID is required' });
            }

            const point = await this.startShiftUseCase.execute(userId);

            return response.status(201).json(point);
        } catch (error) {
            return response.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}