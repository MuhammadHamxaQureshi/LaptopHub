import express from "express"; // express library import
import { 
  addProduct,  // controller ka add function
  deleteProduct, // controller ka delete function
  getProducts,
  searchProducts, // controller ka search function
  updateProduct,  // controller ka update function
} from "../controllers/productController.js"; // ../ ka matlab ek folder upar, phir controllers folder  

const router = express.Router(); // chhota alag router banata hai, sirf products ke liye

router.post("/add", addProduct); // POST /products/add aaye to addProduct chalao
router.get("/", getProducts); // GET /products aaye to getProducts chalao
router.post("/update", updateProduct); // POST /products/update aaye to updateProduct chalao
router.post("/delete", deleteProduct); // POST /products/delete aaye to deleteProduct chalao
router.post("/search", searchProducts); // POST /products/search aaye to searchProducts chalao

export default router; // router ko bahar bhejta hai, server.js isay import karta hai
 