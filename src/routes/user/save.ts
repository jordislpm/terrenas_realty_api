import { Request, Response, Router } from "express";
import { saveOnePost } from "src/business-logic/user/saveOnePost";
import { verifyToken } from "src/middleware/verifyToken";



const savePost: Router = Router();

savePost.post("/save/:id", verifyToken, async (req: Request, res: Response) => {
    const postId = req.body.postId;
    const tokenUserId = req.userId;

    //   if (id !== tokenUserId){
    //    res.status(403).json({Message: "Not Authorized"});
    //   }
    try {
        if (!tokenUserId) {
            res.status(403).json({ Message: "id is not valid!" });
        } else {
            const post = await saveOnePost({postId: postId, tokenUserId: tokenUserId})
            res.status(200).json(post);
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to save post: ${error}` });
    }
});

export default savePost;