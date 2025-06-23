import express, { Request, Response, NextFunction } from "express";
import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Server } from "socket.io";
import apiRoutes from "../routes";
import { registerSocketEvents } from "../socket/events/socketEvents";

// Environment
const PORT = Number(process.env.API_PORT) || 8000;
const clientUrl = process.env.CLIENT_URL || "https://terrenas-realty.vercel.app";

// ✅ Allowed origins for CORS
const allowedOrigins = [
  clientUrl,
  "http://localhost:3000",
  "https://terrenas-realty.vercel.app",
];

// Create Express app and HTTP server
const app = express();
const httpServer = http.createServer(app);

// ✅ CORS options (used by both Express and Socket.IO)
const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Socket.IO setup
const io = new Server(httpServer, { cors: corsOptions });
registerSocketEvents(io);

// Global middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`📡 ${req.method} ${req.url}`);
  next();
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// API routes
app.use("/api", apiRoutes);

// Error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
httpServer.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


