const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductModel = Schema({
  _idProductType: {
    type: mongoose.Schema.Types.ObjectId,
  },
  nameProduct: {
    type: String,
    require: true,
  },

  urlImgProduct: { type: String, require: true },
  price: Number,
});
const Product = mongoose.model("products", ProductModel, "products");
module.exports = Product;
