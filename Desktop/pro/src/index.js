import connectDB from "./db/db.js";
//require("dotenv").config();
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

connectDB();
