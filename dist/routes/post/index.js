"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = __importDefault(require("./post"));
const detele_1 = __importDefault(require("./detele"));
const update_1 = __importDefault(require("./update"));
const posts_1 = __importDefault(require("./posts"));
const create_1 = __importDefault(require("./create"));
const postRoutes = (0, express_1.Router)();
postRoutes.use(post_1.default, posts_1.default, detele_1.default, update_1.default, create_1.default);
exports.default = postRoutes;
//# sourceMappingURL=index.js.map