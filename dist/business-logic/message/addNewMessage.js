"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewMessage = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const addNewMessage = async ({ tokenUserId, chatId, text }) => {
    try {
        const chat = await prisma_1.default.chat.findUnique({
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
        const newMessage = await prisma_1.default.message.create({
            data: {
                text,
                chatId,
                userId: tokenUserId
            }
        });
        await prisma_1.default.chat.update({
            where: {
                id: chatId
            },
            data: {
                seenBy: [tokenUserId],
                lastMessage: text,
            }
        });
        return newMessage;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.addNewMessage = addNewMessage;
//# sourceMappingURL=addNewMessage.js.map