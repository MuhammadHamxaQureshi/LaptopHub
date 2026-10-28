import express from "express";
import { addOrder, cancelOrder } from "../controllers/orderController.js";

const router = express.Router();

router.post("/place", addOrder);
router.post("/cancel", cancelOrder);

export default router;
