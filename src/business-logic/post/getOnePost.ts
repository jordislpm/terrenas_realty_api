import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../../lib/prisma";
import { Post } from "src/entities";


type GetOnePostParams = {
id: string | undefined;
token: string | undefined;
};

export const getOnePost = async ({id, token}:GetOnePostParams): Promise<Post> => {
  const jwtSecret = process.env.JWT_SECRET_KEY || "";

  if (!id) {
    throw new Error("PostId is undefined");
  }

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        postDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    if (!post) {
      throw new Error("Post not found");
    }

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

    const saved = userId
      ? await prisma.savedPost.findUnique({
          where: {
            userId_postId: {
              postId: id,
              userId: userId,
            },
          },
        })
      : null;

    return {
      ...post,
      isSaved: !!saved,
    };
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};