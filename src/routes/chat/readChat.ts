import { Request, Response, Router } from "express";
import { verifyToken } from "src/middleware/verifyToken";
import { readOnechat } from 'src/business-logic';
import { createPostDTO } from "src/entities";


const readChat: Router = Router();

readChat.put("/read/:id", verifyToken, async (req: Request, res: Response) => {

    const chatId = req.params.id;
    const tokenUserId = req.userId;
    if (!tokenUserId) {
        res.status(403).json({ Message: "Not Authorized" });
    }

    try {

        if (!tokenUserId || !chatId) {
            res.status(403).json({ Message: "chat id is missing" });
           
        } else {
            const chat = await readOnechat({ tokenUserId: tokenUserId, chatId: chatId })
            if (chat) {
                res.status(200).json(chat);
            }
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to read chat: ${error}` });
    }
});

export default readChat;