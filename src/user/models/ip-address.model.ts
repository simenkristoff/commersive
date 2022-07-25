import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "./user.model";


@Table({
    timestamps: false
})
export class IpAddress extends Model {

    @Column
    ip: string

    @Column(DataType.DATE)
    lastUsed: string

    @BelongsToMany(() => User, () => UserIpAddress)
    users: User[]

}

@Table({
    timestamps: false
})
export class UserIpAddress extends Model {
    @ForeignKey(() => IpAddress)
    @Column
    ipAddressId: number

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId: string
}