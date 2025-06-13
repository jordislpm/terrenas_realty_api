"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const business_logic_1 = require("src/business-logic");
const verifyToken_1 = require("src/middleware/verifyToken");
const getUser = (0, express_1.Router)();
getUser.get("/search/:id", verifyToken_1.verifyToken, async (req, res) => {
    const id = req.params.id;
    try {
        const user = await (0, business_logic_1.getOneUser)(id);
        res.status(200).json(user);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get a user: ${error}` });
    }
});
exports.default = getUser;
//# sourceMappingURL=user.js.map