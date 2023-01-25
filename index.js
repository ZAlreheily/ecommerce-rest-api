const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const users = []

app.get("/", () => {
    console.log("hello")
})



app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`)
})