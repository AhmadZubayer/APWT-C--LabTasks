# Lab Task 01

This folder contains the solution of Lab Task 01.

* **Date Completed:** Jume 26. 2026
* **Ahmad Zubayer, ID:** 23-54734-3
* **Section : C** Advanced Programming in Web Technologies 



---

## Scenerio & Requirement:
A Course Management REST API for a university system using NestJS.  
The system will manage basic course operations. All routes must return simple string responses from the Service layer.

---

The api architecture has been implemented in the follwing way:
A course interface has been created.
* `@Controller('courses') CourseController`
* `@Service('courses') CourseService`
* `@Get() getAllCourses() Controller <-> getAllCoursesDb() Service <- precreated courses.db.json file + runtime array`
* `@Get(':id') getCourseById(@Param('id') id: string) Controller <-> getCourseByIdDb(id: number) Service`
* `@Post() createCourse(@Body() course: ICourse) Controller <-> createCourse(course: ICourse) Service`
* `@Put(':id') updateCourseFull(@Param('id') id: string, @Body() course: ICourse) Controller <-> updateCourseFull(id: number, course: ICourse) Service`
* `@Patch(':id') updateCoursePartial(@Param('id') id: string, @Body() course: Partial<ICourse>) Controller <-> updateCoursePartial(id: number, course: Partial<ICourse>) Service`
* `@Delete(':id') deleteCourse(@Param('id') id: string) Controller <-> deleteCourse(id: number) Service`



---

## Testing

### `GET http://localhost:3000/course`
![screenshot/get](screenshots/get.jpg)

### `GET http://localhost:3000/course/2`
![secreenshot/getbyid](screenshots/getById.jpg)

### `POST http://localhost:3000/course`
![screenshot/post1](screenshots/post-1jpg.jpg)
![screenshot/post2](screenshots/post-2.jpg)

### `o PUT http://localhost:3000/course/3`
![screenshot/put1](screenshots/put-1.jpg)
![screenshot/put2](screenshots/put-2.jpg)

### `o PATCH http://localhost:3000/course/3`
![screenshot/patch1](screenshots/patch-1.jpg)
![screenshot/patch2](screenshots/patch-2.jpg)

### `o DELETE http://localhost:3000/course/3`
![screenshot/delete](screenshots/delete.jpg)
