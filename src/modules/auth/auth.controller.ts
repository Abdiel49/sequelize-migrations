import { Request, Response } from "express";
import * as AuthService from './auth.service';
import usersService from "../users/users.service";

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
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
  try {
    // estraer los datos de la request
    const bodyData = req.body;
    // validar los datos del usuario
    const user = await usersService.createUser(bodyData);
    // responder con el usuario creado satisfied
    return res.status(201).json(user)
  } catch (error) {
    console.error('Error on creare user', error);
    return res.status(500).send({
      "message": "error on creare user"
    })
  }
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