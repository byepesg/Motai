import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(email: string, password: string): Promise<User> {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.repo.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User> {
    return this.repo.findOne({ where: { id } });
  }
}
