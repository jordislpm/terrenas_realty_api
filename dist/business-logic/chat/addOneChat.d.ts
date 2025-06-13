import { AddChat, Chat } from "src/entities";
interface AddOneChatType {
    tokenUserId: string;
    body: AddChat;
}
export declare const addOneChat: ({ tokenUserId, body }: AddOneChatType) => Promise<Chat>;
export {};
//# sourceMappingURL=addOneChat.d.ts.map