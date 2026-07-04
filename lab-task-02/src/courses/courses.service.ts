import courseData from '../db/courses-db.json';
import { ICourse } from './course.interface';
import { CreateCourseDto } from './course-dtos/create-course-dto';
import { SaveToDB } from 'src/db/saveToDb';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  //constructor(){};
  courses: ICourse[] = courseData;

  getAllCoursesDb(){
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
}
