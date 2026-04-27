/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentsService {

  private departments: Department[] = [
    {id: 1,name: 'Computer', head: 'Dr. Mehta'},
    {id: 2,name: 'Mechanical', head: 'Dr. Patel'},
  ];

  findAll(): Department[] {
    return this.departments
  }

  findOne(id: number): Department {
    const dept = this.departments.find(d => d.id === id)
    if(!dept) throw new NotFoundException('Department not found')
    return dept
  }

  create(dto: CreateDepartmentDto): Department {
    const newDept: Department = {
      id: this.departments.length + 1,
      ...dto,
    }
    this.departments.push(newDept)
    return newDept
  }

  update(id: number, dto: UpdateDepartmentDto): Department {
    const index = this.departments.findIndex(d => d.id === id)
    if(index === -1) throw new NotFoundException('Department not found')
    this.departments[index] = {...this.departments[index], ...dto}
    return this.departments[index]
  }

  remove(id: number): string {
    const index = this.departments.findIndex(d => d.id === id)
    if(index === -1) throw new NotFoundException('Department not found')
    this.departments.splice(index,1)
    return `Department ${id} deleted`
  } 
}
