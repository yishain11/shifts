import { Module } from '@nestjs/common';
import { ShiftService } from './shiftService/shift.service';
import { ShiftController } from './shift-controller/shift-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shifts } from 'src/entities/Shifts.entity';
import { UserService } from 'src/users/user-service/user-service.service';
import { Users } from 'src/entities/Users.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shifts]),
    TypeOrmModule.forFeature([Users]),
  ],
  providers: [ShiftService, UserService],
  controllers: [ShiftController],
})
export class ShiftsModule {}
