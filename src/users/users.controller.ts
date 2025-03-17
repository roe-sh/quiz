import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service'; 
import { User } from './user.entity';
import { UpdateUserDto } from 'src/modules/auth/dto/UpdateUser.dto'; 

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: Partial<User>) {
    return this.usersService.create(data);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

//   @Put(':id')
//   async update(@Param('id') id: number, @Body() data: UpdateUserDto) {
//     return this.usersService.update(id, data);
//   }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}
