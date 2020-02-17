const mongoose = require("mongoose");
const { CitySchema } = require("./City");
const { ItemSchema } = require("./WeatherItem");

const WeatherSchema = mongoose.Schema(
  {
    code: String,
    message: String,
    city: { type: CitySchema },
    cnt: Number,
    list: [ItemSchema]
  },
  { timestamps: true }
);

const WeatherModel = mongoose.model("Weather", WeatherSchema);

module.exports = {
  WeatherSchema,
  WeatherModel
};
