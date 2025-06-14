import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { getOneUser } from "../../business-logic/user/getOneUser";


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