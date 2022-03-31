const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
  },
  categoryimage: {
    type: String,
    required: true,
  },
  // categoryId:{
  //   type:Schema.Types.ObjectId,
  //   ref:'products'
  // }
});
module.exports = mongoose.model("categories", categorySchema);
