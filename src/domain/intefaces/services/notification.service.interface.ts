import { NotificationDto } from '../../models';

export interface INotificationService {
  sendNotification(dto: NotificationDto): Promise<void>;
}
