export class SubmittedProjectDTO {
    readonly projectName: string;
    readonly rating: number;
  
    constructor(project: { projectName: string; rating: number }) {
      this.projectName = project.projectName;
      this.rating = project.rating;
    }
  }
  
  export class StudentDTO {
    readonly firstName: string;
    readonly secondName: string;
    readonly studentId: string;
    readonly submittedProjects: SubmittedProjectDTO[];
    readonly ratedProjects: string[]; // Assuming these are IDs of rated projects
  
    constructor(student: any) {
      this.firstName = student.firstName;
      this.secondName = student.secondName;
      this.studentId = student.studentId;
      this.submittedProjects = student.submittedProjects.map((project: any) => new SubmittedProjectDTO(project));
      this.ratedProjects = student.ratedProjects.map((projectId: any) => projectId.toString());
    }
  }
  