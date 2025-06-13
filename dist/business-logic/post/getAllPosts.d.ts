import { GetPostsQuery, Post } from "src/entities";
type GetAllPostsParams = {
    query: GetPostsQuery;
    token: string;
};
export declare const getAllPosts: ({ query, token }: GetAllPostsParams) => Promise<Post[]>;
export {};
//# sourceMappingURL=getAllPosts.d.ts.map