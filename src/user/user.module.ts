import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { IpAddress, UserIpAddress } from './models/ip-address.model';
import { Password } from './models/password.model';
import { SiteVisit } from './models/site-visit.model';
import {  User } from './models/user.model';
import { UserController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User, Password, IpAddress, UserIpAddress, SiteVisit])],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}