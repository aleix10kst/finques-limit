import { Module } from '@nestjs/common';
import { EmployeesModule } from '@finques-limit/api/employees';
import { DatabaseModule } from '@finques-limit/api/shared/database';
import { ConfigurationModule } from '@finques-limit/api/shared/configuration';
import { UsersModule } from '@finques-limit/api/users';
import { AuthenticationModule } from '@finques-limit/api/auth';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
    EmployeesModule,
  ],
})
export class AppModule {}
