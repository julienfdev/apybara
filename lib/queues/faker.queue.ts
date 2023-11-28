import { Transport } from '@nestjs/microservices';

export const fakerMicroserviceOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://localhost:5672/'],
    queue: 'faker_queue',
  },
};
