# eCommerce-rest-api

This is an eCommerce REST API built using Node.js, Express. It provides various endpoints for managing products, cart, and orders.

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
## Endpoints
The API provides the following endpoints:

### Authentication

* `POST /api/auth/signup` - signup as a new user.
* `POST /api/auth/login` - returns a jwt if information is correct.

### Products

* `GET /api/products` - Returns a list of all prouducts.
* `GET /api/products/:id` - Returns a specific product by ID. 
* `POST /api/products` - Add a new product.
* `PUT /api/products/:id` - Update a specific product.
* `DELETE /api/products/:id` - Delete a specific product.

### Cart

* `GET /api/cart` - Returns the cart of user. 
* `POST /api/cart` - Add a new product to cart.
* `Delete /api/cart/:productID` - Delete a specific product from cart.

### Orders

* `GET /api/orders` - Returns a list of all orders.
* `GET /api/orders/orderID` - Return a specific order.
* `POST /api/orders` - Create a new order.

## Contributing
Contributions are welcome! If you want to contribute to the project, please create a new branch and submit a pull request.
