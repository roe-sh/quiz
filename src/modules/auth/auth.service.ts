import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity'; 
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(username: string, email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.userRepo.create({ username, email, password: hashedPassword, role: 'student' });
    return this.userRepo.save(user);
  }

  async login(email: string, password: string) {
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) return { error: 'Invalid credentials' };

    const match = await bcrypt.compare(password, user.password);
    if (!match) return { error: 'Invalid credentials' };

    const token = this.jwtService.sign({ username: user.username, sub: user.id });
    return { access_token: token };
  }
}
