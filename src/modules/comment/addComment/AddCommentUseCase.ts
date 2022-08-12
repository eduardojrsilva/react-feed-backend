import { prisma } from "../../../database/prismaClient";

interface IAddComment {
  id_owner: string;
  id_post: string;
  message: string;
}

export class AddCommentUseCase {
  async execute({ id_owner, id_post, message }: IAddComment) {
    const comment = await prisma.comments.create({
      data: {
        id_owner,
        id_post,
        message,
      }
    });

    return comment;
  }
}