import { MockUserRepository } from "../../../mocks/userRepo";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { CreateUserUseCase } from "../create";

describe('CreateUserUseCase', () => {
    let userRepository: IUserRepository;
    let createUserUseCase: CreateUserUseCase;

    beforeEach(() => {
        userRepository = new MockUserRepository();
        createUserUseCase = new CreateUserUseCase(userRepository);
    });

    it('should create a new user', async () => {
        const userId = '123';

        const user = await createUserUseCase.execute(userId);

        expect(user.id).toEqual(userId);
        expect(user.points).toEqual([]);
        expect(user.createdAt instanceof Date).toBeTruthy();
        expect(user.updatedAt instanceof Date).toBeTruthy();
    });

    it('should throw an error if user creation fails', async () => {
        const userId = '124';
        const errorMessage = 'Failed to create user';

        jest.spyOn(userRepository, 'createUser').mockRejectedValue(new Error(errorMessage));

        await expect(createUserUseCase.execute(userId)).rejects.toThrow(errorMessage);
    });
});

