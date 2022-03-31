const category = require("../model/category");
const { validationResult } = require("express-validator");

exports.addcategory = (req, res) => {
  let categoryname = req.body.categoryname;
  let categoryimage = "http://localhost:3000/images/" + req.file.filename;
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(403).json({ errors: errors.array() });

  category
    .create({
      categoryname: categoryname,
      categoryimage: categoryimage,
    })
    .then((result) => {
      return res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "opps something went wrong!" });
    });
};

exports.categoryList = (req, res) => {
  category
    .find({categoryname:req.body.caregoryname})
    .populate('products')
    .then((results) => {
      return res.status(200).json(results);
    })
    .catch((err) => {
      return res.status(500).json({ message: "not found" });
    });
};

// exports.deletecategory = (req, res) => {
//   category
//     .deleteOne({ _id: req.params.id })
//     .then((result) => {
//       if (result.deletedCount)
//         return res.status(202).json({ message: "succes" });
//       else return res.status(204).json({ message: "not deleted" });
//     })
//     .catch((err) => {
//       return res.status(500).json({ message: "something went wrong" });
//     });
// };

// exports.updatecategory = (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty())
//     return res.status(400).json({ errors: errors.array() });
//   category
//     .updateOne(
//       { _id: req.body.categoryid },
//       {
//         $set: {
//           categoryname: req.body.categoryname,
//           categoryimage: "http://localhost:3000/images/" + req.file.filename,
//         },
//       }
//     )
//     .then((result) => {
//       console.log(result);
//       if (result.modifiedCount)
//         return res.status(202).json({ message: "succes" });
//       else return res.status(404).json({ message: "record not found" });
//     })
//     .catch((err) => {
//       return res.status(500).json({ message: "something went wrong" });
//     });
// };
