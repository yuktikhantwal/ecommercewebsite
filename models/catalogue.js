const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catalogueSchema = new Schema({
  seller: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Catalogue", catalogueSchema);
