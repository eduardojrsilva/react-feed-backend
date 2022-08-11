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
      },
      select: {
        id: true,
        owner: true,
        content: true,
        published_at: true,
        link: true,
        tags: true,
        likes_count: true,
        comments: true,
      },
      orderBy: {
        published_at: 'desc'
      }
    });

    return posts;
  }
}