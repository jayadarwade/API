const mongoose = require("mongoose");
const priestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  approvel: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("priests", priestSchema);
