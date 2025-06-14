
import { Request, Response, Router } from "express";
import { getAllNotifications } from "src/business-logic/user/getAllNotifications";
import { verifyToken } from "src/middleware/verifyToken";

const getNotification: Router = Router();

getNotification.get("/notification",verifyToken,  async (req: Request, res: Response) => {

    const tokenUserId = req.userId;
  try {
    const notification = await getAllNotifications(tokenUserId);
    res.status(200).json(notification);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get notifications: ${error}` });
  }
});

export default getNotification;