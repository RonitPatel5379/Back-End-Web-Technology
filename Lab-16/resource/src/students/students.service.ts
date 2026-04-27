import { CreateStudentDto } from './dto/create-student.dto';
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './entities/student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {

  private students: Student[] = [
    {id: 1, name: 'Ronit', age: 19},
    {id: 2, name: 'Amit', age: 30},
  ];

  findAll(): Student[] {
    return this.students
  }

  findOne(id: number): Student {
    const student = this.students.find(s => s.id === id)
    if(!student) throw new NotFoundException('Student not found')
    return student
  }

  create(createStudentDto: CreateStudentDto): Student {
    const newStudent: Student = {
      id: this.students.length + 1,
      ...createStudentDto,
    }
    this.students.push(newStudent)
    return newStudent
  }

  update(id: number,updateStudentDto: UpdateStudentDto): Student {
    const index = this.students.findIndex(s => s.id === id)
    if(index === -1) throw new NotFoundException('Student not found')
    this.students[index] = { ...this.students[index], ...updateStudentDto}
    return this.students[index]
  }

  remove(id: number): string {
    const index = this.students.findIndex(s => s.id === id)
    if (index === -1) throw new NotFoundException('Student not found')
    this.students.splice(index,1)
    return `Student ${id} deleted`
  }
}