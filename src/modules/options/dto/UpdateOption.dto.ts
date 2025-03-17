import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateOptionDto {
  @IsOptional()
  @IsString()
  option_text?: string;

  @IsOptional()
  @IsBoolean()
  is_correct?: boolean;

  @IsOptional()
  @IsNumber()
  question_id?: number;
}
