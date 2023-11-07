import { UseCase } from 'src/core/common/usecase/UseCase';
import { DeleteJobPort } from '../port/usecase/DeleteJobPort';

export interface DeleteJobUseCase extends UseCase<DeleteJobPort, void> {}
