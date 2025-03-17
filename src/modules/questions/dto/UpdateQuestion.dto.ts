import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateQuestionDto {
  @IsOptional()
  @IsString()
  question_text?: string;

  @IsOptional()
  @IsEnum(['multiple_choice', 'true_false'])
  question_type?: 'multiple_choice' | 'true_false';

  @IsOptional()
  @IsNumber()
  quiz_id?: number;
}
