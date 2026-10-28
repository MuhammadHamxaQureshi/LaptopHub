import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
    default: () => `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
  },
  laptop: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  reason: { type: String },
  status: { type: String, default: "Pending" },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
