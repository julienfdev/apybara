import { Inject, Injectable } from '@nestjs/common';
import { Capybara } from '../../../lib/capybara.interface';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('FAKER_SERVICE')
    private readonly fakerProxy: ClientProxy,
  ) {}

  getCapybaras(): Observable<Capybara[]> {
    return this.fakerProxy.send<Capybara[]>('get-capybaras', {});
  }
}
