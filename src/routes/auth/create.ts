import { createUserDTO } from "./../../entities/user/user.dto";
import { Request, Response, Router } from "express";
import { registerNewUser } from '../../business-logic/auth/register';

const routerCreate: Router = Router();

routerCreate.post("/register", async (req: Request, res: Response) => {
  const { body } = req;
  const user = body as createUserDTO;
  try {
    const newUser = await registerNewUser({data:user});
    res.status(201).json({ message: "user Created sucessfuly"});
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error in server, created user failed" });
  }
});

export default routerCreate;