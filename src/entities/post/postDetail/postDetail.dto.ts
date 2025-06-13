import { PostDetail } from "./postDetatil"


export type createPostDetailDTO = Omit<PostDetail, "id">
export type updatePostDetailDTO = Partial<PostDetail>