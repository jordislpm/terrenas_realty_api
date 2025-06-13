"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profilePosts_1 = require("src/business-logic/user/profilePosts");
const verifyToken_1 = require("src/middleware/verifyToken");
const getUserPosts = (0, express_1.Router)();
getUserPosts.get("/profilePosts", verifyToken_1.verifyToken, async (req, res) => {
    const tokenUserId = req.userId;
    try {
        const allProfilePosts = await (0, profilePosts_1.profilePosts)(tokenUserId);
        res.status(200).json(allProfilePosts);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get profile posts: ${error}` });
    }
});
exports.default = getUserPosts;
//# sourceMappingURL=userPosts.js.map