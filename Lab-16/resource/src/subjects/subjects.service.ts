/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { Subject } from './entities/subject.entity';
import { UpdateDepartmentDto } from 'src/departments/dto/update-department.dto';

@Injectable()
export class SubjectsService {

  private subjects: Subject[] = [
    {id: 1,name: 'BEWT',credit: 5},
    {id: 2,name: 'DBMS',credit: 4},
  ];

  findAll(): Subject[] {
    return this.subjects
  } 

  findOne(id: number): Subject {
    const sub = this.subjects.find(s => s.id === id)
    if(!sub) throw new NotFoundException('Subject not found')
    return sub
  }

  create(dto: CreateSubjectDto): Subject {
    const newSub: Subject = {
      id: this.subjects.length + 1,
      ...dto,
    }
    this.subjects.push(newSub)
    return newSub
  }

  update(id: number, dto: UpdateDepartmentDto): Subject {
    const index = this.subjects.findIndex(s => s.id === id)
    if(index === -1) throw new NotFoundException('Subject not found')
    this.subjects[index] = {...this.subjects[index],...dto}
    return this.subjects[index]
  }

  remove(id: number): string {
    const index = this.subjects.findIndex(s => s.id === id)
    if(index === -1) throw new NotFoundException('Subject not found')
    this.subjects.splice(index,1)
    return `Subject ${id} deleted`
  }
} 
