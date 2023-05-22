import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthType } from './auth.types';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { ApiTags } from '@nestjs/swagger';
import { AccessTokenDto } from './dto/access-token.dto';

@ApiTags('auth')
@Auth(AuthType.None)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto): Promise<AccessTokenDto> {
    return this.authService.signIn(signInDto);
  }

  @HttpCode(HttpStatus.OK) // changed since the default is 201
  @Post('refresh-tokens')
  refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto);
  }
}
