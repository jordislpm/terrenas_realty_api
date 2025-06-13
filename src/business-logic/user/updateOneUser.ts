import { updateUserDTO } from "src/entities/user/user.dto";
import prisma from "../../lib/prisma";
import argon2 from "argon2";
import { User } from "src/entities/user/user";



type UpdateOneUserParams ={
  id: string;
  user: updateUserDTO
}

export const updateOneUser = async ({id, user}:UpdateOneUserParams): Promise<User> => {
  const { password, avatar, username, email } = user;

  let updatedPassword: string | null = null;

  try {
    if (password) {
      updatedPassword = await argon2.hash(password);
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...(username && { username }),
        ...(email && { email }),
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    return updatedUser;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};