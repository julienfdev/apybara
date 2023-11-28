import { Test, TestingModule } from '@nestjs/testing';
import { FakerController } from './faker.controller';
import { FakerService } from './faker.service';

describe('FakerController', () => {
  let fakerController: FakerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FakerController],
      providers: [FakerService],
    }).compile();

    fakerController = app.get<FakerController>(FakerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fakerController.getHello()).toBe('Hello World!');
    });
  });
});
