"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const shouldBeAdmin = (token) => {
    const jwtSecret = process.env.JWT_SECRET_KEY || "";
    try {
        const payload = jsonwebtoken_1.default.verify(token, jwtSecret);
        console.log("Token payload:", payload);
        if (!payload.isAdmin) {
            throw new Error("Not authorized!");
        }
        return {
            message: "You are Authenticated",
            validated: true,
        };
    }
    catch (error) {
        console.error("JWT Verification Error:", error);
        throw new Error("Token is not Valid or not authorized!");
    }
};
exports.shouldBeAdmin = shouldBeAdmin;
//# sourceMappingURL=admin.js.map