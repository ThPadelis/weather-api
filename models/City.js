const mongoose = require("mongoose");

const CoordSchema = mongoose.Schema({
  lat: Number,
  lon: Number
});

const CitySchema = mongoose.Schema({
  id: Number,
  name: String,
  country: String,
  timezone: Number,
  sunrise: Number,
  sunset: Number,
  coord: { type: CoordSchema }
});

const CityModel = mongoose.model("City", CitySchema);
const CoordModel = mongoose.model("Coord", CoordSchema);

module.exports = {
  CitySchema,
  CityModel,
  CoordSchema,
  CoordModel
};
