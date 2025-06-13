import { User } from "@prisma/client";
import { Post } from "../post/post";

export interface SavedPost {
  id: string;
  userId: string;
  postId: string;
  createdAt: Date;
  user?: User;
  post?: Post;
}