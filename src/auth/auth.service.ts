import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/user/models/user.model';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async login(userDetails: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = userDetails;

    const user = await this.userModel.findOne({ where: { email: email } });

    if (!user) {
      return null;
    }

    const isPasswordMatched = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatched) {
      return null;
    } else {
      const accessToken = this.jwtService.sign({ user: user, sub: user.id });
      return { accessToken };
    }
  }
}
