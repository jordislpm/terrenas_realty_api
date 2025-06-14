
import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { deleteOneUser } from "../../business-logic/user/deleteOneUser";


const deleteUser: Router = Router();

deleteUser.delete("/:id",verifyToken,  async (req: Request, res: Response) => {

  const id=req.params.id;
  const tokenUserId = req.userId;

  if (id !== tokenUserId){
   res.status(403).json({Message: "Not Authorized"});
  }

  try {

    if (!id){
       res.status(403).json({Message: "id is not valid!"});
    } else {
    const user = await deleteOneUser(id)
  res.status(200).json({ message: "User deleted" }); }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to delete user: ${error}` });
  }
});

export default deleteUser;