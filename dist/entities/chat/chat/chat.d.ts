import { User } from "src/entities/user";
import { Message } from "../message";
export interface Chat {
    id: string;
    userIDs: string[];
    users?: User[];
    createdAt: Date;
    seenBy?: string[];
    messages?: Message[];
    lastMessage?: string | null;
    receiver?: User;
}
export interface AddChat {
    receiverId: string;
}
//# sourceMappingURL=chat.d.ts.map