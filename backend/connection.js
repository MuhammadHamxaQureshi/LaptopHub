import express from "express"; //backend framework hai. Server banana, routes handle karna aur request/response sab isi se hota hai.
import mongoose from "mongoose"; //Node.js aur MongoDB ke beech ka bridge hai. Isi se connection banta hai aur models (Product, User, Order) chalte hain.
import cors from "cors"; //browser ki security rule ko handle karta hai

//apni 4 router files import ho rahi hain. Har ek ek feature ke URLs sambhalti hai:
import authRoutes from "./routes/authRoutes.js"; //register, login
import productRoutes from "./routes/productRoutes.js";//add, update, delete, search
import orderRoutes from "./routes/orderRoutes.js"; //place, cancel
import profileRoutes from "./routes/profileRoutes.js";//update

const app = express(); // naya server banata hai
app.use(cors()); // frontend (5173) ko backend (3000) se baat karne deta hai
app.use(express.json()); // request ki JSON body ko req.body mein badalta hai

app.use("/auth", authRoutes); // /auth se shuru hone wali request authRoutes ke paas jayegi
app.use("/products", productRoutes); // /products wali request productRoutes ke paas
app.use("/orders", orderRoutes);  // /orders wali request orderRoutes ke paas
app.use("/profile", profileRoutes);  // /profile wali request profileRoutes ke paas

const mongoUri =
  "mongodb+srv://iamhamxaqureshii_db_user:K1han234%40@cluster0.3n9cmwu.mongodb.net/";  // Atlas ka address, user aur password ke saath

mongoose.connect(mongoUri, { dbName: "LaptopHub" }) // Atlas se connect karo, database ka naam LaptopHub
  .then(() => {  // connection kamyab ho to yeh chalega
    console.log("Connected to MongoDB");  // terminal mein message
    console.log("Database:", mongoose.connection.name); // database ka naam
    console.log("MongoDB host:", mongoose.connection.host);  // ab server port 3000 par sunna shuru kare
    app.listen(3000, () => {  // terminal mein message
      console.log("Server is running on port 3000"); 
    });
  })
  .catch((error) => {   // connection fail ho to yeh chalega
    console.error("MongoDB is not connected. Server was not started:", error.message); // error dikhao, server start nahi hoga
  });

export default app;  // app ko bahar available karta hai
