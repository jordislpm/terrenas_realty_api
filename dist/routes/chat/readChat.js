"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("src/middleware/verifyToken");
const business_logic_1 = require("src/business-logic");
const readChat = (0, express_1.Router)();
readChat.put("/read/:id", verifyToken_1.verifyToken, async (req, res) => {
    const chatId = req.params.id;
    const tokenUserId = req.userId;
    if (!tokenUserId) {
        res.status(403).json({ Message: "Not Authorized" });
    }
    try {
        if (!tokenUserId || !chatId) {
            res.status(403).json({ Message: "chat id is missing" });
        }
        else {
            const chat = await (0, business_logic_1.readOnechat)({ tokenUserId: tokenUserId, chatId: chatId });
            if (chat) {
                res.status(200).json(chat);
            }
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to read chat: ${error}` });
    }
});
exports.default = readChat;
//# sourceMappingURL=readChat.js.map