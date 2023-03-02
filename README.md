# eCommerce-rest-api

This is an eCommerce REST API built using Node.js, Express. It provides various endpoints for managing products, categories, and orders.

> Uses MongoDB as a database and authentication with (jwt).

## Libraries and tools used
- [Express](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Mongoose](https://github.com/Automattic/mongoose)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)


## Getting Started
To get started, you need to clone the repository to your local machine:

```
> git clone https://github.com/ZAlreheily/ecommerce-rest-api.git
```

After cloning the repository, navigate to the project directory and install the dependencies:

```
> cd ecommerce-api
> npm install
```
Before starting the server, you need to set up the environment variables. Create a new file named `.env` in the root directory and add the following variables:

```
PORT=3000
MONGO_URL="mongodb://localhost/ecommerce"
JWT_SECRET ="Your Secret"
```

Finally, start the server using the following command:
```
> npm start
```
##Endpoints
The API provides the following endpoints:

