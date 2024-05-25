import { IUser } from '../../../models/User';
import { prisma } from '../../db/prisma';
import { IUserRepository } from '../../IUserRepository';

export class UserRepository implements IUserRepository {
  async findUserById(userId: string): Promise<IUser | null> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user as IUser | null
  }

  async createUser(id: string): Promise<IUser> {
    const user = await prisma.user.create({
      data: {
        id,
      },
    });

    return user as IUser
  }

  async getAllUsers(): Promise<IUser[]> {
    const users = await prisma.user.findMany();
    return users as IUser[]
  }
}
