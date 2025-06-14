import { MessageUserSocket } from "../types/message";
import { UserSocket } from "../types/user";
import { getOnlineUsers, removeOnlineUser, addOnlineUser, getUser } from "../util/onlineUser";;
import { Server, Socket } from "socket.io";


export function registerSocketEvents(io: Server) {
    io.on("connection", (socket: Socket) => {
        console.log("✅ New socket connected:", socket.id);

        socket.on("user-connected", (userId: string) => {
            addOnlineUser({ socketId: socket.id, userId });
            console.log("🔵 User online:", userId);
            io.emit("online-users", getOnlineUsers());
        });

        socket.on("test", (data) => {
            console.log(data)
        })

        socket.on("disconnect", () => {
            removeOnlineUser(socket.id);
            console.log("❌ Socket disconnected:", socket.id);
            io.emit("online-users", getOnlineUsers());
        });

        socket.on("message", (data: MessageUserSocket) => {
            // socket.broadcast.emit("message", data);
            console.log(data)
        });


       socket.on("sendMessage", (response: MessageUserSocket) => {
            const { receiverId, data } = response;
            const receiver: UserSocket | undefined = getUser(receiverId);

            console.log("receiver:", receiver)

            if (receiver) {
                 io.to(receiver.socketId).emit("getMessage", data);
            }
        });
    });
}