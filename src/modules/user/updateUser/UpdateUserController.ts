import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const updateUserUseCase = new UpdateUserUseCase();

    const { id_user: id } = request;
    const { name, role, avatar, wallpaper } = request.body;

    const result = await updateUserUseCase.execute({
      id,
      name,
      role,
      avatar,
      wallpaper
    });

    return response.json(result);
  }
}