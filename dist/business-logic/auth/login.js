"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const argon2_1 = __importDefault(require("argon2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
const dotenv_1 = __importDefault(require("dotenv"));
const loginUser = async ({ data }) => {
    const { username, password } = data;
    dotenv_1.default.config();
    const jwtSecret = process.env.JWT_SECRET_KEY;
    const age = 1000 * 60 * 60 * 24 * 7;
    if (!jwtSecret) {
        throw new Error("JWT_SECRET is not defined in the environment variables");
    }
    try {
        const user = await prisma_1.default.user.findUnique({
            where: { username },
        });
        if (!user) {
            throw new Error("User does not exist");
        }
        const isPasswordValid = await argon2_1.default.verify(user.password, password);
        if (!isPasswordValid) {
            throw new Error("Password is incorrect");
        }
        const token = jsonwebtoken_1.default.sign({
            id: user.id,
        }, jwtSecret, { expiresIn: age });
        return { token, age, user };
    }
    catch (error) {
        console.error("Error logging user:", error instanceof Error ? error.message : "Unknown error");
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.loginUser = loginUser;
//# sourceMappingURL=login.js.map