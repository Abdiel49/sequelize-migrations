import {Router} from 'express'
import UserController from './users.controller';
import { userRoleValidation, validateSesionUser } from '../auth/jwt.service';

const router = Router();

router.get('/', userRoleValidation('admin'), UserController.getAllUsers);
router.get('/profile', UserController.getUserProfile);
router.get('/:id', userRoleValidation('admin'),UserController.getUserById);
router.post('/', UserController.createUser);
router.delete('/:id',  UserController.deleteUser);
router.put('/:id', UserController.updateUser);

// ===== request ===== 
// TODO: patch/:id => actualizar parcialmente el usuario 
// post => guardar usuario ✅
// put/:id => actualizar todo el usuario ✅
// delete/:id => eliminar el usuario ✅

export default router;