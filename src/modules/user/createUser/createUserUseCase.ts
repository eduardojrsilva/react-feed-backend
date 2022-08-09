import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateUser {
  email: string;
  name: string;
  role: string;
  password: string;
  passwordConfirmation: string;
}

export class CreateUserUseCase {
  async execute({ email, name, role, password, passwordConfirmation }: ICreateUser) {
    const userExist = await prisma.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive"
        }
      }
    });

    if (userExist) {
      throw new Error("User already exists");
    }

    if (password !== passwordConfirmation) {
      throw new Error("Passwords don't match!");
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.users.create({
      data: {
        email,
        name,
        role,
        password: hashPassword,
        avatar: '',
        wallpaper: '',
      }
    });

    return user;
  }
}