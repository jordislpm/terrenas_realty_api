import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { profilePosts } from "../../business-logic/user/profilePosts";


const getUserPosts: Router = Router();

getUserPosts.get("/profilePosts",verifyToken,  async (req: Request, res: Response) => {
    const tokenUserId = req.userId;
  try {
    const allProfilePosts = await profilePosts(tokenUserId)
    res.status(200).json(allProfilePosts);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get profile posts: ${error}` });
  }
});

export default getUserPosts;