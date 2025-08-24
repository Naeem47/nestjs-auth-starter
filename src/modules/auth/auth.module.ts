import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { jwtConfig } from 'src/config/jwt.config';
import { UserModule } from '../user/user.module';
import { JwtService } from './jwt.service';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => jwtConfig(configService),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtService],
})
export class AuthModule { }
