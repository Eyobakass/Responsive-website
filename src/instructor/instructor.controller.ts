import { Controller, Get } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorDTO } from 'src/instructor/instructor.dto';

@Controller('instructors')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Get()
  async getAllInstructors(): Promise<InstructorDTO[]> {
    const instructors = await this.instructorService.findAll();
    return instructors.map(instructor => new InstructorDTO(instructor));
  }
}
