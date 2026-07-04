import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CoursesService } from 'src/courses/courses.service';
import { NotificationService } from 'src/notification/notification.service';

@Injectable()
export class EnrollmentService {
  constructor(
    private courseService: CoursesService,
    @Inject(forwardRef(() => NotificationService))
    private notificationService: NotificationService,
  ) {}

  private enrollments: { studentName: string; courseCode: string }[] = [];

  getEnrollments() {
    return {
      message:
        'All Entrollment Data Retirved. Response from [enntrollment.service.ts]',
      data: this.enrollments,
    };
  }

  enrollStudent(studentName: string, courseCode: string) {
    this.enrollments.push({
      studentName,
      courseCode,
    });
    const responseFromCourseService =
      this.courseService.getCourseByIdDb(courseCode);

    const notification = this.notificationService.sendNotification(
      studentName,
      `You have successfully enrolled in ${courseCode}`,
    );
    return {
      responseFromCourseService,
      notification,
    };
  }
}
