import { Job } from 'src/core/domain/job/entity/Job.entity';
import { JobRepositoryPort } from 'src/core/domain/job/port/persistence/JobRepository';
import { UpdateJobPort } from 'src/core/domain/job/port/usecase/UpdateJobPort';
import { Injectable } from '@nestjs/common';
import { UpdateJobUseCase } from 'src/core/domain/job/usecase/UpdateJob.usecase';
import { JobUseCaseDto } from 'src/core/domain/job/usecase/dto/JobUseCase.dto';

@Injectable()
export class UpdateJobService implements UpdateJobUseCase {
  constructor(private readonly jobRepository: JobRepositoryPort) {}

  public async execute(payload: UpdateJobPort): Promise<JobUseCaseDto> {
    const res: Job = await this.jobRepository.updateJob(payload.id, payload);

    return JobUseCaseDto.newFromJob(res);
  }
}
