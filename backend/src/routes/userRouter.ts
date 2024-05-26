import { Request, Response, Router } from "express";
import { createUserController, findUserByIdController, getAllUsersController } from "../controllers/user";

export const userRouter = Router();

userRouter.get("/user/:userId", async (request: Request, response: Response) => {
    await findUserByIdController.handle(request, response);
})

userRouter.post("/user", async (request: Request, response: Response) => {
    await createUserController.handle(request, response);
})

userRouter.get("/users", async (request: Request, response: Response) => {
    await getAllUsersController.handle(request, response);
})