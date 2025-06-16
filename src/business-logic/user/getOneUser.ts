import { User } from "src/entities/user/user";
import prisma from "../../lib/prisma";



export const getOneUser = async (id:string|undefined): Promise<User> => {

  try {
       const user = await prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("User not found");
    }
    

    return user;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};