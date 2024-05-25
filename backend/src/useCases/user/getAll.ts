import { IUser } from "../../models/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class GetAllUsersUseCase {
    constructor(private userRepository: IUserRepository) {}

    public async execute(): Promise<IUser[]> {
        const users = await this.userRepository.getAllUsers();
        return users;
    }
}