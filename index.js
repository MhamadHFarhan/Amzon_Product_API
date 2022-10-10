const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Importing routes

// database
try {
  mongoose.connect(process.env.DATABASE_URL);
  console.log("Database connected");
} catch (error) {
  console.log(error);
}

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes middleware

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
