import { Router} from'express';

export type UserRole = 'admin' | 'user' | 'guest';

import ProductController from './product.controller';
import { userRoleValidation, validateSesionUser } from '../auth/jwt.service';
import User from '../users/user.model';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

const router = Router();

router.get('/', ProductController.getAllProducts)
router.get('/:id', ProductController.getProductById)

router.post(
  '/',
  validateSesionUser,
  userRoleValidation('admin'),
  ProductController.createProduct
)

router.put('/:id', ProductController.updateProduct)
router.delete('/:id', ProductController.deleteProduct)

export default router;
