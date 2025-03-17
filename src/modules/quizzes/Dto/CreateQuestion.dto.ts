import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  question_text: string;

  @IsEnum(['multiple_choice', 'true_false'])
  question_type: 'multiple_choice' | 'true_false';

  @IsNumber()
  quiz_id: number;
}
