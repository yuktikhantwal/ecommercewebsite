const User = require("../models/user");

module.exports.register = async (req, res) => {
  const { usertype, email, username, password } = req.body;
  const user = new User({ email, username });
  user.userType = usertype;
  const registeredUser = await User.register(user, password);
  req.login(registeredUser, () => {
    res.redirect("/");
  });
};

module.exports.login = (req, res) => {
  res.redirect("/");
};
