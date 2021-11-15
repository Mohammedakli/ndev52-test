import { User } from "src/schemas/user.schema";
import { UserService } from "src/services/user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(response: any, user: User): Promise<any>;
    fetchAll(response: any): Promise<any>;
    update(response: any, id: string, user: User): Promise<any>;
    delete(response: any, id: string): Promise<any>;
}
