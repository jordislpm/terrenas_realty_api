"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveOnePost = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const saveOnePost = async ({ postId, tokenUserId }) => {
    try {
        console.log("🔍 Buscando si ya está guardado:", { postId, tokenUserId });
        const isSavePost = await prisma_1.default.savedPost.findUnique({
            where: {
                userId_postId: {
                    userId: tokenUserId,
                    postId,
                },
            },
        });
        if (isSavePost) {
            console.log("🗑️ Eliminando post guardado:", isSavePost.id);
            await prisma_1.default.savedPost.delete({
                where: { id: isSavePost.id },
            });
            return { message: "Post deleted" };
        }
        else {
            console.log("💾 Guardando nuevo post");
            await prisma_1.default.savedPost.create({
                data: {
                    userId: tokenUserId,
                    postId: postId,
                },
            });
            return { message: "Post saved" };
        }
    }
    catch (error) {
        console.error("❌ Error en saveOnePost:", error);
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.saveOnePost = saveOnePost;
//# sourceMappingURL=saveOnePost.js.map