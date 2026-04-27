/* eslint-disable prettier/prettier */
import { StudentsService } from './students.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get('hello')
  helloWorld(): string {
    return 'Hello World';
  }

  @Get()
  finAll() {
    return this.studentsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(id)
  }

  @Post()
  insert(@Body() data: any) {
    return this.studentsService.insert(data)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.studentsService.update(id,data)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.studentsService.delete(id)
  }
}