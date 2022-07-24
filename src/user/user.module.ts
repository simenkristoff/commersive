import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Password } from './models/password.model';
import {  User } from './models/user.model';
import { UserController } from './user.controller';
import { UsersService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User, Password])],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}