import { User } from "src/entities/user";
import { Message } from "../message";

export interface Chat {
  id: string;
  userIDs: string[]; // ObjectIds stored as strings
  users?: User[];
  createdAt: Date;
  seenBy?: string[]; // users who saw the last message
  messages?: Message[];
  lastMessage?: string | null;
  receiver?: User;
}


export interface AddChat {
  receiverId: string;
}
