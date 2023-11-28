import { NestFactory } from '@nestjs/core';
import { FakerModule } from './faker.module';

async function bootstrap() {
  const app = await NestFactory.create(FakerModule);
  await app.listen(3000);
}
bootstrap();
