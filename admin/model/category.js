const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
  },
  categoryimage: {
    type: String,
    required: true,
  },
});
module.exports = mongoos.model("category", categorySchema);
