import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { UserService } from "./services/user.service";
import { UserController } from "./controllers/user.controller";
import * as dotenv from "dotenv";

dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_LINK),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
