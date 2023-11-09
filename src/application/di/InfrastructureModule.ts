import { Global, Module } from '@nestjs/common';
import config from '../../infrastructure/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['env/local.app.env'],
      load: config,
      cache: true,
      expandVariables: true,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('DB_HOST'),
        port: configService.getOrThrow('DB_PORT'),
        database: configService.getOrThrow('DB_NAME'),
        username: configService.getOrThrow('DB_USERNAME'),
        password: configService.getOrThrow('DB_PASSWORD'),
        autoLoadEntities: configService.getOrThrow('DB_AUTOLOAD'),
        synchronize: configService.getOrThrow('DB_SYNCHRONIZE'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class InfrastructureModule {}
