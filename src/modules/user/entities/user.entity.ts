import {
  Entity,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BaseEntity } from '../../../common/entities/base.entity';
import { UserRole } from './user-role.enum';

@Entity('users')
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  fullName: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  otp?: string;

  @Column({ nullable: true })
  otpExpiry?: Date;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ default: true })
  isActive: boolean;


}
