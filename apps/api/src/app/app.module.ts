import { Module } from '@nestjs/common';
import { EmployeesModule } from '@finques-limit/api/employees';
import { DatabaseModule } from '@finques-limit/api/shared/database';
import { ConfigurationModule } from '@finques-limit/api/shared/configuration';
import { UsersModule } from '@finques-limit/api/users';
import { AuthenticationModule } from '@finques-limit/api/auth';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { pojos } from '@automapper/pojos';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    AutomapperModule.forRoot([
      { name: 'classes', strategyInitializer: classes() },
      { name: 'pojos', strategyInitializer: pojos() },
    ]),
    AuthenticationModule,
    UsersModule,
    EmployeesModule,
  ],
})
export class AppModule {}
