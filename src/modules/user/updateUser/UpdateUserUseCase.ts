import { prisma } from "../../../database/prismaClient";
import { hash } from "bcrypt";

interface IUpdateUser {
  id: string;
  name: string;
  role: string;
  avatar: string;
  wallpaper: string;
}

export class UpdateUserUseCase {
  async execute({ id, name, role, avatar, wallpaper }: IUpdateUser) {
    const user = await prisma.users.findFirst({
      where: {
        id
      }
    });

    if (!user) {
      throw new Error("User doesn't exist");
    }

    if (name) user.name = name;
    if (role) user.role = role;
    if (avatar) user.avatar = avatar;
    if (wallpaper) user.wallpaper = wallpaper;

    const updateUser = await prisma.users.update({
      where: {
        id
      },
      data: user
    });

    return updateUser;
  }
}