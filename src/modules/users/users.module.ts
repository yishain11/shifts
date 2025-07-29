import { Module } from '@nestjs/common';
import { UserService } from './user-service/user-service.service';
import { UserController } from './user-conteroller/user-conteroller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users.entity';
import { AuthService } from '../auth/auth-service/auth-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService, AuthService],
  exports: [UserService],
})
export class UsersModule {}
