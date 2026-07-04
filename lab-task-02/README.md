# Lab Task 02

This folder contains the solution of Lab Task 02.

* **Date Completed:** July 04. 2026
* **Ahmad Zubayer, ID:** 23-54734-3
* **Section : C** Advanced Programming in Web Technologies 

---
## Task:
* Post Data verification using DTO
* File handling using Multer Package



## Testing

## Get All Courses
### `GET http://localhost:3000/courses`
![screenshot/get](screenshots/1.jpg)

## Get Course By CourseCode
### `GET http://localhost:3000/courses/:code`
![screenshot/get](screenshots/2.jpg)

##  Post a Course
### `POST http://localhost:3000/courses`
### Error: Blocked By DTO - "Code" Should be string not number
![screenshot/get](screenshots/3.jpg)

### Error: Blocked By DTO - "Credit" Cannot be empty
![screenshot/get](screenshots/4.jpg)

### Course Post Successful (preview in Postman)
![screenshot/get](screenshots/5.jpg)

### Course Post Successful (preview in DB JSON File)
![screenshot/get](screenshots/6.jpg)

## Patch Course By CourseCode - Partial Update
### `PATCH http://localhost:3000/courses/:code`
![screenshot/get](screenshots/7.jpg)

## Put Course By CourseCode 
### `GET http://localhost:3000/courses/:code`
![screenshot/get](screenshots/8.jpg)

## Delete Course By CourseCode 
### `DELETE http://localhost:3000/courses/:code`
![screenshot/get](screenshots/9.jpg)

# File Handling Test
### Files are stored in `/uploads/${courseCode}` folder structure, if the courseCode folder does not exists, a folder is created using "mkdir". 
### File Formats Allowed: JPG, JPEG, PDF. Max Size: 10MB

## Upload Material Course By CourseCode 
### `DELETE http://localhost:3000/courses/:code/materials`
![screenshot/get](screenshots/10.jpg)
![screenshot/get](screenshots/11.jpg)


### Error: Blocked By Controller - "EXE" file type not allowed
![screenshot/get](screenshots/12.jpg)

### Error: Blocked By Controller - PDF but more than 10MB not allowed
![screenshot/get](screenshots/13.jpg)

## Download Material Course By CourseCode 
### `GET http://localhost:3000/courses/:code/materials`
![screenshot/get](screenshots/14.jpg)

### Error Handled: File Not Uploaded Response if Course Folder not found. 
![screenshot/get](screenshots/15.jpg)
