import { registerAs } from '@nestjs/config';

export const DATABASE_CONFIG = registerAs('APP', () => {
  return {
    HOST: process.env['DB_HOST'],
    PORT: process.env['DB_PORT'],
    NAME: process.env['DB_NAME'],
    USERNAME: process.env['DB_USERNAME'],
    PASSWORD: process.env['DB_PASSWORD'],
    SYNCHRONIZE: process.env['DB_SYNCHRONIZE'],
    AUTO_LOAD_ENTITIES: process.env['DB_AUTOLOAD'],
  };
});
