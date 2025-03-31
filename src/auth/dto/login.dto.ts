import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
