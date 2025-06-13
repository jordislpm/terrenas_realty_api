import { PostDetail } from '../postDetail';
import { Post } from './post';



export interface createPostDTO {
  postData: Omit<Post, "id" | "createdAt" | "userId" | "user" | "postDetail" | "savedPosts">;
  postDetail?: Omit<PostDetail, "id" | "postId" | "post">;
}
export interface updatePostDTO {
  postData?: Partial<Omit<Post,  "createdAt" | "userId" | "user" | "postDetail" | "savedPosts">>;
  postDetail?: Partial<Omit<PostDetail, "id" | "postId" | "post">>;
}