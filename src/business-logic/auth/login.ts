import argon2 from "argon2";

import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma";
import dotenv from 'dotenv';
import { loginUserDTO } from "src/entities/user/user.dto";
import { User } from "src/entities/user/user";



type LoginUserParams = {
data: loginUserDTO;
};

type LoginUserReturn ={
 token: string, 
 age: number, 
 user:User
}

export const loginUser = async ({data}:LoginUserParams): Promise<LoginUserReturn> => {
  const { username, password } = data;
  dotenv.config();
  const jwtSecret = process.env.JWT_SECRET_KEY;
  const age = 1000 * 60 * 60 * 24 * 7;

  // Check if the JWT_SECRET is defined
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined in the environment variables");
  }

  try {
    // Verificar si el usuario existe
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new Error("User does not exist");
    }

    // Verificar si la contraseña es correcta
    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      throw new Error("Password is incorrect");
    }

    // Generar el token
    const token = jwt.sign(
      {
        id: user.id,
  
      },
      jwtSecret,
      {expiresIn: age}// JWT_SECRET is now guaranteed to be a string
    );

    return {token, age, user};
  } catch (error) {
    console.error(
      "Error logging user:",
      error instanceof Error ? error.message : "Unknown error"
    );
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};