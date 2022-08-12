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