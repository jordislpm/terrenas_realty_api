


export type MessageUserSocket = {
    receiverId: string;
    data: MessageSocket;
}

export type MessageSocket = {
  id: string;
  text: string;
  userId: string;
  chatId: string;
  createdAt: Date;
};