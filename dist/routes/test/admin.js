"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = require("src/business-logic/test/admin");
const routerAdmin = (0, express_1.Router)();
routerAdmin.get("/should-be-admin", async (req, res) => {
    const token = req.cookies.token;
    const userId = req.userId;
    console.log(userId);
    if (!token) {
        res.status(401).json({ message: "Not Authenticated!" });
        return;
    }
    try {
        const userValidated = await (0, admin_1.shouldBeAdmin)(token);
        res.status(200).json(userValidated);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(403).json({
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
});
exports.default = routerAdmin;
//# sourceMappingURL=admin.js.map