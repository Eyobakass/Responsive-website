import { Schema, Document } from 'mongoose';

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

// Create an interface for the Instructor document
export interface RatedProject {
  studentName: string;
  projectName: string;
  rating: number;
  category: 'beginner' | 'intermediate' | 'advanced';
}

export interface Instructor extends Document {
  firstName: string;
  lastName: string;
  password: string;
  ratedProjects: RatedProject[];
  isGivingCourse: boolean;
}

export { InstructorSchema };
