import express from "express";
import Router from "./routes/routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(Router);

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});
