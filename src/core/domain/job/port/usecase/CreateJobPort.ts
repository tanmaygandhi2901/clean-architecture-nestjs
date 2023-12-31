export interface CreateJobPort {
  jobTitle: string;
  jobDescription: string;
  employerName: string;
  createdBy: number;
  createdAt?: string | Date;
}
