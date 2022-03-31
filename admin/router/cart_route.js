const express = require("express");
const router = express.Router();
const cart = require("../controller/cart_cont");

router.post("/add", cart.add);
//all-card-view
router.get("/list", cart.list);
//card-delte
router.delete("/delete/:id", cart.delete);
//product-remove
router.delete("/remove/:id/:productid", cart.remove);
//card-view
router.get("/view/:id", cart.view);

module.exports = router;
