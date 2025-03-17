import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Response } from './response.entity';
import { ResponsesService } from './responses.service';
import { ResponsesController } from './responses.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Response])],
  providers: [ResponsesService],
  controllers: [ResponsesController],
})
export class ResponsesModule {}
