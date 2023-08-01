import { Test, TestingModule } from '@nestjs/testing';
import { GptopenaiController } from './gptopenai.controller';

describe('GptopenaiController', () => {
  let controller: GptopenaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GptopenaiController],
    }).compile();

    controller = module.get<GptopenaiController>(GptopenaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
