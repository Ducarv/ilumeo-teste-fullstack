import { IUser } from "../../models/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {};

    public async execute(id: string): Promise<IUser> {
        const user = await this.userRepository.createUser(id);
        return user;
    }
}