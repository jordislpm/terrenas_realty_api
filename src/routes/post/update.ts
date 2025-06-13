import { Request, Response, Router } from "express";
import { verifyToken } from "src/middleware/verifyToken";
import { updateOnePost} from 'src/business-logic';
import { updatePostDTO } from "src/entities";

const updatePost: Router = Router();

updatePost.put("/:id",verifyToken,  async (req: Request, res: Response) => {

  const id=req.params.id;
  const tokenUserId = req.userId;
  const body: updatePostDTO = req.body;

  console.log(body.postData?.id)

  console.log(id, tokenUserId)

  if (id !== tokenUserId){
   res.status(403).json({Message: "Not Authorized"});
  }

  try {

    if (!id || !tokenUserId){
       res.status(403).json({Message: "id is not valid!"});
    } else {

      if (body.postData?.id){
const post = await updateOnePost({id:body.postData?.id , post: body})

      }

     }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to update post: ${error}` });
  }
});

export default updatePost;