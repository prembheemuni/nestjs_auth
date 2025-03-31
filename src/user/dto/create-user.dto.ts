import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsEnum(['male', 'female'], { message: 'Should me male or female' })
  gender: 'male' | 'female';

  @IsNotEmpty()
  @IsEnum(['user', 'admin'], { message: 'should be user or admin' })
  role: 'user' | 'admin';

  @IsNotEmpty()
  @IsNumber()
  @Min(5)
  @Max(99)
  age: number;
}
