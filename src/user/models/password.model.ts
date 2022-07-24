import { UUIDV4 } from "sequelize";
import { Column, DataType, Default, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Password extends Model {
    @PrimaryKey
    @Default(UUIDV4)
    @Column(DataType.UUID)
    declare id: string
    
    @Column
    hashedPassword: string
    
    @HasOne(() => User, "passwordId")
    user: User
}
