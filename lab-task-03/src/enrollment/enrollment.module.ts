import { forwardRef, Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { CoursesModule } from 'src/courses/courses.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [CoursesModule, forwardRef(() => NotificationModule)],
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}
