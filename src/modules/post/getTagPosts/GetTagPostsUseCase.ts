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
        likes: {
          select: {
            id: true,
            owner: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        }
      },
      orderBy: {
        published_at: 'desc'
      }
    });

    return posts;
  }
}