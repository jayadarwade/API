const express = require("express");
const router = express.Router();
const order = require("../controller/order_cont");

router.post("/add/:id", order.add);

module.exports = router;
