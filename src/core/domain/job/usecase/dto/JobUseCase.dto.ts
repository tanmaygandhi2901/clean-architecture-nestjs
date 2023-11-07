import { Job } from '../../entity/Job.entity';
import { Exclude, Expose, plainToClass } from 'class-transformer';

@Exclude()
export class JobUseCaseDto {
  @Expose()
  public jobTitle: string;

  @Expose()
  public jobDescription: string;

  @Expose()
  public employerName: string;

  @Expose()
  public createdBy: number;

  public static newFromJob(job: Job): JobUseCaseDto {
    return plainToClass(JobUseCaseDto, job);
  }

  public static newListFromJobs(jobs: Job[]): JobUseCaseDto[] {
    return jobs.map((job) => this.newFromJob(job));
  }
}
