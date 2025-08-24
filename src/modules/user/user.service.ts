import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) { }


  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.repository.create(createUserDto);
    return await this.repository.save(user);
  }


  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }


  async findOne(id: string): Promise<User> {
    const user = await this.repository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }
  async findOneByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ where: { email: email } });
    if (!user) {
      throw new NotFoundException(`User with ${email} not found`);
    }
    return user;
  }


  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    Object.assign(user, updateUserDto);
    return await this.repository.save(user);
  }


  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return { deleted: true };
  }
}
