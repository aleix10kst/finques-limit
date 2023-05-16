import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { BcryptService } from './services/bcrypt.service';
import { HashingService } from './services/hashing.service';
import { AuthService } from './services/auth.service';
import { jwtConfig } from '@finques-limit/api/shared/configuration';
import { UsersModule } from '@finques-limit/api/users';
import { ConfigModule } from '@nestjs/config';
import { AccessTokenGuard } from './guards/access-token.guard';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  providers: [
    AuthService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AuthenticationModule {}
