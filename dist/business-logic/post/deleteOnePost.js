"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOnePost = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deleteOnePost = async ({ postId, tokenUserId }) => {
    try {
        const post = await prisma_1.default.post.findUnique({
            where: { id: postId },
            include: { postDetail: true },
        });
        if (!post) {
            throw new Error("post not found");
        }
        if (post.userId !== tokenUserId) {
            throw new Error("Not Authorized");
        }
        if (post.postDetail) {
            await prisma_1.default.postDetail.delete({
                where: { postId: post.id },
            });
        }
        await prisma_1.default.post.delete({
            where: { id: postId },
        });
        return post;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.deleteOnePost = deleteOnePost;
//# sourceMappingURL=deleteOnePost.js.map