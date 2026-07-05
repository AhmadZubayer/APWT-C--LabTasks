# Lab Task 04

This folder contains the solution of Lab Task 04.

* **Date Completed:** July 05. 2026
* **Ahmad Zubayer, ID:** 23-54734-3
* **Section : C** Advanced Programming in Web Technologies 

---
## Task:
* Single Entity CRUD with TypeORM & PostgreSQL




## Testing

## Create Products Testing
### Database with no table or data

![screenshot/get](screenshots/1.jpg)

#### `POST /products — Body: { "name": "iPhone 15", "price": 999.99, "stock": 50, "category": "Electronics" }`

![screenshot/get](screenshots/2.jpg)


![screenshot/get](screenshots/3.jpg)

#### `POST /products — Body: { "name": "Samsung TV", "price": 499.99, "stock": 20,"category": "Electronics" }`
#### `POST /products — Body: { "name": "Running Shoes", "price": 89.99, "stock": 100, "category": "Sports" }`
#### `POST /products — Body: { "name": "Notebook", "price": 4.99, "stock": 200, "category":"Stationery" }`

![screenshot/get](screenshots/4.jpg)

## Read Operations Testing

#### `GET /products` verify all 4 products are returned ordered by newest first

![screenshot/get](screenshots/5.jpg)

#### `GET /products/2` verify the first product is returned`
![screenshot/get](screenshots/6-1.jpg)

#### `GET /products/999` verify a 404 Not Found error is returned`
![screenshot/get](screenshots/6.jpg)

#### `GET /products/category/Electronics`  verify only Electronics products are returned
![screenshot/get](screenshots/7.jpg)

#### `GET /products/search?keyword=phone`  verify iPhone 15 appears in results
![screenshot/get](screenshots/9.jpg)

#### `GET /products/search?keyword=s`  verify products with 's' in the name are returned
![screenshot/get](screenshots/10.jpg)

## Update & Toggle test

#### `PATCH /products/1 — Body: { "price": 899.99, "stock": 45 }`  verify only those two fields changed

![screenshot/get](screenshots/11.jpg)

![screenshot/get](screenshots/12.jpg)


#### `PUT /products/1 — Body: { "name": "iPhone 15 Pro", "price": 1099.99, "stock": 30, "category": "Electronics" }` verify all fields are replaced

![screenshot/get](screenshots/14.jpg)

![screenshot/get](screenshots/15.jpg)


#### `PATCH /products/1/toggle` verified isActive changes from true to false

![screenshot/get](screenshots/16.jpg)

#### `PATCH /products/1/toggle`  verified isActive changes back to true

![screenshot/get](screenshots/17.jpg)

## Database before deletetion testing

![screenshot/get](screenshots/18.jpg)

## Delete Test

![screenshot/get](screenshots/19.jpg)

#### `DELETE /products/4`  verified success response with deleted id

![screenshot/get](screenshots/20.jpg)

#### `DELETE /products/4`  verify 404 Not Found (already deleted)

![screenshot/get](screenshots/21.jpg)

#### `GET /products` verify only 3 products remain

![screenshot/get](screenshots/22.jpg)

## Validation Errors, DTO Testing 

#### `POST /products with missing name` expect: name should not be empty
![screenshot/get](screenshots/23.jpg)

#### `POST /products with price: -5` expect: price must be a positive number
![screenshot/get](screenshots/24.jpg)

#### `POST /products with extra unknown field` expect: property X should not exist
![screenshot/get](screenshots/25.jpg)

#### `POST /products with no body` expect full list of validation errors
![screenshot/get](screenshots/26.jpg)

#### `PUT /products/1 — Body: { "price": 799.99 }` verify validation error: name, category are required (all fields must be provided)
![screenshot/get](screenshots/27.jpg)












