import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const fakerMicroserviceOptions: MicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672/'],
    queue: 'faker_queue',
  },
};
