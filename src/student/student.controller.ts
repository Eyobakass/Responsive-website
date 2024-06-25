import { Controller, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDTO } from 'src/student/student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async getAllStudents(): Promise<StudentDTO[]> {
    const students = await this.studentService.findAll();
    return students.map(student => new StudentDTO(student));
  }
}
