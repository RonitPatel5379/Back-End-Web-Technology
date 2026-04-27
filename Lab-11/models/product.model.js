import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productCode: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("product", ProductSchema);