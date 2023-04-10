import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on port : ${PORT} `));