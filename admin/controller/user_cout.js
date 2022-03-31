const user = require("../model/user");

exports.register = (req, res) => {
  user
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile * 1,
      age: req.body.age * 1,
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
  user
    .findOne({ email: req.body.email, password: req.body.password })
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "something went wrong" });
    });
};

exports.update = (req, res) => {
  
    user.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          
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
