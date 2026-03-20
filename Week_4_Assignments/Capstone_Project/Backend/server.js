import exp from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import { userApp } from "./APIs/UserAPI.js";
import { adminApp } from "./APIs/AdminAPI.js";
import { authorApp } from "./APIs/AuthorAPI.js";
import { commonApp } from "./APIs/CommonAPI.js";

config();

const app = exp();
app.use(exp.json());
app.use(cookieParser());

//routes
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

const port = process.env.PORT || 5000;

//connect database
async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connected");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log("DB connection error:", err);
  }
}

connectDB();

//invalid path
app.use((req, res) => {
  res.status(404).json({ message: `Invalid path ${req.originalUrl}` });
});