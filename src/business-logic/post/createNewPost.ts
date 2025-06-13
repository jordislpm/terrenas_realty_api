import prisma from "src/lib/prisma";

import { createPostDTO, Post} from "src/entities";


type CreateNewPostParams = {
   id: string;
   post:createPostDTO
};


export const createNewPost = async ({id, post}:CreateNewPostParams ): Promise<Post> => {
  try {
    const newPost = await prisma.post.create({
       data: {
        ...post.postData,
        userId: id,
        postDetail: {
          create: post.postDetail,
        },
      },
    });

    return newPost;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};