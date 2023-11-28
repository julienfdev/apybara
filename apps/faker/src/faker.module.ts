import { Module } from '@nestjs/common';
import { FakerController } from './faker.controller';
import { FakerService } from './faker.service';

@Module({
  imports: [],
  controllers: [FakerController],
  providers: [FakerService],
})
export class FakerModule {}
