import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserController } from './users.controller';

@Module({
  providers: [UserService, UserResolver],
  controllers: [UserController],
})
export class UserModule {}
