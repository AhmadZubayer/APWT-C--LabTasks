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
import { CreateCourseDto } from './course-dtos/create-course-dto';
import { ParamDto } from './course-dtos/param-dto';
import { UpdateCourseDto } from './course-dtos/update-course-dto';

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

  @Put(':code')
  updateCourseFull(
    @Param() paramDto: ParamDto,
    @Body() createCourseDto: CreateCourseDto,
  ) {
    console.log('[courses.controller.ts]: Put Course Request');
    return this.coursesService.updateCourseFull(paramDto.code, createCourseDto);
  }

  @Patch(':code')
  updateCoursePartial(
    @Param() paramDto: ParamDto,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    console.log('[courses.controller.ts]: Patch Course Request');
    return this.coursesService.updateCoursePartial(
      paramDto.code,
      updateCourseDto,
    );
  }

  @Delete(':code')
  deleteCourse(@Param() paramDto: ParamDto) {
    console.log('[courses.controller.ts]: Delete Course Request');
    return this.coursesService.deleteCourse(paramDto.code);
  }
}
