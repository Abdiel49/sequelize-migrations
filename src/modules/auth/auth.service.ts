import usersService from "../users/users.service";
import { generateAccessToken } from "./jwt.service";

interface LoginPayload {
  email: string;
  password: string;
}

export const login = async (loginPayload: LoginPayload) => {
  const { email, password } = loginPayload;

  const user = await usersService.getByEmail(email);

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  const token =  generateAccessToken({
    email: user.email, // TODO: quitar esto
    name: user.name, // TODO: quitar esto
    sub: user.id.toString(),
  });

  return {
    token,
    name: user.name,
    email: user.email,
    id: user.id,
  };
}