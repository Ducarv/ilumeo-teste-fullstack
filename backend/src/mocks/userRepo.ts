import { IUserRepository } from "../repositories/IUserRepository";
import { IUser } from "../models/User";

export class MockUserRepository implements IUserRepository {
    private users: IUser[] = [];

    async findUserById(userId: string): Promise<IUser | null> {
        const user = this.users.find(user => user.id === userId);
        return user ? { ...user } : null;
    }

    async createUser(id: string): Promise<IUser> {
        return {
            id,
            points: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    }

    async getAllUsers(): Promise<IUser[]> {
        return [...this.users];
    }

    addUser(user: IUser): void {
        this.users.push(user);
    }
}