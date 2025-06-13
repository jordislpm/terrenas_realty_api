"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addMessage_1 = __importDefault(require("./addMessage"));
const messageRoutes = (0, express_1.Router)();
messageRoutes.use(addMessage_1.default);
exports.default = messageRoutes;
//# sourceMappingURL=index.js.map