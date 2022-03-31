const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const categorycont = require("../controller/category_cont");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: "public/images",
  filename: function (req, file, cd) {
    cd(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });
router.post(
  "/add",
  upload.single("categoryimage"),
  body("categoryname").isAlpha(),
  categorycont.addcategory
);

router.get("/list", categorycont.categoryList);

router.delete("/delete/:id", categorycont.deletecategory);

router.post(
  "/update",
  upload.single("categoryimage"),
  body("categoryname").isAlpha(),
  body("categoryid"),
  categorycont.updatecategory
);

module.exports = router;
