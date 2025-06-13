import { User } from "./user";

export type createUserDTO = Omit<User, "id">
export type updateUserDTO = Partial<User>
export type loginUserDTO = Required<Pick<User, 'username' | 'password'>> & Partial<Omit<User, 'username' | 'password'>>;