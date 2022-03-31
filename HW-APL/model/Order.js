const mongoose = require("mongoose");
const schema = mongoose.Schema;
const orderSchema = new mongoose.Schema({

  userId: schema.Types.ObjectId,
  productList: {
    type: schema.Types.ObjectId,
    ref: "products",
  },
},{date:{type:Date()},});
module.exports = mongoose.model("orders", orderSchema);
