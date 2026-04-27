/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentService {
  findAll() {
    return 'Return all departments';
  }
  findOne(id: string) {
    return `Return department ${id}`;
  }
  insert(data: any) {
    return `Insert department ${JSON.stringify(data)}`;
  }
  update(id: string, data: any) {
    return `Update department ${id}`;
  }
  delete(id: string) {
    return `Delete department ${id}`;
  }
}
