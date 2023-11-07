export interface UpdateJobPort {
  id: number;
  jobTitle: string;
  jobDescription: string;
  employerName: string;
  editedBy: number;
  editedAt?: string | Date;
}
