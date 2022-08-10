import { prisma } from "../../../database/prismaClient";

export class GetUserPostsUseCase {
  async execute(id: string) {
    const posts = await prisma.posts.findMany({
      where: {
        id_owner: {
          equals: id,
        }
      }
    });

    return posts;
  }
}