/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  findAll() {
    return 'Return all courses';
  }
  findOne(id: string) {
    return `Return course ${id}`;
  }
  insert(data: any) {
    return `Insert course ${JSON.stringify(data)}`;
  }
  update(id: string, data: any) {
    return `Update Course ${id}`;
  }
  delete(id: string) {
    return `Delete course ${id}`;
  }
}