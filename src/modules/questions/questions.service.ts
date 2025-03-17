import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/UpdateQuestion.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepo: Repository<Question>,
  ) {}

  create(data: CreateQuestionDto) {
    const q = this.questionRepo.create(data);
    return this.questionRepo.save(q);
  }

  findAll() {
    return this.questionRepo.find({ relations: ['quiz'] });
  }

  findOne(id: number) {
    return this.questionRepo.findOne({ where: { id }, relations: ['quiz'] });
  }

  async update(id: number, data: UpdateQuestionDto) {
    await this.questionRepo.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.questionRepo.delete(id);
    return { message: `Question with ID ${id} deleted.` };
  }
}
