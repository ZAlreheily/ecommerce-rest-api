const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Success."))
  .catch((err) => {
    console.log(err);
  });

  app.use(express.json());

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/products", productRoute);
  app.use("/api/orders", orderRoute);
  app.use("/api/carts", cartRoute);

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})