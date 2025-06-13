"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllNotifications_1 = require("src/business-logic/user/getAllNotifications");
const verifyToken_1 = require("src/middleware/verifyToken");
const getNotification = (0, express_1.Router)();
getNotification.get("/notification", verifyToken_1.verifyToken, async (req, res) => {
    const tokenUserId = req.userId;
    try {
        const notification = await (0, getAllNotifications_1.getAllNotifications)(tokenUserId);
        res.status(200).json(notification);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get notifications: ${error}` });
    }
});
exports.default = getNotification;
//# sourceMappingURL=notification.js.map