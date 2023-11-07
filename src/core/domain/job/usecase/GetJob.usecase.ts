import { UseCase } from 'src/core/common/usecase/UseCase';
import { GetJobPort } from '../port/usecase/GetJobPort';
import { JobUseCaseDto } from './dto/JobUseCase.dto';

export interface GetJobUseCase extends UseCase<GetJobPort, JobUseCaseDto> {}
