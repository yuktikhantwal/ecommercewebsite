module.exports.isSeller = (req, res, next) => {
  if (req.user.userType !== "seller") {
    return res.redirect("/");
  }
  next();
};
