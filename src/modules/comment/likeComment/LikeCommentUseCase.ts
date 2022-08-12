import { prisma } from "../../../database/prismaClient";

interface ILikeComment {
  id_comment: string;
  id_owner: string;
}

export class LikeCommentUseCase {
  async execute({ id_comment, id_owner }: ILikeComment) {
    const likeActive = await prisma.likes.findFirst({
      where: {
        id_comment,
        id_owner,
      }
    });

    if (likeActive) {
      const like = await prisma.likes.delete({
        where: {
          id: likeActive.id
        }
      });

      return like;
    } else {
      const like = await prisma.likes.create({
        data: {
          id_owner,
          id_comment,
        }
      });

      return like;
    }
  }
}