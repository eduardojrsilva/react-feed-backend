import { Request, Response } from "express";
import { GetFeedPostsUseCase } from "./GetFeedPostsUseCase";

export class GetFeedPostsController {
  async handle(request: Request, response: Response) {
    const getFeedPostsUseCase = new GetFeedPostsUseCase();

    const { id_user } = request;

    const result = await getFeedPostsUseCase.execute(id_user);

    return response.json(result);
  }
}