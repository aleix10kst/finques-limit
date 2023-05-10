import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
  DATABASE_URL:
    process.env.NODE_ENV === 'development'
      ? 'postgres://postgres:postgres@localhost:5432/postgres'
      : '',
}));
