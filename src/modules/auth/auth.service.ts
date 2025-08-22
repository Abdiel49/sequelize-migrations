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

  return {
    token: generateAccessToken({
      email: user.email,
      name: user.name,
      uid: user.id.toString(),
    }),
    name: user.name,
    email: user.email,
  };
}