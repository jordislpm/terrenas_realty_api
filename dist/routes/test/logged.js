"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loggedIn_1 = require("src/business-logic/test/loggedIn");
const verifyToken_1 = require("src/middleware/verifyToken");
const routerLogged = (0, express_1.Router)();
routerLogged.get("/should-be-logged-in", verifyToken_1.verifyToken, loggedIn_1.shouldBeLoggedIn);
exports.default = routerLogged;
//# sourceMappingURL=logged.js.map