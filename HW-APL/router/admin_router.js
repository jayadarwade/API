const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const adminCont = require("../controller/admin_cont");
const productCont = require("../controller/product_cont");
const PriestCont = require("../controller/priest_cont")
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "public/product/images",
  filename: function (req, file, cd) {
    cd(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
router.post("/add-product", upload.single("image"), productCont.add);

router.get("/list-product", productCont.listByProductName);

router.delete("/delete-product/:id", productCont.delete);

router.post("/edit-product/:id", upload.single("image"), productCont.update);

router.get("/view-priest",PriestCont.priestList)

router.post(
  "/singup",
  body("name").isAlpha(),
  body("email").isEmail(),
  body("password").isLength(5),
  adminCont.adminsignup
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength(5),
  adminCont.adminsignin
);

module.exports = router;