const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const coors = require("cors");
const morgan = require("morgan");

// Middlewares
app.use(coors());
app.use(morgan("dev"));

// Routes
app.use("/api/weather", require("./src/routes/weather"));

app.listen(process.env.PORT, () =>
  console.log(`Server is up and running on port ${process.env.PORT}`)
);
