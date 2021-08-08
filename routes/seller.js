const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/auth");
const { isSeller } = require("../middlewares/isSeller");
const catalogue_controller = require("../controllers/catalogue");

router.get("/catalogue", isLoggedIn, isSeller, catalogue_controller.read);

router.post("/add_product", catalogue_controller.add_product);

module.exports = router;
