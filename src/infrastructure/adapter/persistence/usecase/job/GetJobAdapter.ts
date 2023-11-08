import { GetJobPort } from 'src/core/domain/job/port/usecase/GetJobPort';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsNumber } from 'class-validator';

@Exclude()
export class GetJobAdapter implements GetJobPort {
  @Expose()
  @IsNumber()
  public id: number;

  public static async new(payload: GetJobPort): Promise<GetJobAdapter> {
    const adapter: GetJobAdapter = plainToInstance(GetJobAdapter, payload);
    return adapter;
  }
}
