import { Injectable } from '@nestjs/common';
import { Shifts } from 'src/entities/Shifts.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShiftData, ShiftReqBody } from 'src/types/shifts.types';
import { UserService } from 'src/users/user-service/user-service.service';
import { UserData } from 'src/types/users.types';

@Injectable()
export class ShiftService {
  constructor(
    @InjectRepository(Shifts)
    private readonly shiftRepo: Repository<Shifts>,
    private readonly userService: UserService,
  ) {}

  async getAll() {
    return await this.shiftRepo.find();
  }

  async assignShift(body: ShiftReqBody) {
    try {
      const users = await this.userService.getUserByName(
        body.assigned_soldier_name,
      );
      if (users && users.length > 0) {
        const id = users[0].id;
        const newShiftData: ShiftData = {
          start_time: body.start_time,
          end_time: body.end_time,
          assigned_soldier: { id },
        };
        const shift = this.shiftRepo.create(newShiftData);
        console.log('shift', shift);

        return this.shiftRepo.save(shift);
      } else {
        return 'no users found';
      }
    } catch (error) {
      console.log('error in assign shift', error);
      return new Error('ERR in assign shift');
    }
  }

  async getShiftBySoldierName(name: string) {
    try {
      const users = await this.userService.getUserByName(name);
      const user: UserData | undefined = users[0];
      console.log('user found: ', user);
      if (user) {
        const userId = user.id;
        return await this.shiftRepo.find({
          where: { assigned_soldier: { id: userId } },
          relations: ['assigned_soldier'],
        });
      }
      return 'no user was found';
    } catch (error) {
      console.log('error in get shift by name');
      console.log(error);
      return error.message;
    }
  }
}
