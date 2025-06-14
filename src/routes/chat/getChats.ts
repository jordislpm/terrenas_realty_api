import { Request, Response, Router } from "express";
import { getAllchats } from "src/business-logic/chat/getAllChats";
import { verifyToken } from "src/middleware/verifyToken";



const getChats: Router = Router();

getChats.get("/",verifyToken,  async (req: Request, res: Response) => {

  const tokenUserId = req.userId;
  try {
    if (!tokenUserId){
       res.status(403).json({Message: "Not Authorized"});
    } else {
    const chats = await getAllchats({tokenUserId: tokenUserId})

    res.status(200).json(chats);    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get chats: ${error}` });
  }
});

export default getChats;