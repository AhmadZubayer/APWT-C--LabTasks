import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ServiceModule } from './service/service.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [CoursesModule, ServiceModule, EnrollmentModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
