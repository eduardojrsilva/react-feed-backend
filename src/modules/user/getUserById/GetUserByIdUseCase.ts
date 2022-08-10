import { prisma } from "../../../database/prismaClient";

export class GetUserByIdUseCase {
  async execute(id: string) {
    const user = await prisma.users.findFirst({
      where: {
        id: {
          equals: id,
        }
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        avatar: true,
        wallpaper: true,
        posts: true,
      }
    });

    if (!user) {
      throw new Error("User does not exist");
    }

    return user;
  }
}