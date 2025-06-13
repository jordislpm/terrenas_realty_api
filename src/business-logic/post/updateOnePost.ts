import { updatePostDTO } from "src/entities/post/post";
import prisma from "../../lib/prisma";
import argon2 from "argon2";
import { Post } from "src/entities/post/post/post";




type UpdateOnePostParams = {
    id: string;
    post: updatePostDTO
};


export const updateOnePost = async ({ post, id }: UpdateOnePostParams): Promise<Post> => {
    console.log("business-logic update post start")


    try {
        console.log("business-logic", post)


          if (!id) {
            throw new Error("post id not found");
        }

        if (post.postData) {
            const updatedPost = await prisma.post.update({
                where: { id: id },
                data: {
                    ...post.postData,
                }
            });
            return updatedPost;
        }
        throw new Error("Unknown error");
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};