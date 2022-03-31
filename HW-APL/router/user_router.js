const express = require("express");
const router = express.Router();
const userCont = require("../controller/user_cont");
const PriestCont = require("../controller/priest_cont");
const Productcont = require("../controller/product_cont");
router.post("/register", userCont.add);

router.get("/login", userCont.userLogin);

router.post("/update/:id", userCont.update);

router.get("/Priest", PriestCont.priestList);

router.get("/product", Productcont.listByProductName);

router.get("/pakage/:id", Productcont.PakageList);

router.post("/pakage", Productcont.PakageByName);

module.exports = router;
