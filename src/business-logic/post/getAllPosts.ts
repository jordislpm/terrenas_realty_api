import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../../lib/prisma";

import { Post } from "src/entities/post/post/post";
import { GetPostsQuery } from "src/entities/post/query/GetPostsQuery";



type GetAllPostsParams = {
 query: GetPostsQuery; 
 token: string
};

export const getAllPosts = async ({query,token}: GetAllPostsParams): Promise<Post[]> => {
  console.log(query)
  const jwtSecret = process.env.JWT_SECRET_KEY || "";

  console.log("token", token)
  try {
    const postsFilters = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });
    let userId: string | null = null;

    if (token) {
      try {
        const payload = jwt.verify(token, jwtSecret) as JwtPayload;

        if (payload && typeof payload !== "string" && payload.id) {
          userId = payload.id;
        }
      } catch (err) {
        console.warn("Invalid token:", err);
        userId = null;
      }
    }

    if (userId) {
      const allSaved = await prisma.savedPost.findMany({
        where: { userId: userId },
        include: {
          post: true
        }
      })
      const postFilterWithSaved = postsFilters.map((post) => {
        const isSaved = allSaved.some((saved) => saved.post.id === post.id)
        return { ...post, isSaved: !!isSaved }


      })
      return postFilterWithSaved

    } else {
      return postsFilters
    }





  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};