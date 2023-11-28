import { Injectable } from '@nestjs/common';

@Injectable()
export class FakerService {
  getHello(): string {
    return 'Hello World!';
  }
}
