const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");
const adminSchema = new mongoose.Schema({
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
});
module.exports = mongoos.model("admins", adminSchema);
