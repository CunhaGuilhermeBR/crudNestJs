import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Injectable()
@ValidatorConstraint()
export class IsUniqueEmailConstraint implements ValidatorConstraintInterface {

    constructor(private userService: UserService){}
    validate(email: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
       return !!!this.userService.getUser(email);
    }
}

export function IsUniqueEmail(validationOptions?: ValidationOptions) {
    return function (user: User, email: string) {
      registerDecorator({
        target: user.constructor,
        propertyName: email,
        options: validationOptions,
        constraints: [],
        validator: IsUniqueEmailConstraint,
      });
    };
  }