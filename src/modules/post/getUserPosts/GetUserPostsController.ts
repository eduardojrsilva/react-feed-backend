import { Request, Response } from "express";
import { GetUserPostsUseCase } from "./GetUserPostsUseCase";

export class GetUserPostsController {
  async handle(request: Request, response: Response) {
    const getUserPostsUseCase = new GetUserPostsUseCase();

    const { id } = request.params;

    const result = await getUserPostsUseCase.execute(id);

    return response.json(result);
  }
}