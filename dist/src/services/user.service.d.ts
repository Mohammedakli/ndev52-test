import { Model } from "mongoose";
import { User, UserDocument } from "src/schemas/user.schema";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(user: User): Promise<User>;
    readAll(): Promise<User[]>;
    update(id: any, user: User): Promise<User>;
    delete(id: any): Promise<any>;
}
