import { UserRepository } from "../../repositories/implementation/prismaImpl/UserRepository";
import { CreateUserUseCase } from "../../useCases/user/create";
import { FindUserByIdUseCase } from "../../useCases/user/findById";
import { GetAllUsersUseCase } from "../../useCases/user/getAll";
import { CreateUserController } from "./create.controller";
import { FindUseByIdController } from "./findById.controller";
import { GetAllUsersController } from "./getAll.controller";

const prismaRepository = new UserRepository()

const createUserUseCase = new CreateUserUseCase(prismaRepository);
const createUserController = new CreateUserController(createUserUseCase);

const findUserByIdUseCase = new FindUserByIdUseCase(prismaRepository);
const findUserByIdController = new FindUseByIdController(findUserByIdUseCase);

const getAllUsersUseCase = new GetAllUsersUseCase(prismaRepository);
const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);

export { createUserController, findUserByIdController, getAllUsersController }