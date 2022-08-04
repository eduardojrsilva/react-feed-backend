import { Router } from "express";

import { AuthenticateUserController } from "./modules/user/authenticate/AuthenticateUserController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();

routes.post("/user/authenticate", authenticateUserController.handle)

export { routes };