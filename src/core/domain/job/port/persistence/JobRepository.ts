import { Job } from '../../entity/Job.entity';

export interface JobRepositoryPort {
  getJob(id: number): Promise<Job>;
  createJob(job: Job): Promise<Job>;
  updateJob(id: number, data?: Job): Promise<Job>;
  deleteJob(id: number): Promise<void>;
}
