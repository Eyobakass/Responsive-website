import { Schema, Document, model } from 'mongoose';

// Define a schema for ratedProjects
const RatedProjectSchema = new Schema({
  studentName: { type: String, required: true },
  projectName: { type: String, required: true },
  rating: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4, 5],
  },
  category: {
    type: String, 
    required: true,
    enum: ['beginner', 'intermediate', 'advanced'],
  },
});

// Define the main Instructor schema
const InstructorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  ratedProjects: [RatedProjectSchema],
  isGivingCourse: { type: Boolean, required: true },
});

// Create an interface for the RatedProject subdocument
export interface RatedProject {
  studentName: string;
  projectName: string;
  rating: number;
  category: 'beginner' | 'intermediate' | 'advanced';
}

// Create an interface for the Instructor document
export interface Instructor extends Document {
  firstName: string;
  lastName: string;
  password: string;
  ratedProjects: RatedProject[];
  isGivingCourse: boolean;
}

export interface InstructorDocument extends Instructor, Document {}

export const InstructorModel = model<InstructorDocument>('Instructor', InstructorSchema);
