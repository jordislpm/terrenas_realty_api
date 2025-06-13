"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const business_logic_1 = require("src/business-logic");
const getUsers = (0, express_1.Router)();
getUsers.get("/", async (req, res) => {
    try {
        const users = await (0, business_logic_1.getAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to get Users: ${error}` });
    }
});
exports.default = getUsers;
//# sourceMappingURL=users.js.map