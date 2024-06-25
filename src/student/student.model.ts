import * as mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  projectName: String,
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

export const StudentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  submittedProjects: [ProjectSchema],
  ratedProjects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project', // Reference to another mongoose model if exists
  }],
});

export interface Student extends mongoose.Document {
  firstName: string;
  secondName: string;
  studentId: string;
  submittedProjects: {
    projectName: string;
    rating: number;
  }[];
  ratedProjects: mongoose.Types.ObjectId[];
}

export interface StudentDocument extends Student, mongoose.Document {}

export const StudentModel = mongoose.model<StudentDocument>('Student', StudentSchema);
