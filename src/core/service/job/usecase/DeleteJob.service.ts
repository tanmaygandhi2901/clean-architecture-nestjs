import { JobRepositoryPort } from 'src/core/domain/job/port/persistence/JobRepository';
import { DeleteJobPort } from 'src/core/domain/job/port/usecase/DeleteJobPort';
import { Injectable } from '@nestjs/common';
import { DeleteJobUseCase } from 'src/core/domain/job/usecase/DeleteJob.usecase';

@Injectable()
export class DeleteJobService implements DeleteJobUseCase {
  constructor(private readonly jobRepository: JobRepositoryPort) {}

  public async execute(payload: DeleteJobPort): Promise<void> {
    await this.jobRepository.deleteJob(payload.id);
  }
}
