import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// Agrega el tipo de función: (req, res, next) => void
export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.cookies.token;
  const jwtSecret = process.env.JWT_SECRET_KEY || "";

  if (!token) {
    res.status(401).json({ message: "Not Authenticated!" });
    return; // importante: salir explícitamente
  }

  try {
    const payload = jwt.verify(token, jwtSecret);

    if (!payload || typeof payload === "string") {
      res.status(403).json({ message: "Token is not valid!" });
      return;
    }

    req.userId = (payload as JwtPayload).id;
    next(); // Solo aquí se pasa al siguiente middleware
  } catch (err) {
    res.status(403).json({ message: "Token is not valid!" });
    return;
  }
};