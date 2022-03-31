const Admin = require("../model/admin");
const { validationResult } = require("express-validator");

exports.adminsignin = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(403).json({ errors: errors.array() });

  Admin.findOne({
    email: req.body.email,
    password: req.body.password,
  })
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      return res.status(500).json({ message: "Opps something went wrong" });
    });
};

exports.adminsignup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(403).json({ errors: errors.array() });

  Admin.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "opps something went wrong!" });
    });
};
