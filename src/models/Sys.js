const mongoose = require("mongoose");

const SysSchema = mongoose.Schema(
  {
    type: Number,
    id: Number,
    message: Number,
    country: String,
    sunrise: Number,
    sunset: Number
  },
  { _id: false }
);

const SysModel = mongoose.model("Sys", SysSchema);

module.exports = { SysSchema, SysModel };
