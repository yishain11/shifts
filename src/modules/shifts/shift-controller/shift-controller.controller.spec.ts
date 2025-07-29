import { Test, TestingModule } from '@nestjs/testing';
import { ShiftControllerController } from './shift-controller.controller';

describe('ShiftControllerController', () => {
  let controller: ShiftControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShiftControllerController],
    }).compile();

    controller = module.get<ShiftControllerController>(ShiftControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
