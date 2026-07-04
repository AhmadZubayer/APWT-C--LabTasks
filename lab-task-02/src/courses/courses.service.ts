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
      return result;
    } else {
      return `Cant find course with course code : ${code}`;
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

  async updateCourseFull(code: string, course: ICourse) {
    const index = this.courses.findIndex((c) => c.code === code);
    if (index !== -1) {
      this.courses[index] = { ...course, code };
      await SaveToDB(this.courses);
    }
    return this.courses[index];
  }

  async updateCoursePartial(code: string, course: Partial<ICourse>) {
    const index = this.courses.findIndex((course) => course.code === code);
    if (index !== -1) {
      this.courses[index] = { ...this.courses[index], ...course };
      await SaveToDB(this.courses);
      return {
        message: 'Course Updated Successfully',
        data: this.courses[index],
      };
    } else {
      return 'Course Not Found';
    }
  }

  async deleteCourse(code: string) {
    const index = this.courses.findIndex((course) => course.code === code);
    if (index !== -1) {
      this.courses.splice(index, 1);
      await SaveToDB(this.courses);
      return {
        message: 'Course Deleted',
        data: this.courses,
      };
    } else {
      return 'Course Not Found';
    }
  }

  uploadCourseMetarial(code: string, file: Express.Multer.File) {
    return {
      message: 'File uploaded successfully',
      course: code,
      fileName: file.filename,
      path: file.path,
    };
  }

  async downloadCourseMaterial(code: string, res: Response) {
    try {
      const materialFolder = path.join(process.cwd(), `uploads/${code}`);
      const materials = await fs.readdir(materialFolder);
      if (materials.length === 0) {
        return res.status(200).json({
          message: `No materials found for course:  ${code}`,
          data: [],
          
        });
      }
      return res.status(200).json({
        message: `Materials retrieved successfully for ${code}`,
        data: materials,
      });
    } catch (error) {
      return res.status(404).json({
        message: `No materials uploaded for course:  ${code}`,
        data: [],
      });
    }
  }
}
