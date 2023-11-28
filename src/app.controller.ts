import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Capybara } from './interfaces/capybara.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCapybaras(): Capybara[] {
    return this.appService.getCapybaras();
  }
}
