import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "src/lib/prisma";
import { Chat, GetPostsQuery, Post } from "src/entities";



type getAllChatsParams = {
    tokenUserId: string
};


export const getAllchats = async ({ tokenUserId }: getAllChatsParams): Promise<Chat[]> => {

    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    try {
        const chats: Chat[] = await prisma.chat.findMany({
            where: {
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
        });

        for (const chat of chats) {
            const receiverId = chat.userIDs.find(id => id !== tokenUserId)

            const receiver = await prisma.user.findUnique({
                where: {
                    id: receiverId
                },
                select: {
                    id: true,
                    username: true,
                    avatar: true
                }
            })

            if (receiver) {
                chat.receiver = receiver
            }
        }

        return chats;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};