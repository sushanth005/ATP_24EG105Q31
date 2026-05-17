import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import { empApp } from "./APIs/empApp.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();

// create express app
const app = exp();

// CORS middleware
app.use(cors({
  origin: true,
  credentials: true,
}));

// cookie parser middleware
app.use(cookieParser());

// body parser middleware
app.use(exp.json());

// path level middleware
app.use("/emp-api", empApp);

// database connection
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB server connected");

    // assign port
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`server listening on ${port}..`);
    });

  } catch (err) {
    console.log("err in db connect", err);
  }
};

connectDB();

// invalid path handler
app.use((req, res) => {
  console.log(req.url);

  res.status(404).json({
    message: `path ${req.url} is invalid`,
  });
});

// error handling middleware
app.use((err, req, res, next) => {
  console.log("error is", err);

  // ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // CastError
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // Duplicate key error
  const errCode =
    err.code ??
    err.cause?.code ??
    err.errorResponse?.code;

  const keyValue =
    err.keyValue ??
    err.cause?.keyValue ??
    err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];

    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  // server side error
  res.status(500).json({
    message: "error occurred",
    error: "Server side error",
  });
});
