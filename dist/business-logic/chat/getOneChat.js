"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnechat = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getOnechat = async ({ tokenUserId, chatId }) => {
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    try {
        const chat = await prisma_1.default.chat.findUnique({
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
        await prisma_1.default.chat.update({
            where: {
                id: chatId
            },
            data: {
                seenBy: {
                    push: [tokenUserId]
                }
            }
        });
        return chat;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.getOnechat = getOnechat;
//# sourceMappingURL=getOneChat.js.map