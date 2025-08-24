import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';
import * as nodemailer from 'nodemailer';
import { mailConfig } from '../../config/mail.config';

@Module({
  providers: [
    {
      provide: 'MAIL_TRANSPORT',
      useFactory: (configService: ConfigService) => {
        const cfg = mailConfig(configService);
        return nodemailer.createTransport({
          host: cfg.host,
          port: cfg.port,
          secure: cfg.secure,
          auth: cfg.auth,
        });
      },
      inject: [ConfigService],
    },
    MailService,
  ],
  exports: [MailService],
})
export class MailModule {}
