module.exports.isBuyer = (req, res, next) => {
  if (req.user.userType !== "buyer") {
    return res.redirect("/");
  }
  next();
};
