import { InjectRepository } from '@nestjs/typeorm';
import { Job } from 'src/core/domain/job/entity/Job.entity';
import { JobRepositoryPort } from 'src/core/domain/job/port/persistence/JobRepository';
import { DeepPartial, Entity, EntityManager, Repository } from 'typeorm';
import { JobEntity } from '../../entity/job/JobEntity.typeorm';

@Entity()
export class JobRepositoryAdapterTypeOrm
  extends Repository<JobEntity>
  implements JobRepositoryPort
{
  constructor(
    @InjectRepository(JobEntity)
    private readonly jobRepository: Repository<JobEntity>,
    private readonly entityManager: EntityManager,
  ) {
    super(JobEntity, entityManager);
  }

  public async createJob(job: Job): Promise<Job> {
    const jobData: DeepPartial<JobEntity> = {
      jobTitle: job.jobTitle,
      jobDescription: job.jobDescription,
      createdBy: job.createdBy,
      employerName: job.employerName,
    };

    const jobRes = await this.jobRepository.create(jobData);
    await this.entityManager.save(jobRes);

    return jobRes;
  }

  public async getJob(id: number): Promise<Job> {
    const jobRes = await this.jobRepository.findOne({ where: { id: id } });
    return jobRes;
  }

  public async updateJob(id: number, data?: Job): Promise<Job> {
    const jobRes = await this.jobRepository.findOneBy({ id });

    if (jobRes) {
      if (data) {
        jobRes.jobTitle = data.jobTitle ? data.jobTitle : jobRes.jobTitle;
        jobRes.jobDescription = data.jobDescription;
        jobRes.createdBy = data.createdBy ? data.createdBy : jobRes.createdBy;
        jobRes.createdAt = data.createdAt ? data.createdAt : jobRes.createdAt;
        jobRes.deletedAt = data.deletedAt ? data.deletedAt : jobRes.deletedAt;
        jobRes.deletedBy = data.deletedBy ? data.deletedBy : jobRes.deletedBy;
        jobRes.editedAt = data.editedAt ? data.editedAt : jobRes.editedAt;
        jobRes.editedBy = data.editedBy ? data.editedBy : jobRes.editedBy;
        jobRes.employerName = data.employerName
          ? data.employerName
          : jobRes.employerName;
      }

      await this.entityManager.save(jobRes);

      return jobRes;
    }
  }

  public async deleteJob(id: number): Promise<void> {
    const jobRes = await this.jobRepository.delete({ id: id });
    await this.entityManager.save(jobRes);
  }
}
