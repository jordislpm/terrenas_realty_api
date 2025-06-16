import { Request, Response, Router } from "express";
import { getAllUsers } from "../../business-logic/user/getAllUsers";




const getUsers: Router = Router();

getUsers.get("/", async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();

    const usersSafe = users.map((user)=>{
      const { password, ...userInfo} = user;
      return userInfo;
    })
    res.status(200).json(usersSafe);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: `Failed to get Users: ${error}` });
  }
});

export default getUsers;