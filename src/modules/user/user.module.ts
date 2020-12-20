import UserRouter from './user.router.js';
import { Application } from 'express';

export default (app: Application) => app.use('/user', UserRouter);
