import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOptionDto {
  @IsString()
  @IsNotEmpty()
  option_text: string;

  @IsBoolean()
  is_correct: boolean;

  @IsNumber()
  question_id: number;
}
