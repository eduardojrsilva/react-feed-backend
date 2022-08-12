import { Request, Response } from "express";
import { LikePostUseCase } from "./LikePostUseCase";

export class LikePostController {
  async handle(request: Request, response: Response) {
    const likePostUseCase = new LikePostUseCase();

    const { id_user: id_owner } = request;
    const { id_post } = request.body;

    const result = await likePostUseCase.execute({
      id_owner,
      id_post,
    });

    return response.json(result);
  }
}