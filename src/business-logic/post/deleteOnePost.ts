import argon2 from "argon2";
import prisma from "src/lib/prisma";
import {Post,} from "src/entities";


type DeleteOnePostParams = {
   postId: string;
   tokenUserId: string;
};


export const deleteOnePost = async ({postId, tokenUserId}:DeleteOnePostParams): Promise<Post> => {


 try {
       const post = await prisma.post.findUnique({
      where: { id:postId },
       include: { postDetail: true },
    });

    if (!post) {
      throw new Error("post not found");
    }

     if (post.userId !== tokenUserId) {
      throw new Error("Not Authorized");
    }

    if (post.postDetail){
    await prisma.postDetail.delete({
      where: { postId: post.id},
    })
    }

      await prisma.post.delete({
    where: { id: postId },
  });

    return post;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};