import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../auth-service/auth-service.service';

@Controller('auth')
export class AuthControllerController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  async login(@Body() body) {
    const validationRes = await this.authService.validateAndGenToken(
      body.username,
      body.password,
    );
    if (validationRes) {
      return validationRes;
    } else {
      return 'error in token generation';
    }
  }
}
