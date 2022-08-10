import { Request, Response } from "express";
import { GetFeedPostsUseCase } from "./GetFeedPostsUseCase";

export class GetFeedPostsController {
  async handle(request: Request, response: Response) {
    const getFeedPostsUseCase = new GetFeedPostsUseCase();

    const { id } = request.params;

    const result = await getFeedPostsUseCase.execute(id);

    return response.json(result);
  }
}