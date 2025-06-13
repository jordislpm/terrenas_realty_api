import { Post } from "src/entities/post/post/post";
type DeleteOnePostParams = {
    postId: string;
    tokenUserId: string;
};
export declare const deleteOnePost: ({ postId, tokenUserId }: DeleteOnePostParams) => Promise<Post>;
export {};
//# sourceMappingURL=deleteOnePost.d.ts.map