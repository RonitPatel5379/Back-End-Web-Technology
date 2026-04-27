import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  issueDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["ISSUED", "RETURNED"],
    default: "ISSUED",
  },
},{timestamps:true})

export default mongoose.model("Transaction", transactionSchema);