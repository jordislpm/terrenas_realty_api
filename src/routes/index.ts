import { Router } from "express";
import authRoutes from "./auth";
import testRoutes from "./test";
import userRoutes from "./user";
import postRoutes from "./post";
import chatRoutes from "./chat";
import messageRoutes from "./message";


const apiRoutes: Router = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/test", testRoutes);
apiRoutes.use("/users", userRoutes);
apiRoutes.use("/posts", postRoutes);
apiRoutes.use("/chats", chatRoutes);
apiRoutes.use("/messages", messageRoutes);




export default apiRoutes;