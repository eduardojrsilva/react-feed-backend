import { Router } from "express";

import { ensureAuthenticate } from "./middlewares/ensureAuthenticated";

import { AuthenticateUserController } from "./modules/user/authenticate/AuthenticateUserController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { GetUserByIdController } from "./modules/user/getUserById/GetUserByIdController";

import { GetFeedPostsController } from "./modules/post/getFeedPosts/GetFeedPostsController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();

const getFeedPostsController = new GetFeedPostsController();

routes.post("/user/authenticate", authenticateUserController.handle);
routes.post("/user/create", createUserController.handle);
routes.get("/user", ensureAuthenticate, getUserByIdController.handle);

routes.get("/post/feed", ensureAuthenticate, getFeedPostsController.handle);

export { routes };