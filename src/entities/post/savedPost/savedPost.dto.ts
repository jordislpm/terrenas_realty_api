import { SavedPost } from "./savedPost";


export type savedPostDTO = Omit<SavedPost, "id">
export type updateSavedDTO = Partial<SavedPost>