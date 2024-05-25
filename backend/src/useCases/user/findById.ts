import { IUser } from "../../models/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class FindUserByIdUseCase {
    constructor(private userRepository: IUserRepository) {}

    public async execute(userId: string): Promise<IUser | null> {
        const user = await this.userRepository.findUserById(userId);
        return user;
    }
}