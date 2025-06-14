import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { deleteOnePost } from "../../business-logic/post/deleteOnePost";


const deletePost: Router = Router();

deletePost.delete("/:id",verifyToken,  async (req: Request, res: Response) => {

  const id=req.params.id;
  const tokenUserId = req.userId;
  const body = req.body;

  if (id !== tokenUserId){
   res.status(403).json({Message: "Not Authorized"});
  }

  try {

    if (!id || !tokenUserId){
       res.status(403).json({Message: "id is not valid!"});
    } else {
    const user = await deleteOnePost({postId:body.id , tokenUserId: tokenUserId})
  res.status(200).json({ message: "Post deleted" }); }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to delete post: ${error}` });
  }
});

export default deletePost;