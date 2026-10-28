import express from "express";
import {
  addProduct,
  deleteProduct,
  searchProducts,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/add", addProduct);
router.post("/update", updateProduct);
router.post("/delete", deleteProduct);
router.post("/search", searchProducts);

export default router;
