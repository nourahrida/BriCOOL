import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import userRoute from './routes/userRoutes.js';
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
  }));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use("/user",userRoute);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL) //no worning in console
.then(() => app.listen(PORT, () => console.log(`Server Running on port : ${PORT} `)))
.catch((err) => console.error(err.message + "err"));