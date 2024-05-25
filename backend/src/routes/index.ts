import { Request, Response, Router } from "express";
import { userRouter } from "./userRouter";
import { pointRouter } from "./pointRouter";

export const router = Router()

router.get("/", async (request: Request, response: Response) => {
    response.send("API ON!")
})

router.use(userRouter);
router.use(pointRouter);