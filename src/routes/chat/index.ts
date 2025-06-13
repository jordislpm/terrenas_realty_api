import { Router } from "express";
import addChat from "./addChat";
import getChat from "./getChat";
import getChats from "./getChats";
import readChat from "./readChat";



const chatRoutes: Router = Router();
chatRoutes.use(addChat, getChat, getChats, readChat);


export default chatRoutes;