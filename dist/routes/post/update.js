"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("src/middleware/verifyToken");
const business_logic_1 = require("src/business-logic");
const updatePost = (0, express_1.Router)();
updatePost.put("/:id", verifyToken_1.verifyToken, async (req, res) => {
    var _a, _b, _c;
    const id = req.params.id;
    const tokenUserId = req.userId;
    const body = req.body;
    console.log((_a = body.postData) === null || _a === void 0 ? void 0 : _a.id);
    console.log(id, tokenUserId);
    if (id !== tokenUserId) {
        res.status(403).json({ Message: "Not Authorized" });
    }
    try {
        if (!id || !tokenUserId) {
            res.status(403).json({ Message: "id is not valid!" });
        }
        else {
            if ((_b = body.postData) === null || _b === void 0 ? void 0 : _b.id) {
                const post = await (0, business_logic_1.updateOnePost)({ id: (_c = body.postData) === null || _c === void 0 ? void 0 : _c.id, post: body });
            }
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to update post: ${error}` });
    }
});
exports.default = updatePost;
//# sourceMappingURL=update.js.map