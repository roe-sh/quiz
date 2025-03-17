import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response } from './response.entity';

@Injectable()
export class ResponsesService {
  constructor(
    @InjectRepository(Response)
    private readonly responseRepo: Repository<Response>,
  ) {}

  create(data: Partial<Response>) {
    const response = this.responseRepo.create(data);
    return this.responseRepo.save(response);
  }

  findAll() {
    return this.responseRepo.find({ relations: ['user', 'quiz', 'question', 'selected_option'] });
  }
}
