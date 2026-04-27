import mongoose from "mongoose";

const depositSchema = new mongoose.Schema({
  ACTNO:Number,
  CNAME:String,
  BNAME:String,
  AMOUNT:Number,
  ADATE:Date
},{timestamps:true})

export default mongoose.models.deposits || mongoose.model("deposit",depositSchema)  