import Router from 'express';
// import ensureAuthenticate from '@modules/user/infra/http/middlewares/ensureAuthenticate';
import UsersController from '../controllers/UsersController';
import ensureAuthenticate from '../middlewares/ensureAuthenticate';
// import ensureAuthenticate from '../middlewares/ensureAuthenticate';

const usersController = new UsersController();

const userRouter = Router();

userRouter.post('/', usersController.create);
userRouter.get('/', ensureAuthenticate, usersController.index);
export default userRouter;
