import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/Studentdb.js";
import studentRoutes from "./routes/student.route.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});