import { Controller, Post, Body, Get } from '@nestjs/common';
import { ScoresService } from './scores.service';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Post('/submit')
  autoScore(@Body() body: { userId: number; quizId: number }) {
    const { userId, quizId } = body;
    return this.scoresService.calculateAndSaveScore(userId, quizId);
  }

  @Get()
  findAll() {
    return this.scoresService.findAll();
  }
}
