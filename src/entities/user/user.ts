import { Chat, Post, SavedPost } from "@prisma/client";


export interface User {
  id?: string;
  email?: string;
  username: string;
  password?: string;
  avatar?: string | null;
  createdAt?: Date;
  posts?: Post[];
  savedPosts?: SavedPost[];
  chats?: Chat[];
  chatIDs?: string[]; // ObjectIds stored as strings
}