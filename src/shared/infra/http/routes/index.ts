import { Router } from 'express';
import userRouter from '@modules/user/infra/http/routes/user.routes';

import authRouter from '@modules/user/infra/http/routes/auth.routes';

import courseRouter from '@modules/course/infra/http/routes/course.routes';

import lessonRouter from '@modules/lesson/infra/http/routes/lesson.routes';

import categoryRouter from '@modules/course/infra/http/routes/category.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', authRouter);
routes.use('/courses', courseRouter);
routes.use('/lessons', lessonRouter);
routes.use('/categories', categoryRouter);

export default routes;
