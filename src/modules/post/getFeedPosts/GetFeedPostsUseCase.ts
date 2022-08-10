import { prisma } from "../../../database/prismaClient";

export class GetFeedPostsUseCase {
  async execute(id: string) {
    const posts = await prisma.posts.findMany({
      where: {
        NOT: {
          id_owner: {
            equals: id,
          }
        }   
      }
    });

    return posts;
  }
}