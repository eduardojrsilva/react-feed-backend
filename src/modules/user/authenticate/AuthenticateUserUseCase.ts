import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateUser {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUser) {
    const user = await prisma.users.findFirst({
      where: {
        email
      }
    });

    if (!user) {
      throw new Error("Email or password invalid!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password invalid!");
    }

    const token = sign({ email }, "15793afac1f78ba2dbb4893373709cdd", {
      subject: user.id,
      expiresIn: "1d",
    });

    return {user, token};
  }
}