"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = require("../../business-logic/auth/register");
const routerCreate = (0, express_1.Router)();
routerCreate.post("/register", async (req, res) => {
    const { body } = req;
    const user = body;
    try {
        const newUser = await (0, register_1.registerNewUser)({ data: user });
        res.status(201).json({ message: "user Created sucessfuly" });
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Error in server, created user failed" });
    }
});
exports.default = routerCreate;
//# sourceMappingURL=create.js.map