import { loginUserDTO, User } from "src/entities";
type LoginUserParams = {
    data: loginUserDTO;
};
type LoginUserReturn = {
    token: string;
    age: number;
    user: User;
};
export declare const loginUser: ({ data }: LoginUserParams) => Promise<LoginUserReturn>;
export {};
//# sourceMappingURL=login.d.ts.map