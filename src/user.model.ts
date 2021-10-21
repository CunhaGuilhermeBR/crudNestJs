import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING(60),
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;

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