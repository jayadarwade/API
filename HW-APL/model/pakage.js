const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const pakageSchema = new mongoose.Schema({
  pakagename: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  itemQty: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  itemname: {
    type: String,
    required: true,
  },
  categoryId: Schema.Types.ObjectId,

});
module.exports = mongoose.model("pakages", pakageSchema);
