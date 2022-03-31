const express = require("express");
const router = express.Router();
const usercont = require("../controller/user_cout");
const { body } = require("express-validator");

router.post(
  "/register",
  body("name").isAlpha(),
  body("email").isEmail(),
  body("password").isNumeric(),
  usercont.register
);

router.post("/login", body("email"), body("password"), usercont.userLogin);

module.exports = router;
