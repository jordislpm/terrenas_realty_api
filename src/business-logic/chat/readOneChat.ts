import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../../lib/prisma";
import { Chat } from "src/entities/chat/chat/chat";



type ReadOneChatParams = {
tokenUserId: string;
chatId: string
};


export const readOnechat = async ({tokenUserId, chatId}: ReadOneChatParams): Promise<Chat> => {

    const jwtSecret = process.env.JWT_SECRET_KEY || "";

    try {
        const chat = await prisma.chat.update({
             where: {
                id: chatId,
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
            data:{
                seenBy:{
                    push:[tokenUserId]
                }
            }
        })

        if (!chat) {
            throw new Error("chat not found");
        }

        return chat;

    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};