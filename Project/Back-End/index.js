import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import userRoute from './routes/userRoutes.js';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import SocketServer from './classes/socket.js';

const app = express();

dotenv.config();
app.use(cors({
  origin: [process.env.URL_WEB_SITE],
  credentials: true,
  // methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", userRoute);

const PORT = process.env.PORT || 5000;

const server = SocketServer(app);

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => server.listen(PORT, () => console.log(`Server Running on port : ${PORT} `)))
  .catch((err) => console.error(err.message + "err"));