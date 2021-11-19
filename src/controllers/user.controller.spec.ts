import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "../services/user.service";
import { AnyFilesInterceptor } from "@nestjs/platform-express";

describe("AppController", () => {
  let userController: UserController;
  const mockUserService = {};
  beforeAll(async () => {
    const ApiServiceProvider = {
      provide: UserService,
      useFactory: () => ({
        readAll: jest.fn(() => []),
      }),
    };
  });
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    userController = app.get<UserController>(UserController);
  });

  it("should be defined", () => {
    expect(userController).toBeDefined;
  });
});
