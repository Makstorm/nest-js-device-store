import { NotificatioServiceTag } from '@domain';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProvider,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { NotificationService } from './notification.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'NOTIFICATION',
        inject: [ConfigService],
        useFactory: async (config: ConfigService): Promise<ClientProvider> => ({
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${config.getOrThrow('RABBITMQ_HOST')}`,
              `amqp://${config.getOrThrow('RABBITMQ_LOCAL_HOST')}`,
            ],
            queue: config.getOrThrow('RABBITMQ_QUEUE_NAME'),
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]),
  ],
  controllers: [],
  providers: [
    {
      provide: NotificatioServiceTag,
      useClass: NotificationService,
    },
  ],
  exports: [NotificatioServiceTag],
})
export class NotificationModule {}
