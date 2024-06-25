export class RatedProjectDTO {
    readonly studentName: string;
    readonly projectName: string;
    readonly rating: number;
    readonly category: 'beginner' | 'intermediate' | 'advanced';
  
    constructor(project: any) {
      this.studentName = project.studentName;
      this.projectName = project.projectName;
      this.rating = project.rating;
      this.category = project.category;
    }
  }
  
  export class InstructorDTO {
    readonly firstName: string;
    readonly lastName: string;
    readonly isGivingCourse: boolean;
    readonly ratedProjects: RatedProjectDTO[];
  
    constructor(instructor: any) {
      this.firstName = instructor.firstName;
      this.lastName = instructor.lastName;
      this.isGivingCourse = instructor.isGivingCourse;
      this.ratedProjects = instructor.ratedProjects.map((project: any) => new RatedProjectDTO(project));
    }
  }
  