/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {
  findAll() {
    return 'Return All Students';
  }
  findOne(id: string) {
    return `Return student with studentID:${id}`;
  }
  insert(data: any) {
    return `Insert student ${JSON.stringify(data)}`;
  }
  update(id: string, data: any) {
    return `Update student with studentID:${id}`;
  }
  delete(id: string) {
    return `Delete student with studentID:${id}`;
  }
}
