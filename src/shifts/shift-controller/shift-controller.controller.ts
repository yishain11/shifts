import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShiftService } from '../shiftService/shift.service';
import { ShiftReqBody } from 'src/types/shifts.types';

@Controller('shifts')
export class ShiftController {
  constructor(private readonly shiftS: ShiftService) {}

  @Get('/all-shifts')
  async getAllShifts(): Promise<object[]> {
    const res = await this.shiftS.getAll();
    console.log('res', res);
    return [{}];
  }

  @Get('/:name')
  async getShiftByName(@Param('name') name: string) {
    return await this.shiftS.getShiftBySoldierName(name);
  }

  @Post('/create-shift')
  async createNewShift(@Body() body: ShiftReqBody) {
    return this.shiftS.assignShift(body);
  }
}
