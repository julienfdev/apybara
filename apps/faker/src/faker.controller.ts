import { Controller } from '@nestjs/common';
import { FakerService } from './faker.service';
import { MessagePattern } from '@nestjs/microservices';
import { Capybara } from 'lib/capybara.interface';

@Controller()
export class FakerController {
  constructor(private readonly fakerService: FakerService) {}

  @MessagePattern('get-capybaras')
  getHello(): Capybara[] {
    return this.fakerService.getCapybaras();
  }
}
