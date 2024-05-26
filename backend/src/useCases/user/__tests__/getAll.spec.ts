import { MockUserRepository } from "../../../mocks/userRepo";
import { IUser } from "../../../models/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { GetAllUsersUseCase } from "../getAll";

describe('GetAllUsersUseCase', () => {
    let userRepository: IUserRepository;
    let getAllUsersUseCase: GetAllUsersUseCase;

    beforeEach(() => {
        userRepository = new MockUserRepository();
        getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
    });

    it('should return all users', async () => {
        const users: IUser[] = [
            { id: '1', points: [], createdAt: new Date(), updatedAt: new Date() },
            { id: '2', points: [], createdAt: new Date(), updatedAt: new Date() },
            { id: '3', points: [], createdAt: new Date(), updatedAt: new Date() },
        ];

        users.forEach(user => {
            (userRepository as MockUserRepository).addUser(user);
        });

        const retrievedUsers = await getAllUsersUseCase.execute();

        expect(retrievedUsers).toEqual(users);
    });

    it('should return an empty array if no users exist', async () => {
        const retrievedUsers = await getAllUsersUseCase.execute();

        expect(retrievedUsers).toEqual([]);
    });
});