import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { createPostDTO } from "../../entities/post/post/post.dto";
import { createNewPost } from "../../business-logic/post/createNewPost";



const createPost: Router = Router();

createPost.post("/:id",verifyToken,  async (req: Request, res: Response) => {

  const id=req.params.id;
  const tokenUserId = req.userId;
  const body: createPostDTO = req.body;

  console.log(id, tokenUserId)

  if (id !== tokenUserId){
   res.status(403).json({Message: "Not Authorized"});
  }

  try {

    if (!id){
       res.status(403).json({Message: "id is not valid!"});
    } else {
    const post = await createNewPost({id: id, post: body})

    res.status(200).json(post);    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to create post: ${error}` });
  }
});

export default createPost;