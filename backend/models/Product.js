import mongoose from "mongoose";                          // mongoose import, schema aur model isi se bante hain

const productSchema = new mongoose.Schema({               // schema = document ka naksha (kaun si field, kis type ki)
  laptopName: { type: String, required: true },           // text, zaroori hai (khali ho to save fail)
  shopName: { type: String },                             // text, zaroori nahi
  price: { type: Number, required: true },                // number, zaroori hai ("40000" string khud number ban jati hai)
  quantity: { type: Number },                             // Shop Owner add form se aati hai, number
  stock: { type: Number },                                // Shop Owner update form se aati hai, number
  condition: { type: String },                            // Shop Owner add form se aati hai (Like New, Very Good, Good)
  location: { type: String },                             // Admin add form se aati hai (Abbottabad, Mandian, Havelian)
  status: { type: String, default: "Pending" },           // text, agar na diya jaye to khud "Pending" lag jata hai
});

const Product = mongoose.model("Product", productSchema); // schema se model banata hai, "Product" naam ki collection se jorta hai

export default Product;                                   // model ko controller mein import karne ke liye bahar bhejta hai