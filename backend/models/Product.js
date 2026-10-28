import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  laptopName: { type: String, required: true },
  shopName: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number },
  stock: { type: Number },
  condition: { type: String },
  location: { type: String },
  status: { type: String, default: "Pending" },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
