"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOneChat = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const addOneChat = async ({ tokenUserId, body }) => {
    try {
        const newPost = await prisma_1.default.chat.create({
            data: {
                userIDs: [tokenUserId, body.receiverId]
            },
        });
        return newPost;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.addOneChat = addOneChat;
//# sourceMappingURL=addOneChat.js.map