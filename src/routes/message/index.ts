import { Router } from "express";
import addMessage from "./addMessage";



const messageRoutes: Router = Router();
messageRoutes.use(addMessage);


export default messageRoutes;