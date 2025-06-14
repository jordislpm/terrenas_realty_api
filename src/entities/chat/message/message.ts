import { Chat } from "src/entities/chat/chat/chat";


export interface Message {
  id: string;
  text: string;
  userId: string;
  chatId: string;
  createdAt: Date;
  chat?: Chat;
}