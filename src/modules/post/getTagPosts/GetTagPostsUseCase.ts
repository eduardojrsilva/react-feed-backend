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
        content: true,
        published_at: true,
        link: true,
        tags: true,
        likes_count: true,
        owner: {
          select: {
            id: true,
            name: true,
            role: true,
            avatar: true,
            wallpaper: true
          }
        },
        comments: {
          select: {
            id: true,
            id_post: true,
            message: true,
            published_at: true,
            likes_count: true,
            owner: {
              select: {
                id: true,
                name: true,
                role: true,
                avatar: true,
                wallpaper: true
              }
            },
          }
        },
      },
      orderBy: {
        published_at: 'desc'
      }
    });

    return posts;
  }
}