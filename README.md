Ecommerce REST API with Node.js, Express, MongoDB and JWT Authentication
This is an ecommerce REST API built using Node.js and Express, with MongoDB as a database and JWT authentication for secure API calls. It provides endpoints for managing products, orders, and users.

Requirements
Node.js 12 or higher
MongoDB 4.0 or higher
Installation
Clone the repository: git clone https://github.com/ZAlreheily/ecommerce-rest-api.git
Install dependencies: npm install
Copy the .env.example file to a new file named .env and fill in the required information
Start the server: npm start
API Documentation
The API endpoints and their usage are described below.

Authentication Endpoints
Register User
bash

POST /api/users/signup
Registers a new user.

Request
json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password"
}
Response
json

{
  "message": "User created"
}
Login User
bash
POST /api/users/login
Logs in an existing user.

Request
json
{
  "email": "johndoe@example.com",
  "password": "password"
}
Response
json
{
  "message": "Auth successful",
  "token": "<JWT token>"
}
Product Endpoints
Get All Products
bash
Copy code
GET /api/products
Returns a list of all products.

Response
json
[
  {
    "_id": "6166f463540c3f3f3b2c71f9",
    "name": "Product 1",
    "price": 10.99,
    "productImage": "uploads/product1.jpg",
    "__v": 0
  },
  {
    "_id": "6166f49f540c3f3f3b2c71fa",
    "name": "Product 2",
    "price": 5.99,
    "productImage": "uploads/product2.jpg",
    "__v": 0
  }
]
Get Single Product
bash
GET /api/products/:productId
Returns a single product.

Response
json
{
  "_id": "6166f463540c3f3f3b2c71f9",
  "name": "Product 1",
  "price": 10.99,
  "productImage": "uploads/product1.jpg",
  "__v": 0
}
Create Product
bash
POST /api/products
Creates a new product.

Request
json
{
  "name": "New Product",
  "price": 15.99,
  "productImage": "<file upload>"
}
Response
json
{
  "message": "Product created",
  "createdProduct": {
    "name": "New Product",
    "price": 15.99,
    "productImage": "uploads/<filename>",
    "_id": "6166f691540c3f3f3b2c71fb",
    "__v": 0
  }
}
Update Product
bash
PATCH /api/products/:productId
Updates an existing product.

Request
json
{
  "name": "Updated Product",
  "price": 20.99
}
Response
json
{
  "message": "Product updated"
}
