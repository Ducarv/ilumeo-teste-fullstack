import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../useCases/user/getAll";

export class GetAllUsersController {
    constructor(private getAllUsersUseCase: GetAllUsersUseCase) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const users = await this.getAllUsersUseCase.execute();
            return response.status(200).json(users);
        } catch (error) {
            return response.status(500).json({ error: 'Unexpected error occurred' });
        }
    }
}