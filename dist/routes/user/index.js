"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const users_1 = __importDefault(require("./users"));
const update_1 = __importDefault(require("./update"));
const detele_1 = __importDefault(require("./detele"));
const save_1 = __importDefault(require("./save"));
const userPosts_1 = __importDefault(require("./userPosts"));
const notification_1 = __importDefault(require("./notification"));
const userRoutes = (0, express_1.Router)();
userRoutes.use(user_1.default, users_1.default, update_1.default, detele_1.default, save_1.default, userPosts_1.default, notification_1.default);
exports.default = userRoutes;
//# sourceMappingURL=index.js.map