import { Module } from '@nestjs/common';
import { GptopenaiController } from './gptopenai.controller';
import { GptopenaiService } from './gptopenai.service';

@Module({
  controllers: [GptopenaiController],
  providers: [GptopenaiService]
})
export class GptopenaiModule {}
