import { Router } from 'express';
import userRouter from '@modules/user/infra/http/routes/user.routes';

import authRouter from '@modules/user/infra/http/routes/auth.routes';

import courseRouter from '@modules/course/infra/http/routes/course.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', authRouter);
routes.use('/courses', courseRouter);

export default routes;
