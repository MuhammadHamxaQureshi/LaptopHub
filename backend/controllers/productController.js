import Product from "../models/Product.js";  // Product model import, isi se database se baat hoti hai

export const addProduct = (req, res) => {   // req = aane wali request, res = wapas bhejne wala jawab
  // new Product(...) Mongoose model hai
  const newProduct = new Product(req.body);  // form ke data se naya Product document banata hai (abhi save nahi hua

  newProduct.save()  // document ko MongoDB mein save karta hai
    .then((savedProduct) => res.status(201).send(`Product added successfully. ID: ${savedProduct._id}`)) // save ho gaya: status 201 (created) aur message bhejo
    .catch((error) => res.status(500).send("Error adding product: " + error)); // save fail hua: status 500 (server error) aur error bhejo
};

export const getProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((error) => res.status(500).send("Error getting products: " + error));
};

export const updateProduct = (req, res) => {
  const { product, price, stock, status } = req.body;  // form ke data se 4 values nikalta hai

  Product.findOneAndUpdate(                            // pehla matching product dhoondo aur update karo
    { laptopName: product },                           // dhoondne ki shart: laptopName form ke product ke barabar ho
    { price, stock, status },                          // jo naye values set karne hain
    { new: true },                                     // update ke baad wala naya document wapas do
  )
    .then((updatedProduct) => {
      if (!updatedProduct) return res.status(404).send("Product not found"); // koi match nahi mila: 404 (not found)
      res.send("Product updated successfully");        // mil gaya aur update ho gaya: success message
    })
    .catch((error) => res.status(500).send("Error updating product: " + error)); // masla aaya: 500 aur error
};

export const deleteProduct = (req, res) => {
  Product.deleteOne({ laptopName: req.body.product })  // laptopName match karne wala pehla product delete karo
    .then((result) => {
      if (!result.deletedCount) return res.status(404).send("Product not found"); // 0 delete hue: 404
      res.send("Product deleted successfully");        // 1 delete hua: success message
    })
    .catch((error) => res.status(500).send("Error deleting product: " + error)); // masla aaya: 500 aur error
};

export const searchProducts = (req, res) => {
  const { searchLaptop, maximumBudget, location, searchProduct, status } = req.body; // form se 5 possible values nikalta hai
  const query = {};                                    // khali filter, neeche shartein add hongi

  if (searchLaptop) query.laptopName = new RegExp(searchLaptop, "i"); // customer ka search: naam mein yeh text ho, "i" = capital small farq nahi
  if (searchProduct) query.$or = [                     // admin ka search: neeche ki 2 mein se koi ek match ho
    { laptopName: new RegExp(searchProduct, "i") },    // laptop ke naam mein text mile
    { shopName: new RegExp(searchProduct, "i") },      // ya shop ke naam mein text mile
  ];
  if (maximumBudget) query.price = { $lte: Number(maximumBudget) }; // price budget se kam ya barabar ($lte)
  if (location && location !== "All locations") query.location = location; // "All locations" na ho to us location tak limit
  if (status && status !== "All products") query.status = status;          // "All products" na ho to us status tak limit

  Product.find(query)                                  // query se match karne wale saare products dhoondo
    .then((products) => res.send(products))            // products ki array frontend ko bhejo
    .catch((error) => res.status(500).send("Error searching products: " + error)); // masla aaya: 500 aur error
};
