const express = require("express");
const router = express.Router();
const passport = require("passport");
const controller = require("../controllers/user");
const { isLoggedIn, isLoggedOut } = require("../middlewares/auth");

// REGISTER
router.get("/register", isLoggedOut, (req, res) => {
  res.render("user/register");
});

router.post("/register", isLoggedOut, controller.register);

// LOGIN
router.get("/login", isLoggedOut, (req, res) => {
  res.render("user/login");
});

router.post(
  "/login",
  isLoggedOut,
  passport.authenticate("local"),
  controller.login
);

// LOGOUT
router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
