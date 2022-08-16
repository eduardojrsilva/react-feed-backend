import { Request, Response } from "express";
import { RemoveCommentUseCase } from "./RemoveCommentUseCase";

export class RemoveCommentController {
  async handle(request: Request, response: Response) {
    const removeCommentUseCase = new RemoveCommentUseCase();

    const { id_user: id_owner } = request;
    const { id } = request.body;

    const result = await removeCommentUseCase.execute({
      id_owner,
      id
    });

    return response.json(result);
  }
}