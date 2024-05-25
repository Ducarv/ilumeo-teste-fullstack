import { IUser } from '../models/User';

export interface IUserRepository {
  findUserById(userId: string): Promise<IUser | null>;
  createUser(id: string): Promise<IUser>;
  getAllUsers(): Promise<IUser[]>;
}
