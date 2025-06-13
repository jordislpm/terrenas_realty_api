import argon2 from "argon2";
import prisma from "src/lib/prisma";
import {updateUserDTO, User } from "src/entities";



export const deleteOneUser = async (id: string): Promise<User> => {


 try {
       const user = await prisma.user.delete({
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