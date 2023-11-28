import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { fakerMicroserviceOptions } from 'lib/queues/faker.queue';
@Module({
  imports: [
    ClientsModule.register({
      clients: [
        {
          name: 'FAKER_SERVICE',
          transport: Transport.RMQ,
          options: fakerMicroserviceOptions.options,
        },
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
