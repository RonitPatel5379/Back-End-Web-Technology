import mongoose from "mongoose";

const connection = async () => {
  try {
    if(mongoose.connection.readyState>=1) {
      console.log("Already")
      return
    }
    await mongoose.connect("mongodb://localhost:27017/BANK_INFO")
    console.log('db connect')
  } catch (err) {
    console.log(err)
  }
}

export default connection