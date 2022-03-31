const product = require("../model/product");

exports.add = (req, res) => {
  product.create({
    name: req.body.name,
    price: req.body.price * 1,
    Qty: req.body.Qty * 1,
    description: req.body.description,
    image: "http://localhost/3000/product/images/" + req.file.filename,
    categoryId: req.body.categoryId,
  })
    .then((result) => {
      console.log(result);
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "something went wrong" });
    });
};

exports.list = (req, res) => {
  product
    .find()
    .then((result) => {
      return res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json({ message: "something went wrong" });
    });
};

exports.listBycategory = (req, res) => {
  product
    .findOne({ categoryId: req.params.id })
    .then((result) => {
      console.log(result);
      return res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "something went wrong" });
    });
};

exports.update = (req, res) => {
  product
    .updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          price: req.body.price * 1,
          Qty: req.body.Qty * 1,
          description: req.body.description,
          image: "http://localhost/3000/product/images/" + req.file.filename,
        },
      }
    )
    .then((result) => {
      if (result.modifiedCount)
        return res.status(202).json({ message: "success" });
      else return res.status(204).json({ message: "not found" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "wrong" });
    });
};

exports.delete = (req, res) => {
  product
    .deleteOne({ _id: req.params.id })
    .then((result) => {
      console.log(result);
      if (result.deletedCount)
        return res.status(202).json({ message: "succes" });
      else return res.status(204).json({ message: "not found" });
    })
    .catch((err) => {
      return res.status(500).json({ message: "wrong" });
    });
};
