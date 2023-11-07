import { Job } from 'src/core/domain/job/entity/Job.entity';
import { JobRepositoryPort } from 'src/core/domain/job/port/persistence/JobRepository';
import { GetJobPort } from 'src/core/domain/job/port/usecase/GetJobPort';
import { Injectable } from '@nestjs/common';
import { GetJobUseCase } from 'src/core/domain/job/usecase/GetJob.usecase';
import { JobUseCaseDto } from 'src/core/domain/job/usecase/dto/JobUseCase.dto';

@Injectable()
export class GetJobService implements GetJobUseCase {
  constructor(private readonly jobRepository: JobRepositoryPort) {}

  public async execute(payload: GetJobPort): Promise<JobUseCaseDto> {
    const res: Job = await this.jobRepository.getJob(payload.id);

    return JobUseCaseDto.newFromJob(res);
  }
}
