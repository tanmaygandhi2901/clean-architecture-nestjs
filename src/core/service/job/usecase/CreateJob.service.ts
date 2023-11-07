import { Job } from 'src/core/domain/job/entity/Job.entity';
import { JobRepositoryPort } from 'src/core/domain/job/port/persistence/JobRepository';
import { CreateJobPort } from 'src/core/domain/job/port/usecase/CreateJobPort';
import { Injectable } from '@nestjs/common';
import { CreateJobUseCase } from 'src/core/domain/job/usecase/CreateJob.usecase';
import { JobUseCaseDto } from 'src/core/domain/job/usecase/dto/JobUseCase.dto';

@Injectable()
export class CreateJobService implements CreateJobUseCase {
  constructor(private readonly jobRepository: JobRepositoryPort) {}

  public async execute(payload: CreateJobPort): Promise<JobUseCaseDto> {
    const job: Job = await Job.new({
      jobDescription: payload.jobDescription,
      jobTitle: payload.jobTitle,
      createdBy: payload.createdBy,
      employerName: payload.employerName,
    });

    const res: Job = await this.jobRepository.createJob(job);

    return JobUseCaseDto.newFromJob(res);
  }
}
