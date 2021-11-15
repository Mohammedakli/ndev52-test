"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const user_service_1 = require("./services/user.service");
const user_controller_1 = require("./controllers/user.controller");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const dotenv = require("dotenv");
console.log("my path :", __dirname);
process.env.PWD = process.cwd();
console.log(process.env.PWD);
dotenv.config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(process.env.PWD, "/dist/client"),
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_LINK),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map