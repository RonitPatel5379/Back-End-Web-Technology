/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepo: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentRepo.save(createStudentDto)
  }

  findAll() {
    return this.studentRepo.find()
  } 

  findOne(StudentID: number) {
    return this.studentRepo.findOneBy({StudentID})
  } 

  update(StudentID: number, updateStudentDto: UpdateStudentDto) {
    return this.studentRepo.update(StudentID, updateStudentDto)
  }

  remove(StudentID: number) {
    return this.studentRepo.delete(StudentID)
  }
}
