import { Request, Response, Router } from "express";
import { shouldBeAdmin } from "src/business-logic/test/admin";
import { shouldBeLoggedIn } from "src/business-logic/test/loggedIn";
import { verifyToken } from "src/middleware/verifyToken";

const routerLogged: Router = Router();




routerLogged.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn
);

export default routerLogged;