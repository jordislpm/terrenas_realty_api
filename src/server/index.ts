import express, { Request, Response, NextFunction } from "express";
import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Server } from "socket.io";
import apiRoutes from "../routes";
import { registerSocketEvents } from "../socket/events/socketEvents";


const PORT = Number(process.env.API_PORT) || 8000;
const clientUrl = process.env.CLIENT_URL || "https://forty-teams-juggle.loca.lt";

// Crear instancia de express
const app = express();

// Crear servidor HTTP a partir de Express
const httpServer = http.createServer(app);

// Crear instancia de Socket.IO y unirla al servidor HTTP
const io = new Server(httpServer, {
  cors: {
    origin: clientUrl,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  },
});

// Registrar eventos de socket
registerSocketEvents(io);

// Middleware global de log
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

const corsOptions = {
  origin: clientUrl,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRoutes);

// Middleware de error
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Iniciar el servidor HTTP (Express + Socket.IO)
httpServer.listen(PORT, () => {
  console.log(`🚀 Servidor Express+Socket.IO corriendo en el puerto ${PORT}`);
});




