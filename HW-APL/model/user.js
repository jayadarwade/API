const mongoose = require("mongoose");
const userSchems = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
});
module.exports = mongoose.model("users", userSchems);
