import { User } from "src/entities/user";
import { PostDetail } from "../postDetail";
import { SavedPost } from "../savedPost";
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
    type: 'buy' | 'rent';
    property: 'apartment' | 'house' | 'condo' | 'land';
    createdAt: Date;
    userId: string;
    user?: User;
    postDetail?: PostDetail | null;
    savedPosts?: SavedPost[];
    isSaved?: boolean;
}
//# sourceMappingURL=post.d.ts.map