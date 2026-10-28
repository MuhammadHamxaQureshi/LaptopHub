import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  accountType: { type: String, required: true },
  phoneNumber: { type: String },
  city: { type: String },
});

const User = mongoose.model("User", userSchema);

export default User;
