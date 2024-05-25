import { PointRepository } from '../../repositories/implementation/prismaImpl/PointRepository';
import { EndShiftUseCase } from '../../useCases/point/endShift';
import { GetPreviousPointsUseCase } from '../../useCases/point/getPreviousPoints';
import { GetTodayHoursUseCase } from '../../useCases/point/getTodayHours';
import { GetTodayPointsUseCase } from '../../useCases/point/getTodayPoints';
import { StartShiftUseCase } from '../../useCases/point/startShift';
import { EndShiftController } from './endShift.controller';
import { GetPreviousPointsController } from './getPreviousPoints.controller';
import { GetTodayHoursController } from './getTodayHours.controller';
import { GetTodayPointsController } from './getTodayPoints.controller';
import { StartShiftController } from './startShift.controller';

const prismaRepository = new PointRepository();

const endShiftUseCase = new EndShiftUseCase(prismaRepository);
const endShiftController = new EndShiftController(endShiftUseCase);

const getPreviousPointsUseCase = new GetPreviousPointsUseCase(prismaRepository);
const getPreviousPointsController = new GetPreviousPointsController(
  getPreviousPointsUseCase,
);

const getTodayHoursUseCase = new GetTodayHoursUseCase(prismaRepository);
const getTodayHoursController = new GetTodayHoursController(
  getTodayHoursUseCase,
);

const getTodayPointsUseCase = new GetTodayPointsUseCase(prismaRepository);
const getTodayPointsController = new GetTodayPointsController(
  getTodayPointsUseCase,
);

const startShiftUseCase = new StartShiftUseCase(prismaRepository);
const startShiftController = new StartShiftController(startShiftUseCase);

export {
  endShiftController,
  getPreviousPointsController,
  getTodayHoursController,
  getTodayPointsController,
  startShiftController,
};
