import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ServerConfig } from 'src/config/server.config';
import { User } from 'src/user/models/user.model';
import { UserService } from 'src/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: ServerConfig.JWT_SECRET,
    });
  }

  async validate(payload: { sub: string }): Promise<User | null> {
    return this.userService.getUserById(payload.sub);
  }
}
