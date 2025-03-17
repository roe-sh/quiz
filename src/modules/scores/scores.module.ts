import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Score } from './score.entity';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { Response } from '../responses/response.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Score, Response])], 
  providers: [ScoresService],
  controllers: [ScoresController],
})
export class ScoresModule {}
