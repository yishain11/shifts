import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ShiftService } from './shiftService/shift.service';
import { ShiftController } from './shift-controller/shift-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shifts } from 'src/entities/Shifts.entity';
import { UserService } from 'src/modules/users/user-service/user-service.service';
import { Users } from 'src/entities/Users.entity';
import { AuthService } from '../auth/auth-service/auth-service.service';
import { AuthMiddleware } from 'src/middlwares/auth/auth.middleware';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shifts]),
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [ShiftService, UserService, AuthService],
  controllers: [ShiftController],
})
export class ShiftsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: 'shifts/create-shift',
      method: RequestMethod.POST,
    });
  }
}
