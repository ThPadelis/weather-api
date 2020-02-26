const mongoose = require("mongoose");

const MainSchema = mongoose.Schema(
  {
    temp: Number,
    feels_like: Number,
    pressure: Number,
    humidity: Number,
    temp_min: Number,
    temp_max: Number,
    sea_level: Number,
    grnd_level: Number,
    temp_kf: Number
  },
  { _id: false }
);

const MainModel = mongoose.model("Main", MainSchema);

module.exports = { MainSchema, MainModel };
