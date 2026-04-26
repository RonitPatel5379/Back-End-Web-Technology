import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: Number }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);