import { Table, Model, ForeignKey, Column, DataType } from "sequelize-typescript";
import { IpAddress } from "./ip-address.model";
import { User } from "./user.model";

@Table({
    timestamps: false
})
export class SiteVisit extends Model {

    @ForeignKey(() => User)
    @Column(DataType.UUID)
    userId: string

    @ForeignKey(() => IpAddress)
    @Column
    ipAddressId: number

    @Column(DataType.DATE)
    visitStart: string

    @Column(DataType.DATE)
    visitEnd: string

    @Column
    referrerUrl: string
}