import { UseCase } from 'src/core/common/usecase/UseCase';
import { UpdateJobPort } from '../port/usecase/UpdateJobPort';
import { JobUseCaseDto } from './dto/JobUseCase.dto';

export interface UpdateJobUseCase
  extends UseCase<UpdateJobPort, JobUseCaseDto> {}
