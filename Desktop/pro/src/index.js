import app from "./app.js";
import connectDB from "./db/db.js";
//require("dotenv").config();
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

connectDB()
  .then(
    () => app.listen(process.env.PORT || 8000),
    () => {
      console.log(`Server running on port ${process.env.PORT}`);
    }
  )
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
