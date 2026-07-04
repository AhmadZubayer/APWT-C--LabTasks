import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './course-dtos/create-course-dto';
import { ParamDto } from './course-dtos/param-dto';
import type { Response } from 'express';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  getAllCourses() {
    console.log('[courses.controller.ts]: All Courses Get Request');
    return this.coursesService.getAllCoursesDb();
  }

  @Get(':code')
  getCourseById(@Param() paramDto: ParamDto) {
    console.log(
      `[courses.controller.ts]:  Course Get Request for id:${paramDto.code}`,
    );
    return this.coursesService.getCourseByIdDb(paramDto.code);
  }

  @Post()
  createCourse(@Body() createCourseDto: CreateCourseDto) {
    console.log('[courses.controller.ts]: Create Course Request');
    console.log(
      '[courses.controller.ts]: ',
      createCourseDto instanceof CreateCourseDto,
    );
    return this.coursesService.createCourse(createCourseDto);
  }


 
}
