import { updatePostDTO } from "src/entities/post/post";
import { Post } from "src/entities/post/post/post";
type UpdateOnePostParams = {
    id: string;
    post: updatePostDTO;
};
export declare const updateOnePost: ({ post, id }: UpdateOnePostParams) => Promise<Post>;
export {};
//# sourceMappingURL=updateOnePost.d.ts.map