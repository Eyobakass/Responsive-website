import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InstructorDocument } from './instructor.model';
import { InstructorDTO } from './instructor.dto';

@Injectable()
export class InstructorService {
  constructor(
    @InjectModel('Instructor') private readonly instructorModel: Model<InstructorDocument>,
  ) {}

  async createInstructor(createInstructorDto: InstructorDTO): Promise<InstructorDocument> {
    const createdInstructor = new this.instructorModel(createInstructorDto);
    return createdInstructor.save();
  }

  async findAll(): Promise<InstructorDocument[]> {
    return this.instructorModel.find().exec();
  }

  async findOne(id: string): Promise<InstructorDocument> {
    const instructor = await this.instructorModel.findById(id).exec();
    if (!instructor) {
      throw new NotFoundException('Instructor not found');
    }
    return instructor;
  }

  async updateInstructor(id: string, updateInstructorDto: InstructorDTO): Promise<InstructorDocument> {
    const updatedInstructor = await this.instructorModel.findByIdAndUpdate(id, updateInstructorDto, { new: true }).exec();
    if (!updatedInstructor) {
      throw new NotFoundException('Instructor not found');
    }
    return updatedInstructor;
  }

  async deleteInstructor(id: string): Promise<void> {
    const result = await this.instructorModel.findByIdAndDelete(id).exec();
    if (result === null) {
      throw new NotFoundException('Instructor not found');
    }
  }
}
