"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const business_logic_1 = require("src/business-logic");
const getPosts = (0, express_1.Router)();
getPosts.get("/", async (req, res) => {
    const query = req.query;
    const token = req.cookies.token;
    try {
        const posts = await (0, business_logic_1.getAllPosts)({ query: query, token: token });
        res.status(200).json(posts);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get Posts: ${error}` });
    }
});
exports.default = getPosts;
//# sourceMappingURL=posts.js.map