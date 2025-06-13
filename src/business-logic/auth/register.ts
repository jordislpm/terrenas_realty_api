import argon2 from "argon2";


import prisma from "../../lib/prisma";

import { createUserDTO } from "src/entities/user/user.dto";
import { User } from "src/entities/user/user";


type RegisterNewUserParams = {
data: createUserDTO;
};



export const registerNewUser = async ({data}: RegisterNewUserParams): Promise<User> => {
  const { username, email, password, avatar } = data;

  console.log(data)

  try {


    if(!password){
       throw new Error("password not found");
    }

     if(!email){
       throw new Error("email not found");
    }


    // Check if username or email already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username },
          { email: email },
        ],
      },
    });

    if (existingUser) {
      if (existingUser.username === username) {
        throw new Error("Username is already taken");
      }
      if (existingUser.email === email) {
        throw new Error("Email is already registered");
      }
    }

    // Hashing the password
    const hashedPassword = await argon2.hash(password);

    // Creating the new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        avatar,
      },
    });

    const userResponse: User = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      avatar: newUser.avatar,
      password: newUser.password,
      createdAt: newUser.createdAt,
    };

    console.log("New user created:", userResponse);
    return userResponse;
  } catch (error) {
    console.error("Error creating user for debugging:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to create user");
  }
};