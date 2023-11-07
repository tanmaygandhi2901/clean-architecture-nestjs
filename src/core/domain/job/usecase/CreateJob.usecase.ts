import { UseCase } from 'src/core/common/usecase/UseCase';
import { CreateJobPort } from '../port/usecase/CreateJobPort';
import { JobUseCaseDto } from './dto/JobUseCase.dto';

export interface CreateJobUseCase
  extends UseCase<CreateJobPort, JobUseCaseDto> {}
