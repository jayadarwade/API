const { updateOne } = require("../model/user");
const User = require("../model/user");

exports.add = (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile * 1,
  })
    .then((result) => {
      console.log(result);
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "some thing went wrong" });
    });
};

exports.userLogin = (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "something went wrong" });
    });
};

exports.update = (req, res) => {
  User.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile * 1,
      },
    }
  )
    .then((result) => {
      console.log(result);
      if (result.modifiedCount) 
           return res.status(202).json(result);
      else 
          return res.status(204).json({ message: "somrthing went wrong" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "wrong" });
    });
};
