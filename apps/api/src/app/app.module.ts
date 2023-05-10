import { Module } from '@nestjs/common';
import { EmployeesModule } from '@finques-limit/api/employees';
import { DatabaseModule } from '@finques-limit/api/shared/database';
import { ConfigurationModule } from '@finques-limit/api/shared/configuration';
import { UsersModule } from '@finques-limit/api/users';

@Module({
  imports: [ConfigurationModule, DatabaseModule, EmployeesModule, UsersModule],
})
export class AppModule {}
