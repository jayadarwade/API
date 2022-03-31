const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const adminCont = require("../controller/admin_cont");

router.post(
  "/singup",
  body("name").isAlpha(),
  body("email").isEmail(),
  body("password").isLength(5),
  adminCont.adminsignup
);

router.post(
  "/signin",
  body("email").isEmail(),
  body("password").isLength(5),
  adminCont.adminsignin
);

module.exports = router;
