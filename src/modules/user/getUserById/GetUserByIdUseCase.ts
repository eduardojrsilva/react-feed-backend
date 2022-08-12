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
        posts: {
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
        },
      }
    });

    if (!user) {
      throw new Error("User does not exist");
    }

    return user;
  }
}