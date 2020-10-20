import Router from 'express';
// import ensureAuthenticate from '@modules/user/infra/http/middlewares/ensureAuthenticate';
import UsersController from '../controllers/UsersController';

const usersController = new UsersController();

const userRouter = Router();

userRouter.post('/', usersController.create);
export default userRouter;
