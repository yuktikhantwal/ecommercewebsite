const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/auth");
const { isBuyer } = require("../middlewares/isBuyer");
const seller_controller = require("../controllers/seller");
const catalogue_controller = require("../controllers/catalogue");
const order_controller = require("../controllers/order");

router.get("/list-of-sellers", isLoggedIn, isBuyer, seller_controller.read);

// "id" is seller's id
router.get(
  "/seller-catalogue/:id",
  isLoggedIn,
  isBuyer,
  catalogue_controller.read_
);

router.post("/create-order/:id", isLoggedIn, isBuyer, order_controller.create);

module.exports = router;
