"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readOnechat = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const readOnechat = async ({ tokenUserId, chatId }) => {
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    try {
        const chat = await prisma_1.default.chat.update({
            where: {
                id: chatId,
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
            data: {
                seenBy: {
                    push: [tokenUserId]
                }
            }
        });
        if (!chat) {
            throw new Error("chat not found");
        }
        return chat;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.readOnechat = readOnechat;
//# sourceMappingURL=readOneChat.js.map