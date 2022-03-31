const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const adminRouter = require("./router/admin_route");
const categoryRouter = require("./router/category_route");
const userRouter = require("./router/user_route");
const productRouter = require("./router/product_route");
const cardRouter = require("./router/cart_route");
const orderRouter = require("./router/order_route");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb+srv://root:root@cluster0.8em2i.mongodb.net/test?retryWrites=true&w=majority");
module.exports = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/admin", adminRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/card", cardRouter);
app.use("/api/order", orderRouter);

app.listen(3000, () => {
  console.log("running");
});
