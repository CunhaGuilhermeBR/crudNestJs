import { Body, Controller, Get, Param, Post } from "@nestjs/common"
import { UserService } from "./user.service";
import { User } from "./user.entity"

@Controller('users')
export class UserController {

    constructor(private userService : UserService){}

    @Post()
    public create(@Body() user: User) {
       this.userService.create(user)
       return user
    }

    @Get(':name')
    public getUser(@Param('name') name: string){
       return this.userService.getUser(name);
    }
}