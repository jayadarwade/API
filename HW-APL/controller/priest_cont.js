const Priest = require("../model/priest");

exports.register = (req, res) => {
  Priest
    .create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile * 1,
      age: req.body.age * 1,
      experience:req.body.experience
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

exports.Login = (req, res) => {
  Priest
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
  
  Priest.updateOne(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          email:req.body.email,
          password:req.body.password,
          mobile:req.body.mobile*1,
          age:req.body.age*1,
          experience:req.body.experience
        },
      }
    )
    .then((result) => {
      if (result.modifiedCount)
        return res.status(202).json({ message: "Update Success" });
      else return res.status(204).json({ message: "not found" });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "wrong" });
    });
};

exports.priestList=(req,res)=>{
  Priest.find()
  .then(result=>{
    console.log(result)
    return res.status(200).json(result)
  })
  .catch(err=>{
    console.log(err)
    return res.status(500).json({message:'wrong'})
  })
}