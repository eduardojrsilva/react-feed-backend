import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const createUserUseCase = new CreateUserUseCase();

    const { email, name, role, password, passwordConfirmation } = request.body;

    const result = await createUserUseCase.execute({
      email,
      name,
      role,
      password,
      passwordConfirmation
    });

    return response.json(result);
  }
}