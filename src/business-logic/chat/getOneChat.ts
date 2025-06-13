import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "src/lib/prisma";
import { Chat, GetPostsQuery, Post } from "src/entities";


type GetOneChatParams = {
tokenUserId: string;
chatId: string
};


export const getOnechat = async ({tokenUserId,chatId}:GetOneChatParams): Promise<Chat> => {

    const jwtSecret = process.env.JWT_SECRET_KEY || "";

    try {
        const chat = await prisma.chat.findUnique({
            where: {
                id: chatId,
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
            include: {
                messages: {
                    orderBy: {
                        createdAt: "asc"
                    }
                }
            }
        });

          if (!chat) {
            throw new Error("chat not found");
        }

        await prisma.chat.update({
            where: {
                id: chatId
            },
            data: {
                seenBy: {
                    push: [tokenUserId]
                }
            }
        })

      

        return chat;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};