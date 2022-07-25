import { UUIDV4 } from "sequelize";
import { BeforeCreate, BelongsTo, BelongsToMany, Column, DataType, Default, ForeignKey, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";
import { IpAddress, UserIpAddress } from "./ip-address.model";
import { Password } from "./password.model";

@Table
export class User extends Model {

    @PrimaryKey
    @Default(UUIDV4)
    @Column(DataType.UUID)
    declare id: string
    @Column
    firstName: string
    @Column
    lastName: string
    @Column
    username: string
    @Column
    email: string


    @Default(false)
    @Column
    emailVerified: boolean

    @ForeignKey(() => Password)
    @Column(DataType.UUID)
    passwordId: string

    @BelongsTo(() => Password, {foreignKey: "passwordId", as: "password"})
    password: Password

    @BelongsToMany(() => IpAddress, () => UserIpAddress)
    ipAddresses: User[]

}