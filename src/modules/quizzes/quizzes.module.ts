import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './quiz.entity';
import { QuizService } from './services/quiz/quiz.service'; 
import { QuizController } from './controllers/quiz/quiz.controller'; 

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizzesModule {}
