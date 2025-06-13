import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "src/lib/prisma";
import { Chat, createMessageDTO, GetPostsQuery, Message, Post } from "src/entities";


type AddNewMessageParams = {
    tokenUserId: string;
    chatId: string;
    text: string;
};


export const addNewMessage = async ({ tokenUserId, chatId, text }: AddNewMessageParams): Promise<Message> => {
    try {
        const chat = await prisma.chat.findUnique({
            where: {
                id: chatId,
                userIDs: {
                    hasSome: [tokenUserId]
                }
            }
        });

        if (!chat) {
            throw new Error("chat not found");
        }

        const newMessage = await prisma.message.create({
            data: {
                text,
                chatId,
                userId: tokenUserId
            }
        })

        await prisma.chat.update({
            where:{
                id: chatId
            },
            data:{
                seenBy:[tokenUserId],
                lastMessage: text,
            }
        })

        return newMessage;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};