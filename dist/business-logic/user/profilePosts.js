"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profilePosts = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const profilePosts = async (id) => {
    console.log("profilePosts ID:", id);
    try {
        const userPosts = await prisma_1.default.post.findMany({
            where: { userId: id },
        });
        const saved = await prisma_1.default.savedPost.findMany({
            where: { userId: id },
            include: {
                post: true
            }
        });
        const savedPosts = saved.map(item => { return { ...item.post, isSaved: true }; });
        console.log("saved", saved);
        const userPostWithIsSaved = userPosts.map((post) => {
            const isSaved = savedPosts.some((saved) => saved.id === post.id);
            return { ...post, isSaved: !!isSaved };
        });
        return { savedPosts: savedPosts, userPosts: userPostWithIsSaved };
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.profilePosts = profilePosts;
//# sourceMappingURL=profilePosts.js.map