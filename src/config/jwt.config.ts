import { ConfigService } from '@nestjs/config';

export const jwtConfig = (configService: ConfigService) => ({
    secret: configService.get<string>('JWT_SECRET', 'supersecretkey123'),
    signOptions: {
        expiresIn: configService.get<string>('JWT_EXPIRES_IN', '15m'),
    },
    refreshSecret: configService.get<string>('JWT_REFRESH_SECRET', 'refreshsecretkey456'),
    refreshExpiresIn: configService.get<string>('JWT_REFRESH_EXPIRES_IN', '7d'),
});
