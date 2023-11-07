export class JobDiTokens {
  public static readonly CreateJobUseCase: unique symbol =
    Symbol('CreateJobUseCase');
  public static readonly GetJobUseCase: unique symbol = Symbol('GetJobUseCase');
  public static readonly UpdateJobUseCase: unique symbol =
    Symbol('UpdateJobUseCase');
  public static readonly DeleteJobUseCase: unique symbol =
    Symbol('DeleteJobUseCase');

  public static readonly JobRepository: unique symbol = Symbol('JobRepository');
}
