const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/auth");
const { isSeller } = require("../middlewares/isSeller");
const catalogue_controller = require("../controllers/catalogue");
const order_controller = require("../controllers/order");

router.get("/catalogue", isLoggedIn, isSeller, catalogue_controller.read);

router.post(
  "/add_product",
  isLoggedIn,
  isSeller,
  catalogue_controller.add_product
);

router.get("/orders", isLoggedIn, isSeller, order_controller.read);

module.exports = router;
