"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const business_logic_1 = require("src/business-logic");
const verifyToken_1 = require("src/middleware/verifyToken");
const deletePost = (0, express_1.Router)();
deletePost.delete("/:id", verifyToken_1.verifyToken, async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const body = req.body;
    if (id !== tokenUserId) {
        res.status(403).json({ Message: "Not Authorized" });
    }
    try {
        if (!id || !tokenUserId) {
            res.status(403).json({ Message: "id is not valid!" });
        }
        else {
            const user = await (0, business_logic_1.deleteOnePost)({ postId: body.id, tokenUserId: tokenUserId });
            res.status(200).json({ message: "Post deleted" });
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to delete post: ${error}` });
    }
});
exports.default = deletePost;
//# sourceMappingURL=detele.js.map