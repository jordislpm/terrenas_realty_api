"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const create_1 = __importDefault(require("./create"));
const login_1 = __importDefault(require("./login"));
const logout_1 = __importDefault(require("./logout"));
const authRoutes = (0, express_1.Router)();
authRoutes.use(create_1.default, login_1.default, logout_1.default);
exports.default = authRoutes;
//# sourceMappingURL=index.js.map