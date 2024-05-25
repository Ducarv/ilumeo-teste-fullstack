import { Request, Response } from "express";
import { FindUserByIdUseCase } from "../../useCases/user/findById";

export class FindUseByIdController {
    constructor(private findUserByIdUseCase: FindUserByIdUseCase) {};

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { userId } = request.params;

            if (!userId) {
                return response.status(400).json({ error: 'User ID is required' });
            }

            const user = await this.findUserByIdUseCase.execute(userId);

            if (!user) {
                return response.status(404).json({ error: 'User not found' });
            }

            return response.status(200).json(user);
        } catch (error) {
            return response.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}