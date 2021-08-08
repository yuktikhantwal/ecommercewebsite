const Order = require("../models/order");
const Product = require("../models/product");

module.exports.read = async (req, res) => {
  const orders = await Order.find({ seller: req.user._id })
    .populate("products")
    .populate("buyer");
  res.render("seller/orders", { orders });
};

module.exports.create = async (req, res) => {
  const { id } = req.params;
  const { order_product_list } = req.body;
  const order = new Order();
  order.seller = id;
  order.buyer = req.user._id;
  if (typeof order_product_list === "string") {
    const product = await Product.findById(order_product_list);
    order.products.push(product);
  } else {
    for (let product_id of order_product_list) {
      const product = await Product.findById(product_id);
      order.products.push(product);
    }
  }
  await order.save();
  res.redirect("/api/buyer/list-of-sellers");
};
