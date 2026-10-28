import Product from "../models/Product.js";

export const addProduct = (req, res) => {
  const newProduct = new Product(req.body);

  newProduct.save()
    .then((savedProduct) => res.status(201).send(`Product added successfully. ID: ${savedProduct._id}`))
    .catch((error) => res.status(500).send("Error adding product: " + error));
};

export const updateProduct = (req, res) => {
  const { product, price, stock, status } = req.body;

  Product.findOneAndUpdate(
    { laptopName: product },
    { price, stock, status },
    { new: true },
  )
    .then((updatedProduct) => {
      if (!updatedProduct) return res.status(404).send("Product not found");
      res.send("Product updated successfully");
    })
    .catch((error) => res.status(500).send("Error updating product: " + error));
};

export const deleteProduct = (req, res) => {
  Product.deleteOne({ laptopName: req.body.product })
    .then((result) => {
      if (!result.deletedCount) return res.status(404).send("Product not found");
      res.send("Product deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting product: " + error));
};

export const searchProducts = (req, res) => {
  const { searchLaptop, maximumBudget, location, searchProduct, status } = req.body;
  const query = {};

  if (searchLaptop) query.laptopName = new RegExp(searchLaptop, "i");
  if (searchProduct) query.$or = [
    { laptopName: new RegExp(searchProduct, "i") },
    { shopName: new RegExp(searchProduct, "i") },
  ];
  if (maximumBudget) query.price = { $lte: Number(maximumBudget) };
  if (location && location !== "All locations") query.location = location;
  if (status && status !== "All products") query.status = status;

  Product.find(query)
    .then((products) => res.send(products))
    .catch((error) => res.status(500).send("Error searching products: " + error));
};
