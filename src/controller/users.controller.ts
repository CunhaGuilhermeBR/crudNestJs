import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from "@nestjs/common";
import { User } from '../model/user.model'
import { UsersService } from "../users.service";


@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findOne(@Param() params): Promise<User> {
        return this.usersService.findOne(params.id);
    }

    @Post()
    async createUser(@Body() user: User) {
        this.usersService.createUser(user);
    }


    @Put()
    async updateUser(@Body() user: User): Promise<[number, User[]]> {
        return this.usersService.updateUser(user);
    }

    @Delete(':id')
    async deleteUser(@Param() params) {
        this.usersService.deleteUser(params.id);
    }
}