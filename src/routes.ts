import { Router } from "express";

import { ensureAuthenticate } from "./middlewares/ensureAuthenticated";

import { AuthenticateUserController } from "./modules/user/authenticate/AuthenticateUserController";
import { CreateUserController } from "./modules/user/createUser/CreateUserController";
import { GetUserByIdController } from "./modules/user/getUserById/GetUserByIdController";
import { UpdateUserController } from "./modules/user/updateUser/UpdateUserController";

import { CreatePostController } from "./modules/post/createPost/CreatePostController";
import { GetFeedPostsController } from "./modules/post/getFeedPosts/GetFeedPostsController";
import { GetTagPostsController } from "./modules/post/getTagPosts/GetTagPostsController";
import { LikePostController } from "./modules/post/likePost/LikePostController";

import { AddCommentController } from "./modules/comment/addComment/AddCommentController";
import { LikeCommentController } from "./modules/comment/likeComment/LikeCommentController";
import { RemoveCommentController } from "./modules/comment/removeComment/RemoveCommentController";

const routes = Router();

const authenticateUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();
const getUserByIdController = new GetUserByIdController();
const updateUserController = new UpdateUserController();

const createPostController = new CreatePostController();
const getFeedPostsController = new GetFeedPostsController();
const getTagPostsController = new GetTagPostsController();
const likePostController = new LikePostController();

const addCommentController = new AddCommentController();
const likeCommentController = new LikeCommentController();
const removeCommentController = new RemoveCommentController();

routes.post("/user/authenticate", authenticateUserController.handle);
routes.post("/user/create", createUserController.handle);
routes.get("/user/:id", ensureAuthenticate, getUserByIdController.handle);
routes.put("/user/update", ensureAuthenticate, updateUserController.handle);

routes.post("/post", ensureAuthenticate, createPostController.handle);
routes.get("/post/feed", ensureAuthenticate, getFeedPostsController.handle);
routes.get("/post/:tag", ensureAuthenticate, getTagPostsController.handle);
routes.post("/post/like", ensureAuthenticate, likePostController.handle);

routes.post("/comment", ensureAuthenticate, addCommentController.handle);
routes.post("/comment/like", ensureAuthenticate, likeCommentController.handle);
routes.delete("/comment/remove/:id", ensureAuthenticate, removeCommentController.handle);

export { routes };