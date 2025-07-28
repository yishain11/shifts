import { Test, TestingModule } from '@nestjs/testing';
import { FnsServiceService } from './fns-service.service';

describe('FnsServiceService', () => {
  let service: FnsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FnsServiceService],
    }).compile();

    service = module.get<FnsServiceService>(FnsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
