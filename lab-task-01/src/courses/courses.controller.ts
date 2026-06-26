import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import type { ICourse } from './course.interface';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getAllCourses() {
    console.log('[courses.controller.ts]: All Courses Get Request');
    return this.coursesService.getAllCoursesDb();
  }

  @Get(':id')
  getCourseById(@Param('id') id: string) {
    console.log(`[courses.controller.ts]:  Course Get Request for id:${id}`);
    return this.coursesService.getCourseByIdDb(Number(id));
  }

  @Post()
  createCourse(@Body() course: ICourse) {
    console.log('[courses.controller.ts]: Create Course Request');
    return this.coursesService.createCourse(course);
  }

  @Put(':id')
  updateCourseFull(@Param('id') id: string, @Body() course: ICourse) {
    console.log('[courses.controller.ts]: Put Course Request');
    return this.coursesService.updateCourseFull(Number(id), course);
  }

  @Patch(':id')
  updateCoursePartial(
    @Param('id') id: string,
    @Body() course: Partial<ICourse>,
  ) {
    console.log('[courses.controller.ts]: Patch Course Request');
    return this.coursesService.updateCoursePartial(Number(id), course);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string) {
    console.log('[courses.controller.ts]: Delete Course Request');
    return this.coursesService.deleteCourse(Number(id));
  }
}
