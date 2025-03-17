import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from './option.entity';
import { CreateOptionDto } from './dto/CreateOption.dto';
import { UpdateOptionDto } from './dto/UpdateOption.dto';

@Injectable()
export class OptionsService {
  constructor(
    @InjectRepository(Option)
    private readonly optionRepo: Repository<Option>,
  ) {}

  async create(data: CreateOptionDto) {
    const opt = this.optionRepo.create(data);
    return this.optionRepo.save(opt);
  }

  async findAll() {
    return this.optionRepo.find({ relations: ['question'] });
  }

  async update(id: number, data: UpdateOptionDto) {
    const option = await this.optionRepo.findOne({ where: { id } });
    if (!option) throw new NotFoundException('Option not found');
    Object.assign(option, data);
    return this.optionRepo.save(option);
  }

  async delete(id: number) {
    const result = await this.optionRepo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Option not found');
    return { message: 'Option deleted successfully' };
  }
}
