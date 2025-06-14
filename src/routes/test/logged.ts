import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { shouldBeLoggedIn } from "../../business-logic/test/loggedIn";


const routerLogged: Router = Router();




routerLogged.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn
);

export default routerLogged;