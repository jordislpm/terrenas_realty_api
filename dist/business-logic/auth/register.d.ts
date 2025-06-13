import { createUserDTO } from "src/entities/user/user.dto";
import { User } from "src/entities/user/user";
type RegisterNewUserParams = {
    data: createUserDTO;
};
export declare const registerNewUser: ({ data }: RegisterNewUserParams) => Promise<User>;
export {};
//# sourceMappingURL=register.d.ts.map