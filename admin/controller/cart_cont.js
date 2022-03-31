const { Result } = require("express-validator");
const Cart = require("../model/card");

exports.add = async (req, res) => {
  console.log(req.body);
  var cart = await Cart.findOne({
    userId: req.body.userId,
  });
  if (!cart) cart = new Cart({ userId: req.body.userId });
  cart.productList.push(req.body.productId);
  cart
    .save()
    .then((result) => {
      console.log(result);
      return res.status(201).json({ mesaage: "succes" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ mesaage: "somthing went wrong" });
    });
};

exports.list = (req, res) => {
  Cart.find()
    .then((result) => {
      console.log(result);
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ mesaage: "wrong" });
    });
};

exports.delete = (req, res) => {
  Cart.deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      if (result.deletedCount)
        return res.status(202).json({ mesaage: "succes" });
      else return res.status(204).json({ mesaage: "not found" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ mesaage: "wrong" });
    });
};

exports.remove = (req, res) => {
  Cart.updateOne(
    { _id: req.params.id },
    {
      $pullAll: {
        productList: [{ _id: req.params.productid }],
      },
    }
  )
    .then((result) => {
      console.log(result);
      if (result.modifiedCount)
        return res.status(202).json({ mesaage: "succes" });
      else return res.status(404).json({ mesaage: "not found" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ mesaage: "wrong" });
    });
};

exports.view = (req, res) => {
  Cart.findOne({ userid: req.params.id })
    .populate("productList")
    .then((result) => {
      let ui=result.userId;
      let id=result._id
      console.log(result)
      return res.status(200).json({mesaage:ui+" "+id});
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ mesaage: "wrong" });
    });
};
