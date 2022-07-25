import { hashSync } from "bcrypt";
import { UUIDV4 } from "sequelize";
import { BeforeCreate, BeforeUpdate, Column, DataType, Default, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./user.model";

@Table
export class Password extends Model {
    @PrimaryKey
    @Default(UUIDV4)
    @Column(DataType.UUID)
    declare id: string
    
    @Column
    hashedPassword: string

    @Default(false)
    @Column
    resetInProgress: boolean

    @Column
    resetCode: string

    @Column(DataType.DATE)
    resetExpires: number

    @Default(true)
    @Column
    isActive: boolean

    @HasOne(() => User, "passwordId")
    user: User

    @BeforeUpdate
    @BeforeCreate
    static hashPassword(instance: Password) {
        const hashedPassword = hashSync(instance.getDataValue("hashedPassword"), 10)
        instance.setDataValue("hashedPassword", hashedPassword)
    }
}
