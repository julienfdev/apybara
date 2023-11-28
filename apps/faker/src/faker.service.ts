import { fakerFR as faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { Capybara } from 'lib/capybara.interface';

@Injectable()
export class FakerService {
  getCapybaras(): Capybara[] {
    return faker.helpers.multiple(this.generateCapybara, {
      count: 10,
    });
  }

  private generateCapybara(): Capybara {
    return {
      id: faker.number.int({
        min: 1,
        max: 1000,
      }),
      name: faker.person.fullName(),
      age: faker.number.int({
        min: 1,
        max: 30,
      }),
    };
  }
}
