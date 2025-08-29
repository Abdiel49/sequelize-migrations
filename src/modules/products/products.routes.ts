import { Router} from'express';

export type UserRole = 'admin' | 'user' | 'guest';

export interface IUserSesion {
  email: string;
  name: string;
  uid: string;
  iat: number;
  exp: number;
  role: UserRole;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUserSesion;
    }
  }
}

import ProductController from './product.controller';
import { userRoleValidation, validateSesionUser } from '../auth/jwt.service';

const router = Router();

router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getProductById)

// TODO: manejar ambos middleware de usario en sesion y el rol
router.post(
  '/',
  [validateSesionUser, userRoleValidation('admin')],
  ProductController.createProduct
)

router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

export default router;
