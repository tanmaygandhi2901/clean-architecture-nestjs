import { Module } from '@nestjs/common';
import { JobModule } from './JobModule';
import { InfrastructureModule } from './InfrastructureModule';

@Module({
  imports: [InfrastructureModule, JobModule],
})
export class RootModule {}
