const Seller = require("../models/user");

module.exports.read = async (req, res) => {
  const sellers = await Seller.find({ userType: "seller" });
  res.render("buyer/listOfSellers", { sellers });
};
