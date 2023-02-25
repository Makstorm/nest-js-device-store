import { INotificationService, NotificationDto } from '@domain';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';

export class NotificationService implements INotificationService {
  @Inject(ConfigService) private readonly configService: ConfigService;

  @Inject('NOTIFICATION') private readonly client: ClientProxy;

  public async sendNotification(dto: NotificationDto): Promise<void> {
    this.client.send('send_notification', dto).subscribe();
  }
}
