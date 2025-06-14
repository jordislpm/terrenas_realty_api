import { Request, Response, Router } from "express";
import { addNewMessage } from "src/business-logic/message/addNewMessage";
import { verifyToken } from "src/middleware/verifyToken";


const addMessage: Router = Router();

addMessage.post("/:chatId",verifyToken,  async (req: Request, res: Response) => {

  const chatId=req.params.chatId;
  const tokenUserId = req.userId;
  const text = req.body.text;

  if (!tokenUserId){
   res.status(403).json({Message: "Not Authorized"});
  }

 try {
 
         if (!chatId || !tokenUserId) {
             res.status(403).json({ Message: "Missing chat id or toKenUserId" });
         } else {
             const newChat = await addNewMessage(
                {
                    tokenUserId: tokenUserId, 
                    chatId: chatId,
                    text: text
                }
            )
 
             res.status(200).json(newChat);
         }
 
     } catch (error) {
         console.error("Error:", error);
         res.status(500).json({ error: `Failed to add message: ${error}` });
     }
 });

export default addMessage;