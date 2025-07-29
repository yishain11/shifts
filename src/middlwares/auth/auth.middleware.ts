import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'src/modules/auth/auth-service/auth-service.service';
import { UserService } from 'src/modules/users/user-service/user-service.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly US: UserService,
    private readonly AS: AuthService,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('authenticating...');
    const { username, password } = req.body;
    console.log(`got: username: ${username}, password: ${password}`);
    if (!username || !password) {
      console.log('missing username or password');
      return 'missing username or password';
    }
    const storedUser = await this.US.getUserByName(username);
    if (storedUser) {
      const storedPassword = storedUser[0].password;
      const results = await this.AS.validate(storedPassword, password);
      console.log('validate res: ', results);

      if (results) {
        next();
        return;
      } else {
        res.status(403).end('error in validation');
        return;
      }
    }
    res.status(403).end('error in validation');
    return;
  }
}
