import { IsNotEmpty, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  otp: string;

  @IsNotEmpty()
  @MinLength(6)
  newPassword: string;
}
