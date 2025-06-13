"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeLoggedIn = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const shouldBeLoggedIn = (req, res) => {
    if (!req.userId) {
        res.status(401).json({ message: "Not user id!" });
    }
    res.status(200).json({ message: "You are authenticated as logged" });
};
exports.shouldBeLoggedIn = shouldBeLoggedIn;
//# sourceMappingURL=loggedIn.js.map