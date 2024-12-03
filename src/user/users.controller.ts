import { Body, Controller, Get, Put } from '@nestjs/common';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { UserService } from 'src/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  findUser() {
    return this.userService.getUser();
  }

  @Put()
  updateUser(@Body() updateUserDto: UpdateUserDto): UpdateUserDto {
    return this.userService.updateUser(
      updateUserDto.firstName,
      updateUserDto.fatherName,
    );
  }
}
