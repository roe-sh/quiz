import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { QuizService } from '../../services/quiz/quiz.service'; 
import { Quiz } from '../../quiz.entity'; 

@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  create(@Body() data: Partial<Quiz>) {
    return this.quizService.create(data);
  }
  

  @Get()
  findAll() {
    return this.quizService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.quizService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: Partial<Quiz>) {
    return this.quizService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.quizService.delete(id);
  }
}
