"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_1 = __importDefault(require("./admin"));
const logged_1 = __importDefault(require("./logged"));
const testRoutes = (0, express_1.Router)();
testRoutes.use(admin_1.default, logged_1.default);
exports.default = testRoutes;
//# sourceMappingURL=index.js.map