const mongoose = require("mongoose");

const WeatherSchema = mongoose.Schema(
  {
    id: Number,
    main: String,
    description: String,
    icon: String
  },
  { _id: false }
);

const WeatherModel = mongoose.model("Weather", WeatherSchema);

module.exports = { WeatherSchema, WeatherModel };
