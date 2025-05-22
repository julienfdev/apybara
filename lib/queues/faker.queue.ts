import { RmqOptions, Transport } from '@nestjs/microservices';

export const fakerMicroserviceOptions: RmqOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://guest:guest@rabbit:5672/'],
    queue: 'faker_queue',
  },
};
