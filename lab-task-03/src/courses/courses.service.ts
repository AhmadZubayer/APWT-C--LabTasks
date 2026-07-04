import courseData from '../db/courses-db.json';
import { ICourse } from './course.interface';
import { CreateCourseDto } from './course-dtos/create-course-dto';
import { SaveToDB } from 'src/db/saveToDb';
import { Injectable } from '@nestjs/common';
import path from 'path';
import * as fs from 'fs/promises';
import { Response } from 'express';

@Injectable()
export class CoursesService {
  //constructor(){};
  courses: ICourse[] = courseData;

  getAllCoursesDb() {
    try {
      return {
        message: 'courses retrived successfully',
        data: this.courses,
      };
    } catch (error) {
      return error;
    }
  }

  getCourseByIdDb(code: string) {
    const result = this.courses.find((course) => course.code === code);
    if (result) {
      return {
        message: 'Course Fetched. This Response is from [courses.services.ts]',
        code: result.code,
        course: result.name,
      };
    } else {
      return `Cant find course with course code : ${code}. This Response is from [courses.services.ts]`;
    }
  }

  async createCourse(dto: CreateCourseDto) {
    const newCourse = dto;
    try {
      this.courses.push(newCourse);
      await SaveToDB(this.courses);
      return {
        message: 'Course Added Successfully',
        data: this.courses,
      };
    } catch (error) {
      return error;
    }
  }
}
