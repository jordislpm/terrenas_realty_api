import { UserSocket } from "../types";

const onlineUsers = new Map<string, UserSocket>();



export const addOnlineUser = ({socketId, userId}:UserSocket) => {
  onlineUsers.set(`${userId}`, { userId: userId, socketId: socketId });
};

export const removeOnlineUser = (socketId:string) => {
  onlineUsers.delete(socketId);
};

export const getOnlineUsers = () => {
  return Array.from(onlineUsers.values());
};

export const getUser = (userId: string)=>{
    const arrUsers = Array.from(onlineUsers.values());
    return arrUsers.find((user)=> user.userId === userId)
}