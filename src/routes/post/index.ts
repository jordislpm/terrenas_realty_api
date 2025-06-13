import { Router } from "express";
import getPost from "./post";
import deletePost from "./detele";
import updatePost from "./update";
import getPosts from "./posts";
import createPost from "./create";


const postRoutes: Router = Router();

postRoutes.use(getPost, getPosts, deletePost, updatePost, createPost);


export default postRoutes;