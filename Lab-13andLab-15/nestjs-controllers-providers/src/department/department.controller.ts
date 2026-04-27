/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Post()
  insert(@Body() data: any) {
    return this.departmentService.insert(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.departmentService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.departmentService.delete(id);
  }
}
