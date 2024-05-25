import { Request, Response } from "express";
import { CreateUserUseCase } from "../../useCases/user/create";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.body;

            if (!id) {
                return response.status(400).json({ error: 'User ID is required' });
            }

            const user = await this.createUserUseCase.execute(id);

            return response.status(201).json(user);
        } catch (error) {
            return response.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}