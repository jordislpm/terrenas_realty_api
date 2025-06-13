"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const test_1 = __importDefault(require("./test"));
const user_1 = __importDefault(require("./user"));
const post_1 = __importDefault(require("./post"));
const chat_1 = __importDefault(require("./chat"));
const message_1 = __importDefault(require("./message"));
const apiRoutes = (0, express_1.Router)();
apiRoutes.use("/auth", auth_1.default);
apiRoutes.use("/test", test_1.default);
apiRoutes.use("/users", user_1.default);
apiRoutes.use("/posts", post_1.default);
apiRoutes.use("/chats", chat_1.default);
apiRoutes.use("/messages", message_1.default);
exports.default = apiRoutes;
//# sourceMappingURL=index.js.map