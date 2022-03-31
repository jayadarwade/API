const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const priestRouter = require("./router/priest_router");
const categoryRouter = require("./router/category_router");
const userRouter = require("./router/user_router");
const adminRouter = require("./router/admin_router");
// const orderRouter = require("./router/order_route");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost:27017/HW");
module.exports = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/admin",adminRouter)
app.use("/api/priest", priestRouter);
app.use("/api/category", categoryRouter);
app.use("/api/user", userRouter);
// app.use("/api/card", cardRouter);
// app.use("/api/order", orderRouter);

app.listen(5000, () => {
  console.log("running");
});
