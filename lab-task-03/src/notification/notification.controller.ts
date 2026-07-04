import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post('send')
  sendNotification(
    @Body('studentName') studentName: string,
    @Body('message') message: string,
  ) {
    return this.notificationService.sendNotification(studentName, message);
  }

  @Post('check')
  checkEnrollmentAndNotify(
    @Body('studentName') studentName: string,
    @Body('courseCode') courseCode: string,
  ) {
    return this.notificationService.checkEnrollmentAndNotify(
      studentName,
      courseCode,
    );
  }
}
