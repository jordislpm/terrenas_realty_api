"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routerLogout = (0, express_1.Router)();
routerLogout.post("/logout", async (req, res) => {
    res
        .clearCookie("token")
        .status(200)
        .json({ message: "Logout Successfully" });
});
exports.default = routerLogout;
//# sourceMappingURL=logout.js.map