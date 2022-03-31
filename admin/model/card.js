const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  productList: [
    {
      type: Schema.Types.ObjectId,
      ref: "products",
    }
  ],
});
module.exports = mongoose.model("cards", cardSchema);
