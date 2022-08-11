import { Request, Response } from "express";
import { AddCommentUseCase } from "./AddCommentUseCase";

export class AddCommentController {
  async handle(request: Request, response: Response) {
    const addCommentUseCase = new AddCommentUseCase();

    const { id_user: id_owner } = request;
    const { id_post, message} = request.body;

    const result = await addCommentUseCase.execute({
      id_owner,
      id_post,
      message
    });

    return response.json(result);
  }
}