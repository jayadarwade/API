const express = require("express");
const route = express.Router();
const productCont = require("../controller/product_cont");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "public/product/images",
  filename: function (req, file, cd) {
    cd(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });
route.post("/add", upload.single("image"), productCont.add);

route.get("/list", productCont.list);

route.post("/list/:id", productCont.listBycategory);

route.post("/update/:id", upload.single("image"), productCont.update);

route.delete("/delete/:id", productCont.delete);

module.exports = route;
