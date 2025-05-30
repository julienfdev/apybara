import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Capybara } from 'lib/capybara.interface';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCapybaras(): Observable<Capybara[]> {
    return this.appService.getCapybaras();
  }
}
