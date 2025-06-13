"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("src/middleware/verifyToken");
const business_logic_1 = require("src/business-logic");
const addChat = (0, express_1.Router)();
addChat.post("/", verifyToken_1.verifyToken, async (req, res) => {
    const tokenUserId = req.userId;
    const body = req.body;
    try {
        if (!tokenUserId) {
            res.status(403).json({ Message: "Not Authorized" });
        }
        else {
            const newChat = await (0, business_logic_1.addOneChat)({ tokenUserId: tokenUserId, body: body });
            res.status(200).json(newChat);
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to add chat: ${error}` });
    }
});
exports.default = addChat;
//# sourceMappingURL=addChat.js.map