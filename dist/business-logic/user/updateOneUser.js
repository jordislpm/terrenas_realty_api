"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOneUser = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const argon2_1 = __importDefault(require("argon2"));
const updateOneUser = async ({ id, user }) => {
    const { password, avatar, username, email } = user;
    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await argon2_1.default.hash(password);
        }
        const updatedUser = await prisma_1.default.user.update({
            where: { id },
            data: {
                ...(username && { username }),
                ...(email && { email }),
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
        });
        return updatedUser;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.updateOneUser = updateOneUser;
//# sourceMappingURL=updateOneUser.js.map