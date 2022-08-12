import { prisma } from "../../../database/prismaClient";

interface ILikePost {
  id_post: string;
  id_owner: string;
}

export class LikePostUseCase {
  async execute({ id_post, id_owner }: ILikePost) {
    const like = await prisma.likes.create({
      data: {
        id_owner,
        id_post,
      }
    });

    return like;
  }
}