"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    if (!token) {
        res.status(401).json({ message: "Not Authenticated!" });
        return;
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, jwtSecret);
        if (!payload || typeof payload === "string") {
            res.status(403).json({ message: "Token is not valid!" });
            return;
        }
        req.userId = payload.id;
        next();
    }
    catch (err) {
        res.status(403).json({ message: "Token is not valid!" });
        return;
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map