import { Router } from "express";

import { ensureAuthenticate } from "./middlewares/ensureAuthenticated";

import { AuthenticateUserController } from "./modules/user/authenticate/AuthenticateUserController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { GetUserByIdController } from "./modules/user/getUserById/GetUserByIdController";

import { CreatePostController } from "./modules/post/createPost/CreatePostController";
import { GetFeedPostsController } from "./modules/post/getFeedPosts/GetFeedPostsController";
import { GetTagPostsController } from "./modules/post/getTagPosts/GetTagPostsController";

import { AddCommentController } from "./modules/comment/addComment/AddCommentController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();

const createPostController = new CreatePostController();
const getFeedPostsController = new GetFeedPostsController();
const getTagPostsController = new GetTagPostsController();

const addCommentController = new AddCommentController();

routes.post("/user/authenticate", authenticateUserController.handle);
routes.post("/user/create", createUserController.handle);
routes.get("/user/:id", ensureAuthenticate, getUserByIdController.handle);

routes.post("/post", ensureAuthenticate, createPostController.handle);
routes.get("/post/feed", ensureAuthenticate, getFeedPostsController.handle);
routes.get("/post/:tag", ensureAuthenticate, getTagPostsController.handle);

routes.post("/comment", ensureAuthenticate, addCommentController.handle);

export { routes };