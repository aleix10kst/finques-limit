import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ load: [] })],
  exports: [ConfigModule],
})
export class ConfigurationModule {}
