import { PrismaClient } from '@prisma/client';
import { IUser } from '../../../models/User';
import { IUserRepository } from '../../IUserRepository';

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
  async findUserById(userId: string): Promise<IUser | null> {
    return await prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async createUser(id: string): Promise<IUser> {
    return await prisma.user.create({
      data: {
        id,
      },
    });
  }

  async getAllUsers(): Promise<IUser[]> {
    return await prisma.user.findMany();
  }
}
