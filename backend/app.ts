import express from "express";
import Router from "./routes/routes";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(Router);
app.use(cors());

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});
