import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    name: String;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: String;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    phone: number;

    @Column({
        type: DataType.DATE,
    })
    birthDate: Date;

}