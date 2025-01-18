import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
  },
  wishlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wishlists",
  },
  isBlockd:{
    type: Boolean,
    default: false
  }
});

export const User = mongoose.model("User", userSchema);