"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const business_logic_1 = require("src/business-logic");
const getPost = (0, express_1.Router)();
getPost.get("/:id", async (req, res) => {
    const id = req.params.id;
    const token = req.cookies.token;
    try {
        const user = await (0, business_logic_1.getOnePost)({ id: id, token: token });
        res.status(200).json(user);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get a post: ${error}` });
    }
});
exports.default = getPost;
//# sourceMappingURL=post.js.map