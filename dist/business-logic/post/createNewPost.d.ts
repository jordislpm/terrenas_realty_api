import { createPostDTO } from "src/entities/post/post";
import { Post } from "src/entities/post/post/post";
type CreateNewPostParams = {
    id: string;
    post: createPostDTO;
};
export declare const createNewPost: ({ id, post }: CreateNewPostParams) => Promise<Post>;
export {};
//# sourceMappingURL=createNewPost.d.ts.map