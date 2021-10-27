import { Injectable, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./model/user.model";

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) { }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async findOne(id: number): Promise<User> {
        return this.userModel.findByPk(id);
    }

    async createUser(user: User) {
        if (user.email.includes('@') && user.phone > 10000000)
            this.userModel.create(user);
        else
            console.error('Dados inconsistentes.')
    }

    async updateUser(user: User): Promise<[number, User[]]> {
        return this.userModel.update(user, {
            where: {
                id: user.id
            }
        });
    }

    async deleteUser(id: number) {
        const user: User = await this.findOne(id);
        if (user != null)
            user.destroy();
        else
            console.error('Usuário inexistente!')
    }
}