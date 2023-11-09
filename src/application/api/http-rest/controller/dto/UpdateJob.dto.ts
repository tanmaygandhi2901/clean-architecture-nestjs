export interface UpdateJobDto {
  id: number;
  jobTitle: string;
  jobDescription: string;
  employerName: string;
  createdBy?: number;
  editedBy: number;
}
