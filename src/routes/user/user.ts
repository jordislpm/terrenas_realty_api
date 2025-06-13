import { createUserDTO, updateUserDTO, loginUserDTO } from "../../entities/user/user.dto";

import { Request, Response, Router } from "express";
import { userInfo } from "os";
import { getOneUser } from "src/business-logic";
import { loginUser } from "src/business-logic/auth/login";
import { verifyToken } from "src/middleware/verifyToken";

const getUser: Router = Router();

getUser.get("/search/:id",verifyToken,  async (req: Request, res: Response) => {

  const id=req.params.id
  try {
    const user = await getOneUser(id)
    res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get a user: ${error}` });
  }
});

export default getUser;