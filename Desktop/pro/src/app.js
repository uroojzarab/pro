import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { urlencoded } from "body-parser";

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

//Three important configuration
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());
export default app;
//export { app }
