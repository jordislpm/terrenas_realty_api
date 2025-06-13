"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("src/middleware/verifyToken");
const business_logic_1 = require("src/business-logic");
const createPost = (0, express_1.Router)();
createPost.post("/:id", verifyToken_1.verifyToken, async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    const body = req.body;
    console.log(id, tokenUserId);
    if (id !== tokenUserId) {
        res.status(403).json({ Message: "Not Authorized" });
    }
    try {
        if (!id) {
            res.status(403).json({ Message: "id is not valid!" });
        }
        else {
            const post = await (0, business_logic_1.createNewPost)({ id: id, post: body });
            res.status(200).json(post);
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to create post: ${error}` });
    }
});
exports.default = createPost;
//# sourceMappingURL=create.js.map