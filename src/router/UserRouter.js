import { Router } from 'express';
import { UserController } from '../controller/UserController.js';

const UserRouter = Router();

UserRouter.get('/', UserController.userGet);
UserRouter.post('/', UserController.userPost);
UserRouter.put('/:id', UserController.userPut);
UserRouter.delete('/:id', UserController.userDelete);

export default UserRouter;