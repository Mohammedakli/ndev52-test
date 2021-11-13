import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from "@nestjs/common";
import { User } from "src/schemas/user.schema";
import { UserService } from "src/services/user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}
  // déffinir la route pour créer un utillisateur {/users}
  @Post()
  async createUser(@Res() response, @Body() user: User) {
    const newBook = await this.userService.create(user);
    return response.status(HttpStatus.CREATED).json({
      newBook,
    });
  }
  // déffinir la route pour afficher tous les utilisateurs {/users}
  @Get()
  async fetchAll(@Res() response) {
    const users = await this.userService.readAll();
    return response.status(HttpStatus.OK).json({
      users,
    });
  }
  // déffinir la route pour modifier un utillisateur {/users/:id}
  @Put("/:id")
  async update(@Res() response, @Param("id") id: string, @Body() user: User) {
    const updatedUser = await this.userService.update(id, user);
    return response.status(HttpStatus.OK).json({
      updatedUser,
    });
  }
  // déffinir la route pour supprimer un utillisateur /users/:id}
  @Delete("/:id")
  async delete(@Res() response, @Param("id") id: string) {
    const deletedUser = await this.userService.delete(id);
    return response.status(HttpStatus.OK).json({
      deletedUser,
    });
  }
}
