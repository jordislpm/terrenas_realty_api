"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getAllPosts = async ({ query, token }) => {
    console.log(query);
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    console.log("token", token);
    try {
        const postsFilters = await prisma_1.default.post.findMany({
            where: {
                city: query.city || undefined,
                type: query.type || undefined,
                property: query.property || undefined,
                bedroom: parseInt(query.bedroom) || undefined,
                price: {
                    gte: parseInt(query.minPrice) || undefined,
                    lte: parseInt(query.maxPrice) || undefined,
                },
            },
        });
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
        if (userId) {
            const allSaved = await prisma_1.default.savedPost.findMany({
                where: { userId: userId },
                include: {
                    post: true
                }
            });
            const postFilterWithSaved = postsFilters.map((post) => {
                const isSaved = allSaved.some((saved) => saved.post.id === post.id);
                return { ...post, isSaved: !!isSaved };
            });
            return postFilterWithSaved;
        }
        else {
            return postsFilters;
        }
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.getAllPosts = getAllPosts;
//# sourceMappingURL=getAllPosts.js.map