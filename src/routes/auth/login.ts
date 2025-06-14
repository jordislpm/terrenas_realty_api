

import { Request, Response, Router } from "express";
import { loginUser } from "../../business-logic/auth/login";
import { loginUserDTO } from "../../entities/user/user.dto";



const routerLogin: Router = Router();

routerLogin.post("/login", async (req: Request, res: Response) => {
  const { body } = req;
  const userToLogin = body as loginUserDTO;
  try {
    const userValidated = await loginUser({data: userToLogin});
    const {token, age, user} = userValidated

  const {password,...userInfo}= user;

    console.log(userInfo)
    res
    .cookie("token", token,{
        httpOnly:true,
        secure:true ,
        maxAge: age
    })
    .status(200)
    .json(userInfo)
  } catch (error) {

    console.error("Error:", error);
    res.status(500).json({ error: `Error in server, user not validated: ${error}` });
  }
});

export default routerLogin;