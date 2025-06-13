"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("src/middleware/verifyToken");
const business_logic_1 = require("src/business-logic");
const savePost = (0, express_1.Router)();
savePost.post("/save/:id", verifyToken_1.verifyToken, async (req, res) => {
    const postId = req.body.postId;
    const tokenUserId = req.userId;
    try {
        if (!tokenUserId) {
            res.status(403).json({ Message: "id is not valid!" });
        }
        else {
            const post = await (0, business_logic_1.saveOnePost)({ postId: postId, tokenUserId: tokenUserId });
            res.status(200).json(post);
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to save post: ${error}` });
    }
});
exports.default = savePost;
//# sourceMappingURL=save.js.map