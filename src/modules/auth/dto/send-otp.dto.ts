import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class SendOtpDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}
    