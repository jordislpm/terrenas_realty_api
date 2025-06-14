
import { Request, Response, Router } from "express";
import { getOnePost } from "../../business-logic/post/getOnePost";




const getPost: Router = Router();

getPost.get("/:id",  async (req: Request, res: Response) => {

  const id=req.params.id
  const token=req.cookies.token;
  try {
    const user = await getOnePost({id:id, token:token})
    res.status(200).json(user);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get a post: ${error}` });
  }
});

export default getPost;