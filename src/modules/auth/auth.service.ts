import { ConflictException, Injectable } from '@nestjs/common';
import { SignupDto, LoginDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '../auth/jwt.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async register(dto: SignupDto): Promise<User> {
    const exixtinguser = await this.userService.findOneByEmail(dto.email);
    if(exixtinguser){
      throw new ConflictException('User with this email already exists');
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = this.userService.create({ ...dto, password: hashedPassword });
    return user;
  }

  async login(dto: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.userService.findOneByEmail(dto.email);
    if (!user) throw new Error('User not found');
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) throw new Error('Invalid credentials');

    const payload = { sub: user.id, email: user.email, role: user.role };
    const accessToken = this.jwtService.createToken(payload);

    return { accessToken };
  }
}
