import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from '../../common/types/jwt-payload.type';

@Injectable()
export class JwtService {
    private readonly secret: string;
    private readonly expiresIn: string;

    constructor(private readonly configService: ConfigService) {
        this.secret = this.configService.get<string>('JWT_SECRET', 'default_secret');
        this.expiresIn = this.configService.get<string>('JWT_EXPIRES_IN', '15m');
    }

    createToken(payload: JwtPayload): string {
        return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
    }

    validateToken(token: string): JwtPayload {
        try {
            return jwt.verify(token, this.secret) as JwtPayload;
        } catch (err) {
            throw new UnauthorizedException('Invalid or expired token');
        }
    }
}
