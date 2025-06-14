
import { PostDetail } from "src/entities/post/postDetail/postDetatil";
import { SavedPost } from "src/entities/post/savedPost/savedPost";
import { User } from "src/entities/user/user";


export interface Post {
  id: string;
  title: string;
  price: number;
  images: string[];
  address: string;
  city: string;
  bedroom: number;
  bathroom: number;
  latitude: string;
  longitude: string;
  type: 'buy' | 'rent'; // match your enum
  property: 'apartment' | 'house' | 'condo' | 'land'; // match your enum
  createdAt: Date;
  userId: string;
  user?: User;
  postDetail?: PostDetail | null;
  savedPosts?: SavedPost[];
  isSaved?: boolean;
}