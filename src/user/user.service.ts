import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { Password } from './models/password.model';
import { User } from './models/user.model';
import {hashSync} from "bcrypt"

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(
      {
        email: createUserDto.email,
        password: {
          hashedPassword: createUserDto.password,
        },
      },
      { include: [Password] },
    );
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll({ include: ['password'] });
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return this.userModel.findOne({
      where: {
        email: email,
      }, include: ["password"],
    });
  }
}
