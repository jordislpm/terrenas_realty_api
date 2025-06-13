"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllchats = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getAllchats = async ({ tokenUserId }) => {
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    try {
        const chats = await prisma_1.default.chat.findMany({
            where: {
                userIDs: {
                    hasSome: [tokenUserId]
                }
            },
        });
        for (const chat of chats) {
            const receiverId = chat.userIDs.find(id => id !== tokenUserId);
            const receiver = await prisma_1.default.user.findUnique({
                where: {
                    id: receiverId
                },
                select: {
                    id: true,
                    username: true,
                    avatar: true
                }
            });
            if (receiver) {
                chat.receiver = receiver;
            }
        }
        return chats;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.getAllchats = getAllchats;
//# sourceMappingURL=getAllChats.js.map