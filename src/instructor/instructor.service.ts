import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Instructor, InstructorDocument } from 'src/schema/instructor.schema';
import { InstructorDTO } from './instructor.dto';

@Injectable()
export class InstructorService {
  constructor(@InjectModel('Instructor') private readonly instructorModel: Model<InstructorDocument>) {}

  async findAll(): Promise<Instructor[]> {
    return this.instructorModel.find().exec();
  }

  async findById(id: string): Promise<Instructor> {
    return this.instructorModel.findById(id).exec();
  }
}
