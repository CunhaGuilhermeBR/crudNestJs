import { Module } from '@nestjs/common';
import { IsUniqueEmailConstraint } from './is-user-email-unique.validator';
import { UserController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, IsUniqueEmailConstraint],
})
export class UserModule {}
