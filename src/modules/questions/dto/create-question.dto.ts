import { IsNotEmpty, IsEnum, IsNumber } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  question_text: string;

  @IsEnum(['multiple_choice', 'true_false'])
  question_type: 'multiple_choice' | 'true_false';

  @IsNumber()
  quizId: number;
}
