import { prisma } from "../../../database/prismaClient";

export class GetTagPostsUseCase {
  async execute(tag: string) {
    const posts = await prisma.posts.findMany({
      where: {
          tags: {
            hasSome: tag,
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