import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { getOnechat } from "../../business-logic/chat/getOneChat";



const getChat: Router = Router();

getChat.get("/:id", verifyToken, async (req: Request, res: Response) => {

    const chatId = req.params.id;
    const tokenUserId = req.userId;



    if (!tokenUserId) {
        res.status(403).json({ Message: "Not Authorized" });
    }

    try {

        if (!tokenUserId || !chatId) {
            res.status(403).json({ Message: "chat id is missing" });
        } else {
            const chat = await getOnechat({tokenUserId:tokenUserId, chatId: chatId})
            res.status(200).json(chat);
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get chat: ${error}` });
    }
});

export default getChat;