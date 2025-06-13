"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOnePost = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const updateOnePost = async ({ post, id }) => {
    console.log("business-logic update post start");
    try {
        console.log("business-logic", post);
        if (!id) {
            throw new Error("post id not found");
        }
        if (post.postData) {
            const updatedPost = await prisma_1.default.post.update({
                where: { id: id },
                data: {
                    ...post.postData,
                }
            });
            return updatedPost;
        }
        throw new Error("Unknown error");
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.updateOnePost = updateOnePost;
//# sourceMappingURL=updateOnePost.js.map