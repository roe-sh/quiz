import { Controller, Post, Body, Get, Put, Param, Delete } from '@nestjs/common';
import { OptionsService } from './options.service';
import { Option } from './option.entity';
import { UpdateOptionDto } from './dto/UpdateOption.dto';
import { CreateOptionDto } from './dto/CreateOption.dto';

@Controller('options')
export class OptionsController {
  constructor(private readonly optionsService: OptionsService) {}

  @Post()
  create(@Body() data: CreateOptionDto) {
    return this.optionsService.create(data);
  }

  @Get()
  findAll() {
    return this.optionsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateOptionDto) {
    return this.optionsService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.optionsService.delete(id);
  }
}
