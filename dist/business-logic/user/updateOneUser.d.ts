import { updateUserDTO } from "src/entities/user/user.dto";
import { User } from "src/entities/user/user";
type UpdateOneUserParams = {
    id: string;
    user: updateUserDTO;
};
export declare const updateOneUser: ({ id, user }: UpdateOneUserParams) => Promise<User>;
export {};
//# sourceMappingURL=updateOneUser.d.ts.map