"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addChat_1 = __importDefault(require("./addChat"));
const getChat_1 = __importDefault(require("./getChat"));
const getChats_1 = __importDefault(require("./getChats"));
const readChat_1 = __importDefault(require("./readChat"));
const chatRoutes = (0, express_1.Router)();
chatRoutes.use(addChat_1.default, getChat_1.default, getChats_1.default, readChat_1.default);
exports.default = chatRoutes;
//# sourceMappingURL=index.js.map