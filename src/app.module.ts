import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { UserService } from "./services/user.service";
import { UserController } from "./controllers/user.controller";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import * as dotenv from "dotenv";
console.log("my path :", __dirname);
process.env.PWD = process.cwd();
console.log(process.env.PWD);

dotenv.config();
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../../../dist/", "client/src"),
    }),
    MongooseModule.forRoot(process.env.MONGODB_LINK),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
