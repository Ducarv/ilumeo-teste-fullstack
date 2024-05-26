import { MockUserRepository } from "../../../mocks/userRepo";
import { IUser } from "../../../models/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { FindUserByIdUseCase } from "../findById";

describe('FindUserByIdUseCase', () => {
    let userRepository: IUserRepository;
    let findUserByIdUseCase: FindUserByIdUseCase;

    beforeEach(() => {
        userRepository = new MockUserRepository();
        findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
    });

    it('should find a user by id', async () => {
        const userId = '123';
        const user: IUser = {
            id: userId,
            points: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        (userRepository as MockUserRepository).addUser(user);

        const foundUser = await findUserByIdUseCase.execute(userId);

        expect(foundUser).toEqual(user);
    });

    it('should return null if user is not found', async () => {
        const userId = '123';

        const foundUser = await findUserByIdUseCase.execute(userId);

        expect(foundUser).toBeNull();
    });
});