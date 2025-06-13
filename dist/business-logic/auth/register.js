"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerNewUser = void 0;
const argon2_1 = __importDefault(require("argon2"));
const prisma_1 = __importDefault(require("../../lib/prisma"));
const registerNewUser = async ({ data }) => {
    const { username, email, password, avatar } = data;
    console.log(data);
    try {
        if (!password) {
            throw new Error("password not found");
        }
        if (!email) {
            throw new Error("email not found");
        }
        const existingUser = await prisma_1.default.user.findFirst({
            where: {
                OR: [
                    { username: username },
                    { email: email },
                ],
            },
        });
        if (existingUser) {
            if (existingUser.username === username) {
                throw new Error("Username is already taken");
            }
            if (existingUser.email === email) {
                throw new Error("Email is already registered");
            }
        }
        const hashedPassword = await argon2_1.default.hash(password);
        const newUser = await prisma_1.default.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                avatar,
            },
        });
        const userResponse = {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            avatar: newUser.avatar,
            password: newUser.password,
            createdAt: newUser.createdAt,
        };
        console.log("New user created:", userResponse);
        return userResponse;
    }
    catch (error) {
        console.error("Error creating user for debugging:", error);
        throw new Error(error instanceof Error ? error.message : "Failed to create user");
    }
};
exports.registerNewUser = registerNewUser;
//# sourceMappingURL=register.js.map