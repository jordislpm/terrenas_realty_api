"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneUser = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const deleteOneUser = async (id) => {
    try {
        const user = await prisma_1.default.user.delete({
            where: { id },
        });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.deleteOneUser = deleteOneUser;
//# sourceMappingURL=deleteOneUser.js.map