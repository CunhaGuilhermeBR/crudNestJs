import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./user.model";

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) {}

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async findOne(id: number): Promise<User> {
        return this.userModel.findByPk(id);
    }

    async createUser(user: User){
        this.userModel.create(user);
    }

    async updateUser(user: User): Promise<[number, User[]]> {
     return this.userModel.update(user, {
         where: {
             id: user.id
         }
     });
    }

    async deleteUser(id: number){
        const user : User = await this.findOne(id);
        user.destroy();
    }
}