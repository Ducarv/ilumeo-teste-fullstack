import { Request, Response } from "express";
import { EndShiftUseCase } from "../../useCases/point/endShift";

export class EndShiftController {
    constructor(private endShiftUseCase: EndShiftUseCase) {};

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.body;

            if (!userId) {
                return response.status(400).json({ error: 'User ID is required' });
            }

            const point = await this.endShiftUseCase.execute(userId);

            if (!point) {
                return response.status(404).json({ error: 'No active shift found for this user' });
            }

            return response.status(200).json(point);
        } catch (error) {
            return response.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}