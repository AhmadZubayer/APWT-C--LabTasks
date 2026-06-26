import { Injectable } from '@nestjs/common';
import courses from '../db/courses-db.json';
import { ICourse } from './course.interface';

@Injectable()
export class CoursesService {
  //constructor(){};

  getAllCoursesDb() {
    return courses;
  }

  getCourseByIdDb(id: number) {
    const result = courses.find((course) => course.id === id);
    if (result) {
      return result;
    } else {
      return `Cant find course with id${id}`;
    }
  }

  createCourse(course: ICourse) {
    courses.push(course);
    return {
      message: 'Course Added Successfully',
      data: course,
    };
  }

  updateCourseFull(id: number, course: ICourse) {
    const index = courses.findIndex((c) => c.id === id);
    if (index !== -1) {
      courses[index] = { ...course, id };
    }
    return courses[index];
  }

  updateCoursePartial(id: number, course: Partial<ICourse>) {
    const index = courses.findIndex((course) => course.id === id);
    if (index !== -1) {
      courses[index] = { ...courses[index], ...course };
      return {
        message: 'Course Updated Successfully',
        data: courses[index],
      };
    } else {
      return 'Course Not Found';
    }
  }

  deleteCourse(id: number) {
    const index = courses.findIndex((course) => course.id === id);
    if (index !== -1) {
      courses.splice(index, 1);
      return {
        message: 'Course Deleted',
        data: courses,
      };
    } else {
      return 'Course Not Found';
    }
  }
}
