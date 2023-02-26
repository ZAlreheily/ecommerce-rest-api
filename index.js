const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const authRoute = require("./routes/auth");
const notFoundError = require("./middlewares/NotFoundError");
const errorHandler = require("./middlewares/ErrorHandler");
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("DB Connection Success."))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/cart", cartRoute);

app.use(notFoundError);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`)
})