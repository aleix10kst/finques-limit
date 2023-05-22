import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig = registerAs<TypeOrmModuleOptions>(
  'database',
  () => ({
    type: 'postgres',
    url: process.env['DATABASE_URL'],
    ssl: true,
    autoLoadEntities: true,
    // TODO: Delete once the app is released
    synchronize: true,
    extra: {
      ssl: false,
    },
  })
);
