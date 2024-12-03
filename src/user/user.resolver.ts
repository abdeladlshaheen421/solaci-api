import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/graphql';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  findUser(): User {
    return this.userService.getUser();
  }
  @Mutation(() => User)
  updateUser(
    @Args('firstName') firstName: string,
    @Args('fatherName') fatherName: string,
  ): User {
    return this.userService.updateUser(firstName, fatherName);
  }
}
