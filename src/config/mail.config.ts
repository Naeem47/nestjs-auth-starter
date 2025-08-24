import { ConfigService } from '@nestjs/config';

export const mailConfig = (configService: ConfigService) => ({
  host: configService.get<string>('MAIL_HOST', 'smtp.gmail.com'),
  port: configService.get<number>('MAIL_PORT', 587),
  secure: false, 
  auth: {
    user: configService.get<string>('MAIL_USER'),
    pass: configService.get<string>('MAIL_PASS'),
  },
  from: configService.get<string>('MAIL_FROM', 'My App <no-reply@myapp.com>'),
});
