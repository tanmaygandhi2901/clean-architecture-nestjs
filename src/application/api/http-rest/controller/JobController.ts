import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Inject,
  Param,
} from '@nestjs/common';
import { JobDiTokens } from 'src/core/domain/job/di/JobDIToken';
import { CreateJobUseCase } from 'src/core/domain/job/usecase/CreateJob.usecase';
import { CreateJobAdapter } from 'src/infrastructure/adapter/persistence/usecase/job/CreateJobAdapter';
import { GetJobUseCase } from 'src/core/domain/job/usecase/GetJob.usecase';
import { GetJobAdapter } from 'src/infrastructure/adapter/persistence/usecase/job/GetJobAdapter';
import { DeleteJobUseCase } from 'src/core/domain/job/usecase/DeleteJob.usecase';
import { DeleteJobAdapter } from 'src/infrastructure/adapter/persistence/usecase/job/DeleteJobAdapter';
import { UpdateJobUseCase } from 'src/core/domain/job/usecase/UpdateJob.usecase';
import { UpdateJobAdapter } from 'src/infrastructure/adapter/persistence/usecase/job/UpdateJobAdapter';
import { CreateJobDto } from './dto/CreateJob.dto';
import { UpdateJobDto } from './dto/UpdateJob.dto';

@Controller('job')
export class JobController {
  constructor(
    @Inject(JobDiTokens.CreateJobUseCase)
    private readonly createJobUseCase: CreateJobUseCase,
    @Inject(JobDiTokens.GetJobUseCase)
    private readonly getJobUseCase: GetJobUseCase,
    @Inject(JobDiTokens.DeleteJobUseCase)
    private readonly deleteJobUseCase: DeleteJobUseCase,
    @Inject(JobDiTokens.UpdateJobUseCase)
    private readonly updateJobUseCase: UpdateJobUseCase,
  ) {}

  @Get(':id')
  async getJob(@Param('id') id: number) {
    const adapter: GetJobAdapter = await GetJobAdapter.new({
      id: id,
    });

    return this.getJobUseCase.execute(adapter);
  }

  @Post()
  async createJob(@Body() Body: CreateJobDto) {
    const adapter: CreateJobAdapter = await CreateJobAdapter.new({
      jobDescription: Body.jobDescription,
      jobTitle: Body.jobTitle,
      employerName: Body.employerName,
      createdBy: Body.createdBy,
    });

    return this.createJobUseCase.execute(adapter);
  }

  @Put()
  async updateJob(@Body() body: UpdateJobDto) {
    const adapter: UpdateJobAdapter = await UpdateJobAdapter.new({
      id: body.id,
      jobTitle: body.jobTitle,
      jobDescription: body.jobDescription,
      employerName: body.employerName,
      editedBy: body.editedBy,
    });

    return this.updateJobUseCase.execute(adapter);
  }

  @Delete(':id')
  async deleteJob(@Param('id') id: number) {
    const adapter: DeleteJobAdapter = await DeleteJobAdapter.new({
      id: id,
    });

    return this.deleteJobUseCase.execute(adapter);
  }
}
