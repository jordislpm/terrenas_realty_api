"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getAllUsers = async () => {
    try {
        return await prisma_1.default.user.findMany();
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=getAllUsers.js.map