const Catalogue = require("../models/catalogue");
const Product = require("../models/product");

module.exports.read = async (req, res) => {
  let catalogue = await Catalogue.findOne({ seller: req.user._id }).populate(
    "products"
  );
  if (!catalogue) {
    catalogue = new Catalogue();
    catalogue.seller = req.user._id;
    await catalogue.save();
  }
  res.render("seller/catalogue", { catalogue });
};

module.exports.add_product = async (req, res) => {
  const { name, price } = req.body;
  const product = new Product({ name, price });
  await product.save();
  const catalogue = await Catalogue.findOne({ seller: req.user._id });
  catalogue.products.push(product);
  await catalogue.save();
  res.redirect("/api/seller/catalogue");
};
