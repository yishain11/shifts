import { Test, TestingModule } from '@nestjs/testing';
import { UserConterollerController } from './user-conteroller.controller';

describe('UserConterollerController', () => {
  let controller: UserConterollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserConterollerController],
    }).compile();

    controller = module.get<UserConterollerController>(UserConterollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
