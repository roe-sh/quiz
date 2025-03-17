import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/UpdateQuestion.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() data: CreateQuestionDto) {
    return this.questionsService.create(data);
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.questionsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateQuestionDto) {
    return this.questionsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.questionsService.delete(id);
  }
}
