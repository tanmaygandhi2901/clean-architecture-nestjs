import { CreateJobPayload } from './type/CreateJob.payload';

export class Job {
  jobTitle: string;
  jobDescription: string;
  employerName: string;
  createdBy?: number;
  createdAt?: string | Date;
  deletedAt?: string | Date;
  editedAt?: string | Date;
  editedBy?: number;
  deletedBy?: number;

  constructor(payload: CreateJobPayload) {
    this.jobTitle = payload.jobTitle;
    this.jobDescription = payload.jobDescription;
    this.employerName = payload.employerName;
    this.createdBy = payload.createdBy;
    this.createdAt = payload.createdAt || new Date();
    this.deletedAt = null;
    this.editedAt = null;
    this.editedBy = null;
    this.deletedBy = null;
  }

  public static async new(payload: CreateJobPayload): Promise<Job> {
    return new Job(payload);
  }
}
