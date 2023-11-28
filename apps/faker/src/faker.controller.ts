import { Controller, Get } from '@nestjs/common';
import { FakerService } from './faker.service';

@Controller()
export class FakerController {
  constructor(private readonly fakerService: FakerService) {}

  @Get()
  getHello(): string {
    return this.fakerService.getHello();
  }
}
