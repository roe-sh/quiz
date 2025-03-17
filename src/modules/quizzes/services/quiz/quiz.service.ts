import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../../quiz.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepo: Repository<Quiz>,
  ) {}

  create(data: Partial<Quiz>) {
    console.log('Received data:', data); 
    const quiz = this.quizRepo.create(data);
    return this.quizRepo.save(quiz);
  }
  
  

  findAll() {
    return this.quizRepo.find();
  }

  findOne(id: number) {
    return this.quizRepo.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<Quiz>) {
    await this.quizRepo.update(id, data);
    return this.findOne(id);
  }

  delete(id: number) {
    return this.quizRepo.delete(id);
  }
}
