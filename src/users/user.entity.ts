import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import { IsUniqueEmail } from "./is-user-email-unique.validator";

export class User{

    id: number;
    
    @Expose({name:'name'})
    @IsNotEmpty({message: "Nome é obrigatório!"})
    @IsString()
    name: string;

    @Expose({ name:'email'})
    @IsUniqueEmail({message:"Email já cadastrado no sistema!"})
    @IsNotEmpty({message: "Email é obrigatório!"})
    @IsEmail({},{message: 'Digite um endereço de email válido.'})
    email: string;

    @Expose({name:'password' })
    @Exclude({toPlainOnly: true})
    @IsNotEmpty({message:"Senha é obrigatório!"})
    password:string;

    @Expose({name:'phone'})
    @IsNotEmpty({message: "Telefone é obrigatório!"})
    phone: number;
    
}