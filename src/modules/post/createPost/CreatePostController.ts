import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  async handle(request: Request, response: Response) {
    const createPostUseCase = new CreatePostUseCase();

    const { id_owner, content, link, tags } = request.body;

    const result = await createPostUseCase.execute({
      id_owner,
      content,
      link,
      tags
    });

    return response.json(result);
  }
}