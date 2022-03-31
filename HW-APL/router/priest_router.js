const express = require("express");
const router = express.Router();
const priestcont = require("../controller/priest_cont");
const { body } = require("express-validator");

router.post(
  "/register",
  body("name").isAlpha(),
  body("email").isEmail(),
  body("password"),
  body("experience").not().isEmpty(),
  priestcont.register
);

router.post("/login", body("email"), body("password"), priestcont.Login);

router.post("/update",priestcont.update)

module.exports = router;
