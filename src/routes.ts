import { Router } from "express";

import { AuthenticateUserController } from "./modules/user/authenticate/AuthenticateUserController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

routes.post("/user/authenticate", authenticateUserController.handle);
routes.post("/user/create", createUserController.handle);

export { routes };