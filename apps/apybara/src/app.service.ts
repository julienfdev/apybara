import { Injectable } from '@nestjs/common';
import { Capybara } from './interfaces/capybara.interface';

@Injectable()
export class AppService {
  capybaras: Capybara[] = [];

  getCapybaras(): Capybara[] {
    return this.capybaras;
  }
}
