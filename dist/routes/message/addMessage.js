"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("src/middleware/verifyToken");
const business_logic_1 = require("src/business-logic");
const addMessage = (0, express_1.Router)();
addMessage.post("/:chatId", verifyToken_1.verifyToken, async (req, res) => {
    const chatId = req.params.chatId;
    const tokenUserId = req.userId;
    const text = req.body.text;
    if (!tokenUserId) {
        res.status(403).json({ Message: "Not Authorized" });
    }
    try {
        if (!chatId || !tokenUserId) {
            res.status(403).json({ Message: "Missing chat id or toKenUserId" });
        }
        else {
            const newChat = await (0, business_logic_1.addNewMessage)({
                tokenUserId: tokenUserId,
                chatId: chatId,
                text: text
            });
            res.status(200).json(newChat);
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to add message: ${error}` });
    }
});
exports.default = addMessage;
//# sourceMappingURL=addMessage.js.map