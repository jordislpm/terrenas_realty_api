import { SavedPost } from "src/entities";
import prisma from "src/lib/prisma";
import { User } from "src/entities";
import { Post } from "@prisma/client";


export const profilePosts = async (id: string | undefined): Promise<
    {
        userPosts: Post[],
        savedPosts: Post[]
    }

> => {

    console.log("profilePosts ID:", id)
    try {
        const userPosts = await prisma.post.findMany({
            where: { userId: id },
        });

        const saved = await prisma.savedPost.findMany({
            where: { userId: id },
            include: {
                post: true
            }
        })
// change this part
        const savedPosts = saved.map(item => {return {...item.post, isSaved: true}});

        console.log("saved",saved)

        const userPostWithIsSaved = userPosts.map((post) => {

        const isSaved = savedPosts.some((saved) => saved.id === post.id)
        return { ...post, isSaved: !!isSaved }
      })



        return {savedPosts: savedPosts, userPosts: userPostWithIsSaved};
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};