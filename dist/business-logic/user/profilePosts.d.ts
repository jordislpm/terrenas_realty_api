import { Post } from "@prisma/client";
export declare const profilePosts: (id: string | undefined) => Promise<{
    userPosts: Post[];
    savedPosts: Post[];
}>;
//# sourceMappingURL=profilePosts.d.ts.map