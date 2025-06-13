"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const business_logic_1 = require("src/business-logic");
const verifyToken_1 = require("src/middleware/verifyToken");
const deleteUser = (0, express_1.Router)();
deleteUser.delete("/:id", verifyToken_1.verifyToken, async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    if (id !== tokenUserId) {
        res.status(403).json({ Message: "Not Authorized" });
    }
    try {
        if (!id) {
            res.status(403).json({ Message: "id is not valid!" });
        }
        else {
            const user = await (0, business_logic_1.deleteOneUser)(id);
            res.status(200).json({ message: "User deleted" });
        }
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: `Failed to delete user: ${error}` });
    }
});
exports.default = deleteUser;
//# sourceMappingURL=detele.js.map