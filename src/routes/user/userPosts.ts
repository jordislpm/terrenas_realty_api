import { createUserDTO, updateUserDTO, loginUserDTO } from "../../entities/user/user.dto";

import { Request, Response, Router } from "express";
import { userInfo } from "os";
import { getOneUser } from "src/business-logic";
import { loginUser } from "src/business-logic/auth/login";
import { profilePosts } from "src/business-logic/user/profilePosts";
import { verifyToken } from "src/middleware/verifyToken";

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