"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("src/middleware/verifyToken");
const business_logic_1 = require("src/business-logic");
const getChat = (0, express_1.Router)();
getChat.get("/:id", verifyToken_1.verifyToken, async (req, res) => {
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
            const chat = await (0, business_logic_1.getOnechat)({ tokenUserId: tokenUserId, chatId: chatId });
            res.status(200).json(chat);
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get chat: ${error}` });
    }
});
exports.default = getChat;
//# sourceMappingURL=getChat.js.map