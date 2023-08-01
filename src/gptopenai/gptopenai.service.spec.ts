import { Test, TestingModule } from '@nestjs/testing';
import { GptopenaiService } from './gptopenai.service';

describe('GptopenaiService', () => {
  let service: GptopenaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GptopenaiService],
    }).compile();

    service = module.get<GptopenaiService>(GptopenaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
