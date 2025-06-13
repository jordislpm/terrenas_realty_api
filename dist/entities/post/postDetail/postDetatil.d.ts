import { Post } from "../post/post";
export interface PostDetail {
    id: string;
    desc: string;
    utilities?: string | null;
    pet?: string | null;
    income?: string | null;
    size?: number | null;
    school?: number | null;
    bus?: number | null;
    restaurant?: number | null;
    postId: string;
    post?: Post;
}
//# sourceMappingURL=postDetatil.d.ts.map