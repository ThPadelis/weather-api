const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const { accessLogStream } = require("./utils/logger");

// Middlewares
app.use(cors()); // CORS handler
app.use(morgan("combined", { stream: accessLogStream })); // Logger

// Routes
app.use("/api/weather", require("./routes/weather"));

app.listen(process.env.APP_PORT, () =>
  console.log(`Server is up and running on port ${process.env.APP_PORT}`)
);
