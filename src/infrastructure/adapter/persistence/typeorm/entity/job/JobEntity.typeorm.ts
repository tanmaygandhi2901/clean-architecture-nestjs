import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('job')
export class JobEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jobTitle: string;

  @Column()
  jobDescription: string;

  @Column()
  employerName: string;

  @Column()
  createdBy: number;

  @Column()
  createdAt: string | Date;

  @Column()
  deletedAt: string | Date;

  @Column()
  editedAt: string | Date;

  @Column()
  editedBy: number;

  @Column()
  deletedBy: number;

  constructor(job: Partial<JobEntity>) {
    Object.assign(this, job);
  }
}
