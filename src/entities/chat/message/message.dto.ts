import { Message } from "./message";

export type createMessageDTO = Omit<Message, "id">