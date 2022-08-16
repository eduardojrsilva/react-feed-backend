import { prisma } from "../../../database/prismaClient";

interface IRemoveComment {
  id: string;
  id_owner: string;
}

export class RemoveCommentUseCase {
  async execute({ id, id_owner }: IRemoveComment) {
    const comment = await prisma.comments.findFirst({
      where: {
        id
      }
    });

    if (comment?.id_owner === id_owner) {
      const like = await prisma.comments.delete({
        where: {
          id: id
        }
      });

      return like;
    } else {
      throw new Error("You can only remove your own comments!");
    }
  }
}