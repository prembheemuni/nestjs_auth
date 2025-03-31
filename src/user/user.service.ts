import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async createUser(user: CreateUserDto): Promise<User> {
    console.log(user, 'as user');
    return await this.userModel.create({
      ...user,
      password: bcrypt.hashSync(user.password),
    });
  }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.userModel.findOne({ where: { id: id } });
  }
}
