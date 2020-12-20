import { IRouter, Router } from 'express';

const router: IRouter = Router();

import * as UserController from './user.controller';

router.get('/list', UserController.getUsersList);

export default router;
