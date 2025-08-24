import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({ example: 'john@example.com', description: 'Unique email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'Full name of the user' })
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: 'secret123', minLength: 6, description: 'Password (min 6 characters)' })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
