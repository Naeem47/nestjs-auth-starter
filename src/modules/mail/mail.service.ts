import { Inject, Injectable } from '@nestjs/common';
import { Transporter, SendMailOptions } from 'nodemailer';
import { otpTemplate } from './templates/otp.template';
import { resetPasswordTemplate } from './templates/reset-password.template';

@Injectable()
export class MailService {
    constructor(
        @Inject('MAIL_TRANSPORT') private readonly transporter: Transporter,
    ) { }

    async sendMail(to: string, subject: string, html: string, from?: string) {
        const mailOptions: SendMailOptions = {
            to,
            subject,
            html,
            from,
        };
        return this.transporter.sendMail(mailOptions);
    }


    async sendOtpMail(to: string, otp: string, fullName: string) {
        const html = otpTemplate(otp, fullName);
        return this.sendMail(to, 'Your OTP Code', html);
    }

    async sendResetPasswordMail(to: string, resetLink: string, fullName: string) {
        const html = resetPasswordTemplate(resetLink, fullName);
        return this.sendMail(to, 'Reset Your Password', html);
    }
}
