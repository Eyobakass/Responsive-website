import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema';
import { StudentDTO } from './student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private readonly studentModel: Model<StudentDocument>) {}

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findById(id: string): Promise<Student> {
    return this.studentModel.findById(id).exec();
  }
}
