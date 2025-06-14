
import { Request, Response, Router } from "express";
import { shouldBeAdmin } from "../../business-logic/test/admin";


const routerAdmin: Router = Router();

routerAdmin.get("/should-be-admin", async (req: Request, res: Response): Promise<void> => {
const token = req.cookies.token;
const userId = req.userId;

console.log(userId)

  if (!token) {
    res.status(401).json({ message: "Not Authenticated!" });
    return; // Muy importante: salir si no hay token
  }

  try {
    const userValidated = await shouldBeAdmin(token);
    res.status(200).json(userValidated);
  } catch (error) {
    console.error("Error:", error);
    res.status(403).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default routerAdmin;