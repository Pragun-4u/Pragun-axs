import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

const setupAndStartServer = async () => {
  await connectDB();
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use("/api", router);

  app.listen(process.env.PORT, () => {
    console.log("Server started on port ", process.env.PORT);
  });
};

setupAndStartServer();
