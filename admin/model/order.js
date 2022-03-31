const mongoos = require("mongoose");
const Schema = mongoos.Schema;
// const cart = require("../model/card");
const orderSchema = mongoos.Schema({
  
  cart:{
    type:Schema.Types.ObjectId,
    ref:'cards'
  },
  Address:{
    type: String,
    require:true
  },
  ItemQty:{
    type:Number,
    require:true
  }
});

module.exports = mongoos.model("orders", orderSchema);
