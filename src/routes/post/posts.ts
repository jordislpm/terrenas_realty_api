import { Request, Response, Router } from "express";
import { getAllPosts} from "src/business-logic";
import { GetPostsQuery } from "src/entities";


const getPosts: Router = Router();

getPosts.get("/", async (req: Request, res: Response) => {

  const query = req.query as GetPostsQuery;
  const token=req.cookies.token;
  try {
    const posts = await getAllPosts({query:query, token:token});
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get Posts: ${error}` });
  }
});

export default getPosts;