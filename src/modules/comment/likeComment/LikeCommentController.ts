import { Request, Response } from "express";
import { LikeCommentUseCase } from "./LikeCommentUseCase";

export class LikeCommentController {
  async handle(request: Request, response: Response) {
    const likeCommentUseCase = new LikeCommentUseCase();

    const { id_user: id_owner } = request;
    const { id_comment } = request.body;

    const result = await likeCommentUseCase.execute({
      id_owner,
      id_comment,
    });

    return response.json(result);
  }
}