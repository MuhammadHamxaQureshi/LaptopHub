import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/profile", profileRoutes);

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("MONGODB_URI is not configured. Server was not started.");
} else {
  mongoose.connect(mongoUri, { dbName: "LaptopHub" })
    .then(() => {
      console.log("Connected to MongoDB");
      console.log("Database:", mongoose.connection.name);
      console.log("MongoDB host:", mongoose.connection.host);
      app.listen(3000, () => {
        console.log("Server is running on port 3000");
      });
    })
    .catch((error) => {
      console.error("MongoDB is not connected. Server was not started:", error.message);
    });
}

export default app;
