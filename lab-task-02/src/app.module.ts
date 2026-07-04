import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [CoursesModule, ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
