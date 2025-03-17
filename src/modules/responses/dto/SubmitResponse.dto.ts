import { IsNumber } from 'class-validator';

export class SubmitResponseDto {
  @IsNumber()
  user_id: number;

  @IsNumber()
  quiz_id: number;

  @IsNumber()
  question_id: number;

  @IsNumber()
  selected_option_id: number;
}
