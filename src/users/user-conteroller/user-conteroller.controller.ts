import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user-service/user-service.service';

@Controller('users')
export class UserController {
  constructor(private US: UserService) {}

  @Get()
  showUsers(): object[] {
    return [];
  }

  @Post('/insert')
  insertUser(@Body() body) {
    console.log('body', body);
    return this.US.createUser(body);
  }
}
