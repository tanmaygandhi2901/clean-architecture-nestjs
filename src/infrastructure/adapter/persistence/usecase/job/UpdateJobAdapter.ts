import { UpdateJobPort } from 'src/core/domain/job/port/usecase/UpdateJobPort';
import { Exclude, Expose, plainToInstance } from 'class-transformer';
import { IsString, IsNumber } from 'class-validator';

@Exclude()
export class UpdateJobAdapter implements UpdateJobPort {
  @Expose()
  @IsNumber()
  editedBy: number;

  @Expose()
  @IsString()
  editedAt?: string | Date;
  @Expose()
  @IsNumber()
  public id: number;

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
  public createdBy?: number;

  @Expose()
  @IsString()
  public createdAt?: string;

  public static async new(payload: UpdateJobPort): Promise<UpdateJobAdapter> {
    const adapter: UpdateJobAdapter = plainToInstance(
      UpdateJobAdapter,
      payload,
    );
    return adapter;
  }
}
