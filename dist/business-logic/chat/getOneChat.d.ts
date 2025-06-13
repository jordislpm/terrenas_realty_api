import { Chat } from "src/entities";
type GetOneChatParams = {
    tokenUserId: string;
    chatId: string;
};
export declare const getOnechat: ({ tokenUserId, chatId }: GetOneChatParams) => Promise<Chat>;
export {};
//# sourceMappingURL=getOneChat.d.ts.map