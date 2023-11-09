import { JobController } from '../api/http-rest/controller/JobController';
import { JobDiTokens } from '../../core/domain/job/di/JobDIToken';
import { CreateJobService } from '../../core/service/job/usecase/CreateJob.service';
import { DeleteJobService } from '../../core/service/job/usecase/DeleteJob.service';
import { UpdateJobService } from '../../core/service/job/usecase/UpdateJob.service';
import { GetJobService } from '../../core/service/job/usecase/GetJob.service';
import { JobEntity } from '../../infrastructure/adapter/persistence/typeorm/entity/job/JobEntity.typeorm';
import { JobRepositoryAdapterTypeOrm } from '../../infrastructure/adapter/persistence/typeorm/repository/job/JobRepositoryAdapter.typeorm';
import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

const persistenceProviders: Provider[] = [
  {
    provide: JobDiTokens.JobRepository,
    useClass: JobRepositoryAdapterTypeOrm,
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: JobDiTokens.CreateJobUseCase,
    useFactory: (jobRepository) => new CreateJobService(jobRepository),
    inject: [JobDiTokens.JobRepository],
  },
  {
    provide: JobDiTokens.DeleteJobUseCase,
    useFactory: (jobRepository) => new DeleteJobService(jobRepository),
    inject: [JobDiTokens.JobRepository],
  },
  {
    provide: JobDiTokens.UpdateJobUseCase,
    useFactory: (jobRepository) => new UpdateJobService(jobRepository),
    inject: [JobDiTokens.JobRepository],
  },
  {
    provide: JobDiTokens.GetJobUseCase,
    useFactory: (jobRepository) => new GetJobService(jobRepository),
    inject: [JobDiTokens.JobRepository],
  },
];

@Module({
  imports: [TypeOrmModule.forFeature(JobEntity)],
  controllers: [JobController],
  providers: [...persistenceProviders, ...useCaseProviders],
  exports: [JobDiTokens.JobRepository],
})
export class JobModule {}
