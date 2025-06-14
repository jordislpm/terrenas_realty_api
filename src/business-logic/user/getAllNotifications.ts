import prisma from "../../lib/prisma";




export const getAllNotifications = async (userId: string | undefined): Promise<Number> => {


  try {

     if (!userId) {
            throw new Error("user not validate");
        }

        const number = await prisma.chat.count({
            where:{
                userIDs:{
                    has: userId
                },
                NOT:{
                    seenBy:{
                        hasSome: [userId]
                    }
                }
            }
        })

    return number
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "Unknown error");
  }
};