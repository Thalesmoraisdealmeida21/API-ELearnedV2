import { Router } from 'express';
import userRouter from '@modules/user/infra/http/routes/user.routes';

import authRouter from '@modules/user/infra/http/routes/auth.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/auth', authRouter);

export default routes;
