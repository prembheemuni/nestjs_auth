import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  registerUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Post('login')
  async login(@Body() loginDetails: LoginDto) {
    const response = await this.authService.login(loginDetails);
    if (response === null) {
      throw new UnauthorizedException('Email or Password is incorrect!');
    }

    return response;
  }
}
