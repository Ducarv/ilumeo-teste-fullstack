import { Request, Response, Router } from "express";
import { endShiftController, getPreviousPointsController, getTodayHoursController, getTodayPointsController, startShiftController } from "../controllers/point";

export const pointRouter = Router()

pointRouter.post("/point", async (request: Request, response: Response) => {
    await startShiftController.handle(request, response);
})

pointRouter.patch("/point", async (request: Request, response: Response) => {
    await endShiftController.handle(request, response);
})

pointRouter.get("/point", async (request: Request, response: Response) => {
    await getPreviousPointsController.handle(request, response);
})

pointRouter.get("/point/today", async (request: Request, response: Response) => {
    await getTodayPointsController.handle(request, response)
})

pointRouter.get("/hours/today", async (request: Request, response: Response) => {
    await getTodayHoursController.handle(request, response)
})