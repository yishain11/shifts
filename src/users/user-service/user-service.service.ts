import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepo: Repository<Users>,
  ) {}
  async getAll() {
    return await this.userRepo.find();
  }

  async getUserByName(name: string) {
    console.log('finding user by name: ', name);

    return await this.userRepo.findBy({ name });
  }

  async createUser(userData): Promise<string> {
    try {
      const newUser = this.userRepo.create(userData);
      await this.userRepo.save(newUser);
      return 'success in saving new user';
    } catch (err) {
      console.log('error in saving new user!');
      console.log(err);
      return 'error in createing new user';
    }
  }
}
