import { NestFactory } from '@nestjs/core';
import { FakerModule } from './faker.module';
import { fakerMicroserviceOptions } from 'lib/queues/faker.queue';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    FakerModule,
    fakerMicroserviceOptions,
  );
  await app.listen();
}
bootstrap();
