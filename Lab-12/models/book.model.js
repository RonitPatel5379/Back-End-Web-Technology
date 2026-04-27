import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
  userId: {
      type: String,
      required: true,
      unique: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["Admin", "Librarian", "Member"],
      default: "Member"
    },

    phone: {
      type: String
    },
}, { timestamps: true })

export default mongoose.model("Book", bookSchema);