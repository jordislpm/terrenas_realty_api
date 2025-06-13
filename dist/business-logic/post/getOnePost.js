"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOnePost = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getOnePost = async ({ id, token }) => {
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    if (!id) {
        throw new Error("PostId is undefined");
    }
    try {
        const post = await prisma_1.default.post.findUnique({
            where: { id },
            include: {
                postDetail: true,
                user: {
                    select: {
                        username: true,
                        avatar: true,
                    },
                },
            },
        });
        if (!post) {
            throw new Error("Post not found");
        }
        let userId = null;
        if (token) {
            try {
                const payload = jsonwebtoken_1.default.verify(token, jwtSecret);
                if (payload && typeof payload !== "string" && payload.id) {
                    userId = payload.id;
                }
            }
            catch (err) {
                console.warn("Invalid token:", err);
                userId = null;
            }
        }
        const saved = userId
            ? await prisma_1.default.savedPost.findUnique({
                where: {
                    userId_postId: {
                        postId: id,
                        userId: userId,
                    },
                },
            })
            : null;
        return {
            ...post,
            isSaved: !!saved,
        };
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.getOnePost = getOnePost;
//# sourceMappingURL=getOnePost.js.map