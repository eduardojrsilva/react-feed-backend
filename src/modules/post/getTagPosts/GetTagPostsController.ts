import { Request, Response } from "express";
import { GetTagPostsUseCase } from "./GetTagPostsUseCase";

export class GetTagPostsController {
  async handle(request: Request, response: Response) {
    const getTagPostsUseCase = new GetTagPostsUseCase();

    const { tag } = request.params;

    const result = await getTagPostsUseCase.execute(tag);

    return response.json(result);
  }
}