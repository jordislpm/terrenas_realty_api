import { Post } from "src/entities";
type GetOnePostParams = {
    id: string | undefined;
    token: string | undefined;
};
export declare const getOnePost: ({ id, token }: GetOnePostParams) => Promise<Post>;
export {};
//# sourceMappingURL=getOnePost.d.ts.map