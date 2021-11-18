import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../schemas/user.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  // Créer un utilisateur
  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }
  //Afficher tous les utilisateurs
  async readAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  //modifier un utilisateur
  async update(id, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
  // Supprimer un utilisateur
  async delete(id): Promise<any> {
    return await this.userModel.findByIdAndRemove(id);
  }
}
