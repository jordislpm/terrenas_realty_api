"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("src/middleware/verifyToken");
const business_logic_1 = require("src/business-logic");
const getChats = (0, express_1.Router)();
getChats.get("/", verifyToken_1.verifyToken, async (req, res) => {
    const tokenUserId = req.userId;
    try {
        if (!tokenUserId) {
            res.status(403).json({ Message: "Not Authorized" });
        }
        else {
            const chats = await (0, business_logic_1.getAllchats)({ tokenUserId: tokenUserId });
            res.status(200).json(chats);
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get chats: ${error}` });
    }
});
exports.default = getChats;
//# sourceMappingURL=getChats.js.map