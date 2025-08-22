import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../../config/env.config';

interface IAuthToken {
  name: string;
  email: string;
  uid: string;
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