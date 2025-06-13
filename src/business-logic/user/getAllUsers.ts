import prisma from "../../lib/prisma";
import {User } from "src/entities";


export const getAllUsers = async (): Promise<User[]> => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};