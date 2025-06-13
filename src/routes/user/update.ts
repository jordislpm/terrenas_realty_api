import { Message } from './../../entities/chat/message/message';
import { createUserDTO, updateUserDTO, loginUserDTO } from "../../entities/user/user.dto";

import { Request, Response, Router } from "express";
import { userInfo } from "os";
import { loginUser } from "src/business-logic/auth/login";
import { verifyToken } from "src/middleware/verifyToken";
import { updateOneUser } from 'src/business-logic';

const updateUser: Router = Router();

updateUser.put("/:id",verifyToken,  async (req: Request, res: Response) => {

  const id=req.params.id;
  const tokenUserId = req.userId;
  const body = req.body;

  console.log(id, tokenUserId)

  if (id !== tokenUserId){
   res.status(403).json({Message: "Not Authorized"});
  }

  try {

    if (!id){
       res.status(403).json({Message: "id is not valid!"});
    } else {
    const user = await updateOneUser({id:id, user:body})

     const {password,...userInfo}= user;
    res.status(200).json(userInfo);    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to update user: ${error}` });
  }
});

export default updateUser;