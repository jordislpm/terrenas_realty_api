import { Router } from "express";
import routerCreate from "./create";
import routeLogin from "./login";
import routerLogout from "./logout";


const authRoutes: Router = Router();
authRoutes.use(routerCreate, routeLogin, routerLogout);

export default authRoutes;