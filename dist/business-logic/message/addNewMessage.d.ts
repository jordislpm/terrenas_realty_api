import { Message } from "src/entities/chat/message/message";
type AddNewMessageParams = {
    tokenUserId: string;
    chatId: string;
    text: string;
};
export declare const addNewMessage: ({ tokenUserId, chatId, text }: AddNewMessageParams) => Promise<Message>;
export {};
//# sourceMappingURL=addNewMessage.d.ts.map