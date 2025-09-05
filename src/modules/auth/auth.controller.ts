import { Request, Response } from "express";
import * as AuthService from './auth.service';
import { request } from "http";

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    console.log(req.body);
    const user = await AuthService.login({ email, password });
    console.log('user', user);
    res.status(200).json({
      message: 'Login successful',
      user,
    });
  } catch (error) {
    res.status(401).json({
      message: 'Login failed',
    });
  }
  
}

async function register(req: Request, res: Response) {
  // Implement registration logic here
  res.send('Register endpoint');
}

  // Uncomment if logout functionality is needed
  // static async logout(req, res) {
  //   res.send('Logout endpoint');
  // }
export const AuthController = {
  login,
  register,
  // logout, // Uncomment if logout functionality is needed
}