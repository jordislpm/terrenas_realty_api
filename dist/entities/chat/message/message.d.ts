import { Chat } from "../chat";
export interface Message {
    id: string;
    text: string;
    userId: string;
    chatId: string;
    createdAt: Date;
    chat?: Chat;
}
//# sourceMappingURL=message.d.ts.map