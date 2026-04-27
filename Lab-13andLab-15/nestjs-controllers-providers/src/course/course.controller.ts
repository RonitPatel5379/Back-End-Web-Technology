/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseService.findOne(id);
  }

  @Post()
  insert(@Body() data: any) {
    return this.courseService.insert(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.courseService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.courseService.delete(id);
  }
}
