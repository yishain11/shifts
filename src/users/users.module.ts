import { Module } from '@nestjs/common';
import { UserService } from './user-service/user-service.service';
import { UserController } from './user-conteroller/user-conteroller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
