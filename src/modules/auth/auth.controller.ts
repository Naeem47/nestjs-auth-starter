import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto, LoginDto } from './dto';
import { SuccessMessage } from '../../common/decorators/success-message.decorator';
import { ErrorMessage } from '../../common/decorators/error-message.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  @SuccessMessage('User registered successfully')
  @ErrorMessage('Failed to register user')
  async register(@Body() dto: SignupDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @SuccessMessage('Login successful')
  @ErrorMessage('Invalid email or password')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
