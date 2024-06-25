import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StudentDocument } from './student.model';
import { StudentDTO } from './student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<StudentDocument>,
  ) {}

  async createStudent(createStudentDto: StudentDTO): Promise<StudentDocument> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async findAll(): Promise<StudentDocument[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id: string): Promise<StudentDocument> {
    const student = await this.studentModel.findById(id).exec();
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }

  async updateStudent(id: string, updateStudentDto: StudentDTO): Promise<StudentDocument> {
    const updatedStudent = await this.studentModel.findByIdAndUpdate(id, updateStudentDto, { new: true }).exec();
    if (!updatedStudent) {
      throw new NotFoundException('Student not found');
    }
    return updatedStudent;
  }

  async deleteStudent(id: string): Promise<void> {
    const result = await this.studentModel.findByIdAndDelete(id).exec();
    if (result === null) {
      throw new NotFoundException('Student not found');
    }
  }
}
