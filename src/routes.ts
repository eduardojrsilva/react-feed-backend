import { Router } from "express";

import { AuthenticateUserController } from "./modules/user/authenticate/AuthenticateUserController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { GetUserByIdController } from "./modules/user/getUserById/GetUserByIdController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();

routes.post("/user/authenticate", authenticateUserController.handle);
routes.post("/user/create", createUserController.handle);
routes.get("/user", getUserByIdController.handle)

export { routes };