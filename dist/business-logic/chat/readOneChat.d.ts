import { Chat } from "src/entities/chat/chat/chat";
type ReadOneChatParams = {
    tokenUserId: string;
    chatId: string;
};
export declare const readOnechat: ({ tokenUserId, chatId }: ReadOneChatParams) => Promise<Chat>;
export {};
//# sourceMappingURL=readOneChat.d.ts.map