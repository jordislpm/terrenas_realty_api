"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("src/business-logic/auth/login");
const routerLogin = (0, express_1.Router)();
routerLogin.post("/login", async (req, res) => {
    const { body } = req;
    const userToLogin = body;
    try {
        const userValidated = await (0, login_1.loginUser)({ data: userToLogin });
        const { token, age, user } = userValidated;
        const { password, ...userInfo } = user;
        console.log(userInfo);
        res
            .cookie("token", token, {
            httpOnly: true,
            maxAge: age
        })
            .status(200)
            .json(userInfo);
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Error in server, user not validated: ${error}` });
    }
});
exports.default = routerLogin;
//# sourceMappingURL=login.js.map