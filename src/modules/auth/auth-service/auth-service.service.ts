import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  private readonly saltRounds = 10;
  async validate(storedPasword, password) {
    console.log('validating: ', storedPasword, password);

    try {
      if (await bcrypt.compare(password, storedPasword)) {
        return true;
      }
      return false;
    } catch (error) {
      console.log('error in validate: ', error);
      return error;
    }
  }

  async genPassword(password: string): Promise<string> {
    try {
      const hashed = await bcrypt.hash(password, this.saltRounds);
      return hashed;
    } catch (error) {
      console.log('error in hashing: ', error);
      return 'no hash';
    }
  }

  async validateAndGenToken(username, password) {
    try {
      const res = await this.validate(username, password);
      console.log('validation res in token validation: ', res);

      if (res) {
        const payload = { username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      } else {
        return false;
      }
    } catch (error) {
      console.log(error, 'in validate with token');
      return false;
    }
  }
}
