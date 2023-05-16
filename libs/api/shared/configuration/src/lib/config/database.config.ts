import { registerAs } from '@nestjs/config';

export const databaseConfig = registerAs('database', () => ({
  DATABASE_URL: process.env['DATABASE_URL'],
}));
