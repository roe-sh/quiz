import { Controller, Post, Body, Get } from '@nestjs/common';
import { ResponsesService } from './responses.service';
import { Response } from './response.entity';

@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @Post()
  create(@Body() data: Partial<Response>) {
    return this.responsesService.create(data);
  }

  @Get()
  findAll() {
    return this.responsesService.findAll();
  }
}
