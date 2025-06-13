import { Router } from "express";
import routerAdmin from "./admin";
import routerLoggedIn from "./logged";


const testRoutes: Router = Router();
testRoutes.use(routerAdmin, routerLoggedIn);

export default testRoutes;