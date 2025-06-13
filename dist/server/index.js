"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes"));
const PORT = process.env.API_PORT || 8000;
const server = (0, express_1.default)();
server.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
});
const clientUrl = process.env.CLIENT_URL;
const corsOptions = {
    origin: clientUrl,
    credentials: true
};
server.use((0, cors_1.default)(corsOptions));
server.use(express_1.default.json());
server.use((0, cookie_parser_1.default)());
server.use("/api", routes_1.default);
server.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
});
server.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});
//# sourceMappingURL=index.js.map