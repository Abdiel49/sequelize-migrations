import jwt from 'jsonwebtoken'
import { Request, Response } from 'express';

import { UserRole } from '../products/products.routes';
import UserServices from '../users/users.service'

import { JWT_SECRET_KEY } from '../../config/env.config';


interface IAuthToken {
  name: string;
  email: string;
  sub: string;
}

export function generateAccessToken(payload: IAuthToken): string {
  if (!JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY is not defined');
  }

  return jwt.sign(
    payload,
    JWT_SECRET_KEY,
    {
      expiresIn: '1h',
      algorithm: 'HS256',
    }
  );
}

  export const validateSesionUser = (req: Request, res: Response, next: any) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // validar si el jwt es valido y no a expirado
  // "Bearer eyJhbGciOiJIUzI" => ['Bearer', 'eyJhbGciOiJIUzI']
  const token = authorization.split(' ')[1];

  jwt.verify(
    token,
    JWT_SECRET_KEY ?? 'asdf',
    async (err, decoded) => {
    if (err || !decoded) {
      console.error('Error validating JWT:', err);
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await UserServices.getById(+(decoded.sub as string))

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // req.user = decoded as IUserSesion;
    req.user = user;

    next();
  });
};

export const userRoleValidation = (role: UserRole) => {
  return async (req: Request, res: Response, next: any) => {
    const user = req.user;

    if (!user) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    if (user.role !== role) {
      return res.status(403).json({ message: 'Forbidden' });
    }
  
    next();
  }
};
