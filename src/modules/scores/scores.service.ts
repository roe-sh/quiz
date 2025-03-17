import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Score } from './score.entity';
import { Response } from '../responses/response.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score)
    private readonly scoreRepo: Repository<Score>,
    @InjectRepository(Response)
    private readonly responseRepo: Repository<Response>,
  ) {}

  async calculateAndSaveScore(userId: number, quizId: number) {
    const responses = await this.responseRepo.find({
      where: { user: { id: userId }, quiz: { id: quizId } },
      relations: ['selected_option'],
    });

    let correctCount = 0;
    for (const res of responses) {
      if (res.selected_option.is_correct) {
        correctCount++;
      }
    }

    const scoreEntity = this.scoreRepo.create({
      user: { id: userId },
      quiz: { id: quizId },
      score: correctCount,
    });

    return this.scoreRepo.save(scoreEntity);
  }

  findAll() {
    return this.scoreRepo.find({ relations: ['user', 'quiz'] });
  }
}
