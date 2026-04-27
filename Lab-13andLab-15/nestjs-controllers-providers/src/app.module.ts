import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { StudentsService } from './students/students.service';
import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service';
import { CourseModule } from './course/course.module';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';
import { DepartmentModule } from './department/department.module';

@Module({
  imports: [StudentsModule, CourseModule, DepartmentModule],
  controllers: [
    AppController,
    StudentsController,
    CourseController,
    DepartmentController,
  ],
  providers: [AppService, StudentsService, CourseService, DepartmentService],
})
export class AppModule {}
