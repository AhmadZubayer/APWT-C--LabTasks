import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './course-dtos/create-course-dto';
import { ParamDto } from './course-dtos/param-dto';
import { UpdateCourseDto } from './course-dtos/update-course-dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as fs from 'fs';
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

  // file handling code starts here
  @Post(':code/materials')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const courseCode = req.params.code as string;
          const folderPath = `./uploads/${courseCode}`;
          if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
          }
          cb(null, folderPath);
        },
        filename: (req, file, cb) => {
          const fileName =
            Date.now() + '-' + req.params.code + '-' + file.originalname;
          cb(null, fileName);
        },
      }),
      fileFilter: (res, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|pdf)$/)) {
          cb(null, true);
        } else {
          cb(new BadRequestException('file type not accepted'), false);
        }
      },

      limits: {
        fileSize: 10 * 1024 * 1024,
      },
    }),
  )
  uploadMetarial(
    @Param() paramDto: ParamDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.coursesService.uploadCourseMetarial(paramDto.code, file);
  }

  @Get(':code/materials')
  downloadMaterial(@Param() paramDto: ParamDto, @Res() res: Response) {
    return this.coursesService.downloadCourseMaterial(paramDto.code, res);
  }
}
