import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'john@example.com', description: 'Registered email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'secret123', description: 'User password' })
  @IsNotEmpty()
  password: string;
}
