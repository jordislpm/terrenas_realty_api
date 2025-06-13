"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNotifications = void 0;
const prisma_1 = __importDefault(require("../../lib/prisma"));
const getAllNotifications = async (userId) => {
    try {
        if (!userId) {
            throw new Error("user not validate");
        }
        const number = await prisma_1.default.chat.count({
            where: {
                userIDs: {
                    has: userId
                },
                NOT: {
                    seenBy: {
                        hasSome: [userId]
                    }
                }
            }
        });
        return number;
    }
    catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
exports.getAllNotifications = getAllNotifications;
//# sourceMappingURL=getAllNotifications.js.map