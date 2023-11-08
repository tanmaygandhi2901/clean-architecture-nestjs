import { CreateJobPort } from 'src/core/domain/job/port/usecase/CreateJobPort';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';

@Exclude()
export class CreateJobAdapter implements CreateJobPort {
  @Expose()
  @IsString()
  public jobTitle: string;

  @Expose()
  @IsString()
  public jobDescription: string;

  @Expose()
  @IsString()
  public employerName: string;

  @Expose()
  @IsNumber()
  public createdBy: number;

  @Expose()
  @IsString()
  public createdAt: string;

  public static async new(payload: CreateJobPort): Promise<CreateJobAdapter> {
    const adapter: CreateJobAdapter = plainToInstance(
      CreateJobAdapter,
      payload,
    );
    return adapter;
  }
}
