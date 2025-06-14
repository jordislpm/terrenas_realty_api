import { Request, Response, Router } from "express";
import { getAllUsers } from "../../business-logic/user/getAllUsers";




const getUsers: Router = Router();

getUsers.get("/", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get Users: ${error}` });
  }
});

export default getUsers;