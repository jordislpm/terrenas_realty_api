import { Request, Response, Router } from "express";
import { addOneChat } from "src/business-logic/chat/addOneChat";
import { verifyToken } from "src/middleware/verifyToken";


const addChat: Router = Router();

addChat.post("/", verifyToken, async (req: Request, res: Response) => {

    const tokenUserId = req.userId;
    const body = req.body;

    try {

        if (!tokenUserId) {
            res.status(403).json({ Message: "Not Authorized" });
        } else {
            const newChat = await addOneChat({tokenUserId: tokenUserId, body: body})

            res.status(200).json(newChat);
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to add chat: ${error}` });
    }
});

export default addChat;