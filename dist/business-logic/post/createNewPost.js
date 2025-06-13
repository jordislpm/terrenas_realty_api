"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewPost = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const createNewPost = async ({ id, post }) => {
    try {
        const newPost = await prisma_1.default.post.create({
            data: {
                ...post.postData,
                userId: id,
                postDetail: {
                    create: post.postDetail,
                },
            },
        });
        return newPost;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.createNewPost = createNewPost;
//# sourceMappingURL=createNewPost.js.map