import { DeleteJobPort } from 'src/core/domain/job/port/usecase/DeleteJobPort';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsNumber } from 'class-validator';

@Exclude()
export class DeleteJobAdapter implements DeleteJobPort {
  @Expose()
  @IsNumber()
  public id: number;

  public static async new(payload: DeleteJobPort): Promise<DeleteJobAdapter> {
    const adapter: DeleteJobAdapter = plainToInstance(
      DeleteJobAdapter,
      payload,
    );
    return adapter;
  }
}
