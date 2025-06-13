import { Router } from "express";
import getUser from "./user";
import getUsers from "./users";
import updateUser from "./update";
import deleteUser from "./detele"
import savePost from "./save";
import getUserPosts from "./userPosts";
import getNotification from "./notification";


const userRoutes: Router = Router();

userRoutes.use(getUser, getUsers, updateUser, deleteUser, savePost, getUserPosts, getNotification);


export default userRoutes;