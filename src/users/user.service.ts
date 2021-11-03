import { Injectable } from "@nestjs/common"
import { User } from "./user.entity"

@Injectable()
export class UserService {

    private users : Array<User> = [{
        id:1,
        name: "Guilherme",
        email:"guilherme@email.com",
        phone:12345678,
        password:"senha123"
    }]

    public create(user: User) {
        this.users.push(user)
        return user
    }

    public getUser(email: string){
        return this.users.find(user => user.email == email);
    }
}
